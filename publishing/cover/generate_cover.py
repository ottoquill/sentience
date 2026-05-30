#!/usr/bin/env python3
"""
Cover generator for *Sentience* by Otto Quill.

Renders the "Confluence" motif: many cool filaments descending and converging
into a single warm node, under an extra-light tracked title. Deterministic.

Requires: Pillow. Uses DejaVu fonts (bundled on most Linux systems).
Outputs: Sentience-cover-master.png (2560x4096) and Sentience-cover-ebook.png (1600x2560).
"""
import math, os, random
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageChops

SEED = 71  # locks the artwork
random.seed(SEED)

HERE = os.path.dirname(os.path.abspath(__file__))
W, H = 1600, 2560                 # ebook target
SS = 2                            # supersample for crisp lines/type
MW, MH = W * SS, H * SS           # master canvas

FONTS = "/usr/share/fonts/truetype/dejavu"
def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)

# ---------- background: deep indigo-to-black vertical gradient ----------
def background():
    bg = Image.new("RGB", (MW, MH), (0, 0, 0))
    px = bg.load()
    top = (3, 4, 10)
    bot = (10, 12, 28)
    for y in range(MH):
        t = y / (MH - 1)
        # ease toward the convergence band (slightly brighter low-center)
        r = int(top[0] + (bot[0] - top[0]) * t)
        g = int(top[1] + (bot[1] - top[1]) * t)
        b = int(top[2] + (bot[2] - top[2]) * t)
        for x in range(MW):
            px[x, y] = (r, g, b)
    return bg

# ---------- glow buffer: converging filaments ----------
def filaments():
    glow = Image.new("L", (MW, MH), 0)
    d = ImageDraw.Draw(glow)
    cx, cy = MW * 0.5, MH * 0.66          # convergence node
    N = 220                                # number of filaments
    for i in range(N):
        # start near top edge, spread across width
        sx = random.uniform(-0.1, 1.1) * MW
        sy = random.uniform(-0.02, 0.12) * MH
        # control point pulls the curve into a gentle river bend
        mx = (sx + cx) / 2 + random.uniform(-0.18, 0.18) * MW
        my = (sy + cy) / 2 + random.uniform(-0.05, 0.10) * MH
        # most filaments fade before the node; a few pierce through it
        through = random.random() < 0.16
        end_t = 1.0 if through else random.uniform(0.78, 0.99)
        steps = 120
        bright = random.randint(28, 70)
        if through:
            bright = random.randint(70, 120)
        pts = []
        for s in range(steps + 1):
            t = (s / steps) * end_t
            # quadratic bezier sx->(mx,my)->(cx,cy)
            x = (1 - t) ** 2 * sx + 2 * (1 - t) * t * mx + t * t * cx
            y = (1 - t) ** 2 * sy + 2 * (1 - t) * t * my + t * t * cy
            pts.append((x, y))
        # taper: brighter as it nears the node
        for s in range(len(pts) - 1):
            t = s / (len(pts) - 1)
            b = int(bright * (0.25 + 0.75 * t))
            wdt = max(1, int(SS * (0.6 + 1.4 * t)))
            d.line([pts[s], pts[s + 1]], fill=b, width=wdt)
    # bloom: combine sharp + blurred copies
    soft = glow.filter(ImageFilter.GaussianBlur(radius=2 * SS))
    softer = glow.filter(ImageFilter.GaussianBlur(radius=7 * SS))
    glow = ImageChops.lighter(glow, soft)
    glow = ImageChops.lighter(glow, softer.point(lambda v: int(v * 0.8)))
    return glow, (cx, cy)

# ---------- colorize cool, then add a warm convergence core ----------
def colorize(glow):
    # map L -> deep-blue..cyan..white
    lut_r, lut_g, lut_b = [], [], []
    for v in range(256):
        t = v / 255
        # blue -> cyan -> white
        r = int(255 * max(0, (t - 0.55) / 0.45) ** 1.2)
        g = int(255 * (t ** 1.1))
        b = int(255 * (0.35 + 0.65 * t) ** 0.8)
        lut_r.append(min(255, r)); lut_g.append(min(255, g)); lut_b.append(min(255, b))
    r = glow.point(lut_r); g = glow.point(lut_g); b = glow.point(lut_b)
    return Image.merge("RGB", (r, g, b))

def warm_core(size, center, radius, color):
    layer = Image.new("L", size, 0)
    d = ImageDraw.Draw(layer)
    cx, cy = center
    d.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], fill=255)
    layer = layer.filter(ImageFilter.GaussianBlur(radius=radius * 0.55))
    r = layer.point(lambda v: int(v * color[0] / 255))
    g = layer.point(lambda v: int(v * color[1] / 255))
    b = layer.point(lambda v: int(v * color[2] / 255))
    return Image.merge("RGB", (r, g, b))

def vignette(size):
    v = Image.new("L", size, 0)
    d = ImageDraw.Draw(v)
    w, h = size
    d.ellipse([-w * 0.25, -h * 0.18, w * 1.25, h * 1.18], fill=255)
    v = v.filter(ImageFilter.GaussianBlur(radius=min(w, h) * 0.08))
    return v

# ---------- typography ----------
def tracked(draw, text, cx, y, fnt, fill, track):
    widths = [draw.textlength(ch, font=fnt) for ch in text]
    total = sum(widths) + track * (len(text) - 1)
    x = cx - total / 2
    asc, desc = fnt.getmetrics()
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += w + track
    return asc + desc

def compose():
    bg = background()
    glow, center = filaments()
    art = colorize(glow)
    canvas = ImageChops.screen(bg, art)
    # warm core at convergence (the one light)
    core = warm_core((MW, MH), center, int(MW * 0.075), (255, 214, 150))
    canvas = ImageChops.screen(canvas, core)
    halo = warm_core((MW, MH), center, int(MW * 0.16), (120, 90, 50))
    canvas = ImageChops.screen(canvas, halo)
    # vignette
    vig = vignette((MW, MH))
    dark = Image.new("RGB", (MW, MH), (0, 0, 0))
    canvas = Image.composite(canvas, dark, vig)

    draw = ImageDraw.Draw(canvas)
    cx = MW / 2
    # Title
    title_f = font("DejaVuSans-ExtraLight.ttf", int(150 * SS / 1))
    h_used = tracked(draw, "SENTIENCE", cx, int(MH * 0.10), title_f, (238, 242, 255), track=int(14 * SS))
    # hairline rule under title
    rule_y = int(MH * 0.10) + h_used + int(28 * SS)
    rw = int(MW * 0.34)
    draw.line([(cx - rw / 2, rule_y), (cx + rw / 2, rule_y)], fill=(120, 140, 180), width=max(1, SS))
    # subtitle
    sub_f = font("DejaVuSans.ttf", int(40 * SS))
    tracked(draw, "A   N O V E L", cx, rule_y + int(22 * SS), sub_f, (150, 168, 200), track=int(8 * SS))
    # author at foot
    auth_f = font("DejaVuSans-ExtraLight.ttf", int(58 * SS))
    tracked(draw, "OTTO QUILL", cx, int(MH * 0.915), auth_f, (220, 228, 245), track=int(12 * SS))

    # downsample to target (anti-alias)
    final = canvas.resize((W, H), Image.LANCZOS)
    master = canvas  # MW x MH
    return final, master

def main():
    final, master = compose()
    out_eb = os.path.join(HERE, "Sentience-cover-ebook.png")
    out_master = os.path.join(HERE, "Sentience-cover-master.png")
    final.save(out_eb, "PNG")
    master.resize((1600 * 1, 2560 * 1) if False else (2560, 4096), Image.LANCZOS).save(out_master, "PNG")
    print("wrote", out_eb, final.size)
    print("wrote", out_master, "(2560x4096)")

if __name__ == "__main__":
    main()

"""Generate product-style brand images for the ITC World of Brands page."""

from __future__ import annotations

import json
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError as exc:
    raise SystemExit("Install Pillow first: pip install pillow") from exc

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_BRANDS_DIR = ROOT / "public" / "images" / "brands"
OUTPUT_BRANDS_DIR = ROOT / "output" / "brands"
OUTPUT_SITE_DIR = ROOT / "output" / "site-images"

BRANDS = [
    {"slug": "sunfeast", "name": "Sunfeast", "category": "Foods", "primary": "#C2410C", "secondary": "#FDBA74", "product": "Biscuits"},
    {"slug": "aashirvaad", "name": "Aashirvaad", "category": "Foods", "primary": "#92400E", "secondary": "#FDE68A", "product": "Atta"},
    {"slug": "yippee", "name": "Yippee!", "category": "Foods", "primary": "#B45309", "secondary": "#FCD34D", "product": "Noodles"},
    {"slug": "bingo", "name": "Bingo!", "category": "Foods", "primary": "#DC2626", "secondary": "#FCA5A5", "product": "Snacks"},
    {"slug": "farmlite", "name": "Farmlite", "category": "Foods", "primary": "#15803D", "secondary": "#BBF7D0", "product": "Cookies"},
    {"slug": "moms-magic", "name": "Mom's Magic", "category": "Foods", "primary": "#BE185D", "secondary": "#FBCFE8", "product": "Biscuits"},
    {"slug": "candyman", "name": "Candyman", "category": "Foods", "primary": "#7C3AED", "secondary": "#DDD6FE", "product": "Candy"},
    {"slug": "fiama", "name": "Fiama", "category": "Personal Care", "primary": "#0E7490", "secondary": "#A5F3FC", "product": "Shower Gel"},
    {"slug": "vivel", "name": "Vivel", "category": "Personal Care", "primary": "#0369A1", "secondary": "#BAE6FD", "product": "Soap"},
    {"slug": "engage", "name": "Engage", "category": "Personal Care", "primary": "#4338CA", "secondary": "#C7D2FE", "product": "Deodorant"},
    {"slug": "classmate", "name": "Classmate", "category": "Education & Stationery", "primary": "#1D4ED8", "secondary": "#BFDBFE", "product": "Notebook"},
    {"slug": "paperkraft", "name": "Paperkraft", "category": "Education & Stationery", "primary": "#334155", "secondary": "#CBD5E1", "product": "Stationery"},
    {"slug": "nimyle", "name": "Nimyle", "category": "Homecare", "primary": "#059669", "secondary": "#A7F3D0", "product": "Floor Cleaner"},
    {"slug": "mangaldeep", "name": "Mangaldeep", "category": "Matches & Agarbatti", "primary": "#B45309", "secondary": "#FEF3C7", "product": "Agarbatti"},
    {"slug": "aim", "name": "AIM", "category": "Matches & Agarbatti", "primary": "#991B1B", "secondary": "#FECACA", "product": "Matches"},
]


def hex_to_rgb(hex_color: str) -> tuple[int, int, int]:
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i : i + 2], 16) for i in (0, 2, 4))


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size=size)
    return ImageFont.load_default()


def draw_product_card(brand: dict) -> Image.Image:
    size = (640, 640)
    secondary = hex_to_rgb(brand["secondary"])
    primary = hex_to_rgb(brand["primary"])
    img = Image.new("RGB", size, secondary)
    draw = ImageDraw.Draw(img)

    for i in range(8):
        y0 = i * 80
        shade = tuple(max(0, min(255, channel + (i - 4) * 8)) for channel in secondary)
        draw.rectangle([0, y0, size[0], y0 + 80], fill=shade)

    pack = [120, 110, 520, 530]
    draw.rounded_rectangle(pack, radius=36, fill="white")
    draw.rounded_rectangle([pack[0] + 8, pack[1] + 8, pack[2] - 8, pack[3] - 8], radius=30, fill=primary)
    draw.rounded_rectangle([170, 170, 470, 360], radius=24, fill=secondary)
    draw.rounded_rectangle([190, 190, 450, 340], radius=18, fill="white")

    title_font = load_font(54, bold=True)
    sub_font = load_font(28, bold=False)
    small_font = load_font(22, bold=True)

    draw.text((320, 250), brand["product"], fill=primary, font=sub_font, anchor="mm")
    draw.text((320, 420), brand["name"], fill="white", font=title_font, anchor="mm")
    draw.text((320, 485), brand["category"].upper(), fill="#F8FAFC", font=small_font, anchor="mm")
    draw.rounded_rectangle([24, 24, 210, 68], radius=16, fill="white")
    draw.text((36, 46), "ITC Brand", fill=primary, font=small_font, anchor="lm")

    return img


def main() -> None:
    PUBLIC_BRANDS_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_BRANDS_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_SITE_DIR.mkdir(parents=True, exist_ok=True)
    manifest = []

    for brand in BRANDS:
        image = draw_product_card(brand)
        filename = f"{brand['slug']}.jpg"

        for target_dir in (PUBLIC_BRANDS_DIR, OUTPUT_BRANDS_DIR):
            path = target_dir / filename
            image.save(path, format="JPEG", quality=90, optimize=True)
            print(f"Created {path.relative_to(ROOT)}")

        manifest.append(
            {
                "slug": brand["slug"],
                "name": brand["name"],
                "publicPath": f"/images/brands/{filename}",
                "outputPath": f"output/brands/{filename}",
            }
        )

    for target_dir in (PUBLIC_BRANDS_DIR, OUTPUT_BRANDS_DIR):
        manifest_path = target_dir / "manifest.json"
        manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
        print(f"Wrote {manifest_path.relative_to(ROOT)}")

    site_images = ROOT / "public" / "images"
    for source in site_images.glob("*"):
        if source.is_file():
            destination = OUTPUT_SITE_DIR / source.name
            destination.write_bytes(source.read_bytes())
            print(f"Copied {destination.relative_to(ROOT)}")


if __name__ == "__main__":
    main()

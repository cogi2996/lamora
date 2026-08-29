"""Create small, deterministic ambient loops from approved poster artwork.

The image-generation tool supplies still artwork. For the website background,
we turn each poster into a short MP4 with a very subtle Ken Burns motion. The
poster remains available as a no-motion and unsupported-video fallback.
"""

from pathlib import Path

import cv2
import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
EDITORIAL = ROOT / "public" / "images" / "editorial"
MEDIA = ROOT / "public" / "media"
MEDIA.mkdir(parents=True, exist_ok=True)


def make_loop(source_name: str, output_name: str, *, seed: int) -> None:
    source = EDITORIAL / source_name
    image = np.asarray(Image.open(source).convert("RGB"))
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    height, width = image.shape[:2]
    out_width, out_height = 1280, 720
    fps = 24
    seconds = 8
    frames = fps * seconds

    writer = cv2.VideoWriter(
        str(MEDIA / output_name),
        cv2.VideoWriter_fourcc(*"mp4v"),
        fps,
        (out_width, out_height),
    )
    if not writer.isOpened():
        raise RuntimeError("Không thể mở bộ mã hóa MP4 cục bộ")

    # Keep the movement intentionally calm: it should read as atmosphere,
    # never as a distracting slideshow behind copy.
    rng = np.random.default_rng(seed)
    base_scale = max(out_width / width, out_height / height)
    for index in range(frames):
        phase = index / max(frames - 1, 1)
        eased = 0.5 - 0.5 * np.cos(phase * 2 * np.pi)
        zoom = 1.0 + 0.035 * eased
        scaled_width = int(width * base_scale * zoom)
        scaled_height = int(height * base_scale * zoom)
        resized = cv2.resize(image, (scaled_width, scaled_height), interpolation=cv2.INTER_LANCZOS4)
        max_x = max(scaled_width - out_width, 0)
        max_y = max(scaled_height - out_height, 0)
        drift = 0.5 + 0.12 * np.sin(phase * 2 * np.pi + seed)
        x = int(max_x * min(max(drift, 0.0), 1.0))
        y = int(max_y * (0.5 + 0.035 * np.sin(phase * 2 * np.pi + 0.7)))
        frame = resized[y : y + out_height, x : x + out_width]
        # A one-pixel safety path protects against codec/crop rounding.
        if frame.shape[:2] != (out_height, out_width):
            frame = cv2.resize(frame, (out_width, out_height), interpolation=cv2.INTER_LANCZOS4)
        writer.write(frame)
    writer.release()


make_loop(
    "lamora-brewing-ritual-loop-poster.png",
    "lamora-brewing-ritual-loop.mp4",
    seed=11,
)
make_loop(
    "lamora-coffee-hills-loop-poster.png",
    "lamora-coffee-hills-loop.mp4",
    seed=23,
)
print("Generated ambient loops:")
for filename in ("lamora-brewing-ritual-loop.mp4", "lamora-coffee-hills-loop.mp4"):
    path = MEDIA / filename
    print(f"- {path} ({path.stat().st_size:,} bytes)")

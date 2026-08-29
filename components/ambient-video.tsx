"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type AmbientVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

/**
 * Decorative, silent background motion. The poster is always present so the
 * section remains complete when motion is reduced or video is unavailable.
 */
export function AmbientVideo({ src, poster, className = "" }: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const style = { "--ambient-poster": `url("${poster}")` } as CSSProperties;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Keep autoplay reliable across browsers that do not honor the JSX
    // `muted` attribute until the media element has been initialized.
    video.defaultMuted = true;
    video.muted = true;

    const startPlayback = () => {
      void video.play().catch(() => {
        // The poster remains visible when autoplay is blocked by the browser.
      });
    };

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      startPlayback();
    } else {
      video.addEventListener("loadeddata", startPlayback, { once: true });
    }

    return () => video.removeEventListener("loadeddata", startPlayback);
  }, [src]);

  return (
    <div className={`ambientVideo ${className}`.trim()} aria-hidden="true" style={style}>
      <video ref={videoRef} autoPlay muted loop playsInline preload="auto" poster={poster}>
        <source src={src} type="video/mp4" />
      </video>
      <span className="ambientVideoScrim" />
    </div>
  );
}

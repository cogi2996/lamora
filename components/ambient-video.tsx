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
  const style = { "--ambient-poster": `url("${poster}")` } as CSSProperties;

  return (
    <div className={`ambientVideo ${className}`.trim()} aria-hidden="true" style={style}>
      <video autoPlay muted loop playsInline preload="none" poster={poster}>
        <source src={src} type="video/mp4" />
      </video>
      <span className="ambientVideoScrim" />
    </div>
  );
}

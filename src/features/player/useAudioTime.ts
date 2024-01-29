import { useEffect, useRef, useState } from "react";

export function useAudioTime(getPosition: () => number) {
  const frameRef = useRef<number>();
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const animate = () => {
      setPos(getPosition());
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition]);

  return pos;
}

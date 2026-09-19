import { useEffect, useRef } from "react";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const ring = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(${event.clientX}px, ${event.clientY}px, 0)
          translate(-50%, -50%)
        `;
      }
    };

    const animate = () => {
      ring.current.x +=
        (mouse.current.x - ring.current.x) * 0.12;

      ring.current.y +=
        (mouse.current.y - ring.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate3d(${ring.current.x}px, ${ring.current.y}px, 0)
          translate(-50%, -50%)
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);

    const animation = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          hidden
          h-2
          w-2
          rounded-full
          bg-blue-400
          shadow-[0_0_15px_rgba(59,130,246,0.9)]
          md:block
        "
      />

      <div
        ref={ringRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          hidden
          h-10
          w-10
          rounded-full
          border
          border-blue-400/70
          shadow-[0_0_20px_rgba(59,130,246,0.2)]
          md:block
        "
      />
    </>
  );
}

export default Cursor;
import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">

      {/* Outer Ring */}
      <div
        className="custom-cursor fixed h-8 w-8 rounded-full border border-blue-500/70 transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Inner Dot */}
      <div
        className="custom-cursor fixed h-2 w-2 rounded-full bg-blue-500"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />

    </div>
  );
}

export default Cursor;
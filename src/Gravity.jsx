import { useEffect, useRef } from "react";

function Gravity({ children, strength = 25 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    let animationFrame;

    const handleMouseMove = (event) => {
      const rect = element.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      const moveX =
        (distanceX / window.innerWidth) * strength;

      const moveY =
        (distanceY / window.innerHeight) * strength;

      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        element.style.transform = `
          translate3d(${moveX}px, ${moveY}px, 0)
          rotate(${moveX / 12}deg)
        `;
      });
    };

    const resetPosition = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        element.style.transform =
          "translate3d(0, 0, 0) rotate(0deg)";
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetPosition);

      cancelAnimationFrame(animationFrame);
    };
  }, [strength]);

  return (
    <div
      ref={elementRef}
      className="will-change-transform"
    >
      {children}
    </div>
  );
}

export default Gravity;
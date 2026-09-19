import { useEffect, useRef } from "react";

function Gravity({ children, strength = 20 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const handleMouseMove = (event) => {
      const rect = element.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      const moveX = (distanceX / window.innerWidth) * strength;
      const moveY = (distanceY / window.innerHeight) * strength;

      element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate3d(0, 0, 0)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div
      ref={elementRef}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </div>
  );
}

export default Gravity;
import { useEffect, useState } from "react";

export const MousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);


  const { x, y } = mousePosition;
  return (
    <div>
      My mouse x position is {x} and y position is {y}
    </div>
  );
};

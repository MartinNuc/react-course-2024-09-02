import { useEffect, useState } from "react";

type Coordinate = {
  x: number;
  y: number;
};

export function ClickHistory() {
  const [clicks, setClicks] = useState<Array<Coordinate>>([]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      setClicks(clicks => [
        ...clicks,
        {
          x: e.clientX,
          y: e.clientY,
        },
      ]);
    }
    window.addEventListener("click", onClick);

    return () => window.removeEventListener('click', onClick);
  }, []);

  return (
    <ul>
      {clicks.map((click, index) => (
        <li key={index}>
          X: {click.x} Y: {click.y}
        </li>
      ))}
    </ul>
  );
}

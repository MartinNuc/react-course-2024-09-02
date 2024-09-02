import { useState } from "react";

type Props = {
  name: string;
};

export function VendingItem({ name }: Props) {
  const [availableCount, setAvailableCount] = useState(5);

  function handleClick() {
    if (availableCount <= 0) {
      return;
    }

    setAvailableCount(availableCount - 1);
  }

  const isOutOfStock = availableCount === 0;

  return (
    <>
      <button onClick={handleClick}>{availableCount}x</button>
      {name}
      {isOutOfStock && <div style={{ color: 'red' }}>Out of stock</div>}
    </>
  );
}

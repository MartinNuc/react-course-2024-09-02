import { useState } from "react";
import { OutOfStockLabel } from "./out-of-stock-label";
import styles from './vending-item.module.css';
import cn from 'classnames';

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
      <button
        className={cn({ [styles.red]: isOutOfStock })}
        onClick={handleClick}>{availableCount}x</button>
      {name}
      {isOutOfStock && <OutOfStockLabel />}
    </>
  );
}

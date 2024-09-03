import { useEffect, useState} from "react";
import { OutOfStockLabel } from "./out-of-stock-label";
import styles from './vending-item.module.css';
import cn from 'classnames';

type Props = {
  name: string;
};

export function VendingItem({ name }: Props) {

  const [availableCount, setAvailableCount] = useState(4);

  useEffect(() => {
    // componentDidMount
    const timeoutRef = setTimeout(() => {
      console.log('ahoj');
    }, 5000);

    return () => {
      // componentWillUnmount
      clearTimeout(timeoutRef);
    }
  }, []);

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
        disabled={isOutOfStock}
        className={cn({ [styles.red]: isOutOfStock })}
        onClick={handleClick}>{availableCount}x</button>
      {name}
      {isOutOfStock && <OutOfStockLabel />}
    </>
  );
}

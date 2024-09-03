import { OutOfStockLabel } from "./out-of-stock-label";
import styles from './vending-item.module.css';
import cn from 'classnames';
import { Item } from "./vending-machine";

type Props = {
  item: Item;
  onAddToCart: () => void;
};

export function VendingItem({ item: { name, availableCount }, onAddToCart }: Props) {
  
  const isOutOfStock = availableCount === 0;

  return (
    <>
      <button
        disabled={isOutOfStock}
        className={cn({ [styles.red]: isOutOfStock })}
        onClick={onAddToCart}>{availableCount}x</button>
      {name}
      {isOutOfStock && <OutOfStockLabel />}
    </>
  );
}

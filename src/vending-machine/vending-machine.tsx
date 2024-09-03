import { useState } from "react";
import { VendingItem } from "./vending-item";
import styles from "./vending-machine.module.css";

export type Item = {
  name: string;
  availableCount: number;
  price: number;
};

export function VendingMachine() {
  const [cart, setCart] = useState<Item[]>([]);
  const [items, setItems] = useState<Item[]>([
    {
      name: "Tatranka",
      availableCount: 5,
      price: 20,
    },
    {
      name: "Fidorka",
      availableCount: 3,
      price: 10,
    },
    {
      name: "Mars",
      availableCount: 0,
      price: 13,
    },
  ]);

  function handleAddToCart(updatedItem: Item) {
    if (updatedItem.availableCount === 0) { return; }

    setCart([...cart, updatedItem]);

    setItems(
      items.map((originalItem) =>
        originalItem.name !== updatedItem.name
          ? originalItem
          : {
              ...originalItem,
              availableCount: originalItem.availableCount - 1,
            }
      )
    );
  }

  const totalPrice = cart.map(item => item.price).reduce((acc, curr) => acc+curr, 0);

  return (
    <div>
      Total price: {totalPrice},-
      <div className={styles.vendingItems}>
        {items.map((item) => (
          <VendingItem
            key={item.name}
            item={item}
            onAddToCart={() => handleAddToCart(item)}
          />
        ))}
      </div>
    </div>
  );
}

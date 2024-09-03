import { useState } from "react";
import { VendingItem } from "./vending-item";
import styles from "./vending-machine.module.css";
import { DropdownButton } from "../design-system/dropdown-button";
import { AddToWalletInput } from "./add-to-wallet-input";
import { Button } from "../design-system/button";

export type Item = {
  name: string;
  availableCount: number;
  price: number;
};

export function VendingMachine() {
  const [wallet, setWallet] = useState(0);
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
      <div>
        Total price: {totalPrice},-
      </div>
      <div style={{ margin: '20px', background: 'darkblue' }}>
        Coins: {wallet},-
        <DropdownButton label="Add coins">
          <Button onClick={() => setWallet(wallet + 10)}>+10</Button>
          <Button onClick={() => setWallet(wallet + 30)}>+30</Button>
          <Button onClick={() => setWallet(wallet + 50)}>+50</Button>
          <AddToWalletInput onAddMoney={(amount) => setWallet(wallet + amount)} />
        </DropdownButton>
      </div>
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

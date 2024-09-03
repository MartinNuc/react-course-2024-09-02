import { VendingItem } from "./vending-item";

export type Item = {
  name: string;
  availableCount: number;
  price: number;
};

export function VendingMachine() {
  const goods: Item[] = [
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
  ];

  function handleAddToCart(item: Item) {
    // TODO
  }

  return (
    <div>
      {goods.map((item) => (
        <VendingItem
          key={item.name}
          item={item}
          onAddToCart={() => handleAddToCart(item)}
        />
      ))}
    </div>
  );
}

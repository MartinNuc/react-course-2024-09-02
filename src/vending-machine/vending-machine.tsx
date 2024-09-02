import { VendingItem } from "./vending-item";

export function VendingMachine() {
  const goods = [
    'Tatranka',
    'Fidorka',
	  'Mars'
  ];

  return (
    <div>
      {goods.map(item => <VendingItem key={item} name={item} />)}
    </div>
  )
}
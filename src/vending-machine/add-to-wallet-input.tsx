import { KeyboardEvent, useState } from "react";

type Props = {
  onAddMoney: (amount: number) => void;
}

export function AddToWalletInput({onAddMoney}: Props) {
  const [value, setValue] = useState('');

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      onAddMoney(parseInt(value));
      setValue('');
    }
  }

  return (
    <input
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

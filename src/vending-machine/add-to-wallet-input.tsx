import { KeyboardEvent, useEffect, useRef, useState } from "react";

type Props = {
  onAddMoney: (amount: number) => void;
}

export function AddToWalletInput({onAddMoney}: Props) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      onAddMoney(parseInt(value));
      setValue('');
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

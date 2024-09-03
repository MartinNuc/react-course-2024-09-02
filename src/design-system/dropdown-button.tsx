import { useState } from "react";

type Props = {
  label: string;
  children: React.ReactNode;
}

export function DropdownButton({children, label}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return <div style={{position: 'relative'}}>
    <button onClick={() => setIsOpen(!isOpen)}>{label}</button>
    {isOpen && <div style={{
      position: "absolute",
      background: 'white',
      margin: '10px',
      color: 'black'
    }}>
      {children}
    </div>}
  </div>
}
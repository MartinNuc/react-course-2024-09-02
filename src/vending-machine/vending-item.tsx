type Props = {
  name: string;
};

export function VendingItem({ name }: Props) {
  function handleClick() {
    console.log(name);
  }

  return (
    <>
      <button onClick={handleClick}>1x</button>
      {name}
    </>
  );
}

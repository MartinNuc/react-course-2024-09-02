
type Props = {
  array: Array<number>;
}

export function Table({array}: Props) {

  return <table border={1}>
    <tr>
      {array.map((item, index) => <td key={index}>{item}</td>)}
    </tr>
  </table>
}
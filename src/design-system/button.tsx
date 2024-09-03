import { useContext } from "react";
import { ThemeContext } from "../App";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: Props) {
  const theme = useContext(ThemeContext);

  const styleLight = {
    background: "white",
    color: "black",
  };
  const styleDark = {
    background: "black",
    color: "white",
  };
  return (
    <button style={theme === "light" ? styleLight : styleDark} {...rest}>
      {children}
    </button>
  );
}

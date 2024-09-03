import { useState } from "react";
import "./App.css";
import { VendingMachine } from "./vending-machine/vending-machine";
import React from "react";

type Theme = 'light' | 'dark';
export const ThemeContext = React.createContext<Theme>('dark');

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(theme === "dark" ? 'light' : 'dark')}>💡</button>
      <VendingMachine />
    </ThemeContext.Provider>
  );
}

export default App;

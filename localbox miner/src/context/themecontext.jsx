import { createContext, useState } from "react";

export const themecontext = createContext();

export function ThemeProviderFunction({ children }) {
  const [theme, setTheme] = useState("light");

  const themeupdate = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <themecontext.Provider value={{ theme, themeupdate }}>
      {children}
    </themecontext.Provider>
  );
}

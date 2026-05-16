import { useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "neon">("light");
  const toggleTheme = () => setTheme((t) => (t === "light" ? "neon" : "light"));
  return { theme, toggleTheme };
}
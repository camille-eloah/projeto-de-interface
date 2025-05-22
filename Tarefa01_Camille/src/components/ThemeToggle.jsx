import { useEffect, useState } from "react";
import "./ThemeToggle.css"

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  // Aplica ou remove a classe "light" no <body>
  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [isLight]);

  return (
    <button onClick={() => setIsLight(!isLight)} className="theme-toggle">
      {isLight ? "🌞 Tema Claro" : "🌙 Tema Escuro"}
    </button>
  );
}

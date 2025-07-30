import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    // Aplica o tema ao <body> sempre que o theme mudar
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="app-container">
            <h1>🌞🌚 Alternância de Tema</h1>
            <p>Este é um exemplo simples de alternância entre tema claro e escuro.</p>
            <button onClick={toggleTheme}>
                Mudar para {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
};

export default ThemeToggle;
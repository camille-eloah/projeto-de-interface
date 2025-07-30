import React, {useState, useEffect } from 'react';

const TextBackgroundChanger = () => {
    const [text, setText] = useState('');
    const [bgColor, setBgColor] = useState('#ffffff') // cor inicial: branco

    // Altera a cor conforme o texto digitado
    useEffect(() => {
        // Gera uma cor baseada no texto digitado
        const hash = Array.from(text)
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);

            const r = (hash * 3) % 255;
            const g = (hash * 5) % 255;
            const b = (hash * 7) % 255;

            setBgColor(`rgb(${r}, ${g}, ${b})`);
    }, [text]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div style={{
            minHeight: '100vh', 
            backgroundColor: bgColor,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.5s ease'

        }}>
            <h2>🎨 Digite algo para mudar o fundo</h2>
            <input
                type="text"
                placeholder="Digite aqui..."
                value={text}
                onChange={handleChange}
                style={{
                    padding: '0.6rem 1rem',
                    fontSize: '1.2rem',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    width: '300px',
                    textAlign: 'center'
                }}
            />
        </div>
    );
};

export default TextBackgroundChanger;
import React, { useState, useEffect } from 'react';

const TextBackgroundChanger = () => {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff'); // cor inicial: branco

  const colors = ['#ffffff', '#fff59d', '#90caf9', '#f48fb1']; // lista de cores

  useEffect(() => {
    // Pega a cor com base no número de letras (mod 4)
    const index = text.length % colors.length;
    setBgColor(colors[index]);
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
      transition: 'background-color 0.4s ease'
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

export default TextBackgroundChanger3;
import React, { useState, useEffect } from 'react';

const TextBackgroundChanger = () => {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff'); // branco

  useEffect(() => {
    const length = text.length;

    if (length === 0) {
      setBgColor('#ffffff'); // branco
    } else if (length <= 3) {
      setBgColor('#fff59d'); // amarelo claro
    } else if (length <= 6) {
      setBgColor('#90caf9'); // azul claro
    } else {
      setBgColor('#f48fb1'); // rosa
    }
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

export default TextBackgroundChanger;

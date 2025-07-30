import React, { useState } from 'react';

const TextBackgroundChanger3 = () => {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['#ffffff', '#fff59d', '#90caf9', '#f48fb1'];

  const handleChange = (e) => {
    const newText = e.target.value;

    // Verifica se o usuário realmente digitou algo novo
    if (newText.length > text.length) {
      // Avança para a próxima cor da lista
      const nextIndex = (colorIndex + 1) % colors.length;
      setColorIndex(nextIndex);
      setBgColor(colors[nextIndex]);
    }

    setText(newText);
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
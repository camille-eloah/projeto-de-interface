import React, { useState } from 'react';

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    // Atualiza o estado ao digitar
    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handleSenhaChange = (e) => {
        setSenha(e.target.value);
    };

    // Envia os dados do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // impede o recarregamento da página
        console.log('Login:', login);
        console.log('Senha:', senha);
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2>🔐 Tela de Login</h2>

            <label style={labelStyle}>
                Login:
                <input
                    type="text"
                    value={login}
                    onChange={handleLoginChange}
                    style={inputStyle}
                    required 
                />
            </label>

            <label style={labelStyle}>
                Senha:
                <input
                    type="password"
                    value={senha}
                    onChange={handleSenhaChange}
                    style={inputStyle}
                    required 
                />
            </label>

            <button type="submit" style={buttonStyle}>
                Entrar 
            </button>

        </form>
    );
};

// Estilos simples em JS
const formStyle = {
  maxWidth: '400px',
  margin: '50px auto',
  padding: '2rem',
  border: '1px solid #ccc',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  fontFamily: 'Arial'
};

const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1rem',
};

const inputStyle = {
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #aaa',
};

const buttonStyle = {
  padding: '0.7rem',
  fontSize: '1rem',
  backgroundColor: '#008cba',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default LoginForm;
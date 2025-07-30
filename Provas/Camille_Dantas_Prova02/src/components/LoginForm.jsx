import React, { useState } from 'react';

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [bgColor, setBgColor] = useState("#ffffff");

    const colors = ['#90caf9', '#ffffff'];
    const pass = "PIUprova"

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

        if (senha == pass) { // Se a senha submetida for igual a definida na constante "pass", mudará o background do formulário para azul claro
            setBgColor(colors[0]);
        } else {
            setBgColor(colors[1]) // Se não, continuará branco
        };  

    };

    return (
        <form onSubmit={handleSubmit} style={{
            backgroundColor: bgColor,
            maxWidth: '400px',
            margin: '50px auto',
            padding: '32px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            fontFamily: 'Arial'
          }}>
            <h2>Tela de Login</h2>

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

// Estilizando no JS
const formStyle = {
  maxWidth: '400px',
  margin: '50px auto',
  padding: '32px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  fontFamily: 'Arial'
};

const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '16px',
};

const inputStyle = {
  padding: '8px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #aaa',
};

const buttonStyle = {
  padding: '12px',
  fontSize: '16px',
  backgroundColor: '#008cba',
  color: 'white',
  border: 'none',
  borderRadius: '5px'
};

export default LoginForm;
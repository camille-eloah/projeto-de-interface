import React, { useEffect, useState } from 'react';

const DataJson = () => {
    const [posts, setPosts] = useState([]);
    const [userIdFilter, setUserIdFilter] = useState(1);

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
    }

    // Faz a requisição GET quando o botão é clicado
    useEffect(() => { 
        if (buttonClicked) {
        console.log('Busca realizada com sucesso.') // depuração

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json()) // converte resposta para JSON
            .then((data) => setPosts(data)) // armazena os dados no estado
            .catch((error) => console.error('Erro ao buscar posts:', error));
        }}, [buttonClicked]);

    // Filtra os dados pelo userId selecionado
    const filteredPosts = posts.filter((post) => post.userId === userIdFilter);

    return (
   <div style={{ padding: '64px', fontFamily: 'Arial' }}>
      <h2>Lista de Tarefas (userId = {userIdFilter})</h2>

      <div style={{ marginBottom: '16px' }}>
        <label>
          Filtrar por userId:
          <select
            value={userIdFilter}
            onChange={(e) => setUserIdFilter(Number(e.target.value))}
            style={{ marginLeft: '16px', padding: '5px' }}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))} {/* Como só tem 10 usuários, o select mostrará apenas os números de 1 a 10 */}
          </select>
        </label>
      </div>

      <div>
        <button onClick={handleButtonClick}>Buscar dados</button>
      </div>

      <ul style={{ marginTop: '16px' }}>
        {filteredPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: '16px' }}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataJson;
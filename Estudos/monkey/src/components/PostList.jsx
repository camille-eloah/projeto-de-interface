import React, { useEffect, useState } from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [userIdFilter, setUserIdFilter] = useState(1);

    const [searchTerm, setSearchTerm] = useState('');

    // Faz a requisição GET quando o componente monta
    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Erro ao buscar posts:', error));
    }, []);

  // Filtra os posts pelo userId e pelo termo de busca no título
  const filteredPosts = posts
    .filter((post) => post.userId === userIdFilter)
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
   <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>📝 Lista de Posts (userId = {userIdFilter})</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Filtrar por userId:
          <select
            value={userIdFilter}
            onChange={(e) => setUserIdFilter(Number(e.target.value))}
            style={{ marginLeft: '1rem', padding: '0.3rem' }}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Buscar por título:
          <input
            type="text"
            placeholder="Digite para buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginLeft: '1rem', padding: '0.4rem', width: '250px' }}
          />
        </label>
      </div>

      <ul style={{ marginTop: '1rem' }}>
        {filteredPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
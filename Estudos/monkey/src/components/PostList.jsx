import React, { useEffect, useState } from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [userIdFilter, setUserIdFilter] = useState(1);

    // Faz a requisição GET quando o componente monta
    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Erro ao buscar posts:', error));
    }, []);

    // Filtra os posts pelouserId escolhido
    const filteredPosts = posts.filter((post) => post.userId === userIdFilter);

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
            <h2>📝 Lista de Posts (userId = {userIdFilter})</h2>

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
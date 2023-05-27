import P from 'prop-Types';
import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';

const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function Memorizar() {
  //ESTADOS
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  //Mostrar quando o Pai renderizar
  console.log('Pai renderizou');

  //componentDidMount
  useEffect(() => {
    //simular a demora para carregar os posts
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div>
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {useMemo(() => {
        return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />);
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default Memorizar;

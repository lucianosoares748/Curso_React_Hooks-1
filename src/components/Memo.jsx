import React, { useEffect, useState } from 'react';

function Memo() {
  const [posts, setPosts] = useState([]);

  console.log('o pai renderizou');

  //componentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  return (
    <div>
      {posts.map((posts) => {
        return (
          <div key={posts.id} className="post">
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Memo;

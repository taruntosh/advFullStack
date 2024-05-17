import React, { useEffect, useState } from "react";

const UseEffectExample3 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://www.reddit.com/r/reactjs.json"
      );

      // Pull out the data as usual
      const json = await res.json();

      // Save the posts into state
      // (look at the Network tab to see why the path is like this)
      setPosts(json.data.children.map(c => c.data));
    }
    fetchData();
    return () => {
        console.log('CLEAN UP FUNCTION Called')
    }
  }, []); // <-- we didn't pass a value. what do you think will happen?

  // Render as usual
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default UseEffectExample3;
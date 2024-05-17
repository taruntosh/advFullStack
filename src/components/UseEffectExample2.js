import React, { useEffect, useState } from "react";

const UseEffectExample2 = () => {
  // Initialize state to hold the posts
  const [posts, setPosts] = useState([]);

  // effect functions can't be async, so declare the
  // async function inside the effect, then call it
  useEffect(() => {
    async function fetchData() {
      console.log('I am here')
      // Call fetch as usual
      const res = await fetch(
        "https://www.reddit.com/r/reactjs.json"
      );
      const json = await res.json();
      setPosts(json.data.children.map(c => c.data));
    }
    fetchData();
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

export default UseEffectExample2;
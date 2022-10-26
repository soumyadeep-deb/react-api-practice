import React, { useEffect, useState } from "react";
import axios from "axios";

function NewsList(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        console.log(res.data.sources);
        console.log("Inside Then");
        if (res && res.data && res.data.sources) {
          setPosts(res.data.sources);
        }
      })
      .catch((err) => {
        console.log("Inside Error", props.url);
        console.log(err);
      });
  }, [props.url]);

  return (
    <div className="newsList">
      <div>{props.url}</div>
      <div>News will appear here</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.name} | <b>{post.category}</b> | {<a href={post.url}>Link</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;

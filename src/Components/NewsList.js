import React, { useEffect, useState } from "react";
import axios from "axios";
import './NewsList.css'

function NewsList(props) {
  const [posts, setPosts] = useState([]);

  const onSetPosts = (array) => {
    setPosts(array);
  };

  // API call using async await
  useEffect(() => {
    async function getData() {
      const res = await axios.get(props.url);
      console.log(res)
      const data = await res.data;
      onSetPosts(res.data.sources);
    }
    getData();
  }, [props.url]);

// API call using promise
/*
  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        if (res && res.data && res.data.sources) {
            onSetPosts(res.data.sources);
        }
        else{onSetPosts([]);}
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.url]);
*/

  return (
    <div className="newsList">
      <h2>News will appear here</h2>
      <ul>
        {posts && posts.length > 0
          ? posts.map((post) => (
              <li key={post.id}>
                {post.name} | <b>{post.category}</b> |{" "}
                {<a href={post.url}>Link</a>}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default NewsList;

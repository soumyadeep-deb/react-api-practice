import React, { useState } from "react";
import "./App.css";
import DropdownMenu from "./Components/DropdownMenu";
import NewsList from "./Components/NewsList";

function App() {
  const [type, setType] = useState("");

  const onSetType = (typeName) => {
    setType(() => typeName);
  };
  let url = `https://newsapi.org/v2/top-headlines/sources?${type}apiKey=03040e2bb8f04361beda92c70cfb1db5`;

  return (
    <div className="App">
      <DropdownMenu onSetType={onSetType} />
      <NewsList newsType={type} url={url} />
    </div>
  );
}

export default App;
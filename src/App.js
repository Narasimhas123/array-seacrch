import React, { useState } from "react";

// import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta"
];
const App = () => {
  const [data, setdata] = useState();
  // const [sort, setsort] = useState(false);

  return (
    <div id="main">
      <input
        id="search-input"
        value={data}
        onChange={(e) => {
          setdata(e.target.value);
        }}
      />
      <ul>
        {data &&
          searchArray.map((ele) => {
            let dat = ele.toLowerCase();
            if (dat.includes(data.toLowerCase())) return <li>{ele}</li>;
          })}
      </ul>
    </div>
  );
};

export default App;

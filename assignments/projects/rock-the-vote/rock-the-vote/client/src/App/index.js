import React from "react";
import Issues from "./Issues";

function App() {
  let style = {
    backgroundImage:
      "url('https://i.ytimg.com/vi/YJpsTVQE32A/maxresdefault.jpg')",
    width: "100%",
    height: "300px",
    backgroundRepeat: "no-repeat",
    marginTop: "10px",
    marginLeft: "90px",
  };
  return (
    <div>
      <header style={style} />
      <Issues />
    </div>
  );
}

export default App;

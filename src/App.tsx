import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import "./test.css";

const App = () => {
  // hook
  const [name, setName] = useState("John");
  const [names, setNames] = useState(["Nak", "Sak", "Vid"]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("run");
  }, [name, index]);

  function changeName() {
    setName(names[index]);

    if (index == names.length) {
      setIndex(0);
    } else {
      setIndex((pre) => pre + 1);
    }
  }

  return (
    <main>
      <Header nameProps={name} />
      <button onClick={changeName}>Change Name</button>
      <Home />
    </main>
  );
};

export default App;

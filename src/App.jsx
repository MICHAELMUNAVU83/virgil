import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="w-[100%] bg-white h-[100vh]">
        <img src="/virgil.png" alt="Virgil" class="w-[100%] h-[100%]" />
      </div>
    </>
  );
}

export default App;

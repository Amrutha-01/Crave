import { useState } from "react";
import reactLogo from "/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Restaurant_Partnering_Landing_page from "./Restaurant_Interfaces_folder/Restaurant_Partnering_Landing_page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Restaurant_Partnering_Landing_page />
    </>
  );
}

export default App;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./component/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <NavBar />
        <Outlet />
      </div>

      <></>
    </>
  );
}

export default App;

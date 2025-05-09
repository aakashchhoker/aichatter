import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import { ShowAllComponents } from "./components/ShowAllComponents";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShowAllComponents />
    </>
  );
}

export default App;

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Createfacture from "./pages/Createfacture";
import Listfacture from "./pages/Listfacture";

function App() {
  const [activeButton, setActiveButton] = useState(1);

  return (
    <div className="flex flex-row ">
      <Sidebar activeButton={activeButton} setActiveButton={setActiveButton} />
      <main className="w-full">
        {activeButton === 1 ? <Listfacture /> : <Createfacture />}
      </main>
    </div>
  );
}

export default App;

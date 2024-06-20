import Model from "./components/mode.jsx";
import {useState} from "react";

function App() {
    const [open, setOpen] = useState(false);
    function handleOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    return (
      <div>
          <h1>this simple example of ref and potal using useEffect</h1>
        <Model state={open}>
            I am model!
            <button onClick={handleClose}>close</button>
        </Model>
        <button onClick={handleOpen}>open</button>
      </div>
  )
}

export default App

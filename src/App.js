import { Routes, Route, Router, Link, BrowserRouter} from "react-router-dom";
import "./App.css"

//component imports
import NavBar from "./components/NavBar";

//page imports
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>      
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
}


export default App;

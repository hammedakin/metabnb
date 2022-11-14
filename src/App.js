import { Route, Routes } from "react-router-dom"
import './App.css';
import './components/home/Home.css';
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nfts" element={<Home />} />
        <Route path="/community" element={<Home />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
      </Routes>
    </>
  );
}

export default App;

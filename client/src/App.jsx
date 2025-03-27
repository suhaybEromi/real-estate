import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbarr";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

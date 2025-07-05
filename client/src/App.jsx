import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbarr";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

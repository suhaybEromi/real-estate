import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detalle/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    <Navbar/>
    </div>
  );
}

export default App;

import Home from "./Home"
import About from "./About"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Services from "./Services";

const App = () => {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
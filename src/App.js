import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";

function App() {
  return (
    <div id="App">
      <div className="top-overlay"></div>
      <Navbar/>
      <section id="DIVIDER">
        <section>
          <Aside/>
        </section>
        <section>
          <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="about" element= {<AboutUs/>}/>
            <Route path="services" element= {<Services/>}/>
          </Routes>
         <Footer/>
        </section>
      </section>
    </div>
  );
}

export default App;

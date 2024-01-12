import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

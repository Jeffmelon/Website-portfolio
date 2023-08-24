import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Websites from './Pages/Websites';
import Art from './Pages/Art';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import WebDisplay from './Pages/WebDisplay';
import ArtDisplay from './Pages/ArtDisplay';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/websites/:id" element={<WebDisplay />} />
          <Route path="/art" element={<Art />} />
          <Route path="/art/:id" element={<ArtDisplay />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

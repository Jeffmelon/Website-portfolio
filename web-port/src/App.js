import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/websites" element={<websites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

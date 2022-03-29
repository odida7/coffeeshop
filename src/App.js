import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>  
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Menu' element={<Menu />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Contact' element={<Contact />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

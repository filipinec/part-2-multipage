import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import './App.css';
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">

    <nav>
      <h1>My Articles</h1>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} /> 
      <Route path='/contact'element={<Contact/>} />
    </Routes>
      
    </div>
  );
}

export default App;

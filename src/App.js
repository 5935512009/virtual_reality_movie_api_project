import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Movies from './pages/movie/Movies';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

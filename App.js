import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './camponet/Navbar';
import About from './camponet/About';
import Contect from './camponet/Contect';
import Home from './camponet/Home';
import Service from './camponet/Service';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {
  return <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About />} />
        <Route path='/Contect' element={<Contect />} />
        <Route path='/Service' element={<Service/>} />
      </Routes>
    </main>
  </BrowserRouter>
}

export default App;


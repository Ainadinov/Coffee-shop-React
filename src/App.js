import './App.css';
import { Route, Routes } from 'react-router-dom';
import CoffeeHouse from './components/coffee-house/coffee-house';
import OurCoffee from './components/our-coffee/our-coffee';
import Pleasure from './components/pleasure/pleasure';

function App() {
  return (
    <div className='app'>
      <div>
        <Routes>
          <Route path="coffee-house/*" element={<CoffeeHouse/>}/>
          <Route path="our-house/" element={<OurCoffee/>}/>
          <Route path="pleasure/" element={<Pleasure/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

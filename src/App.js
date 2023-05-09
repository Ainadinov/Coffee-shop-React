import './App.css';
import { Route, Routes } from 'react-router-dom';
import CoffeeHouse from './components/coffee-house/coffee-house';
import OurCoffee from './components/our-coffee/our-coffee';
import Pleasure from './components/pleasure/pleasure';
import SideBar from './components/sidebar/sidebar';
import SingleCoffee from './components/single-coffee/single-coffee';

function App() {
  return (
    <>
      <SideBar/>
      <div>
        <Routes>
          <Route path="/" element={<CoffeeHouse/>}/>
          <Route path="our-house/" element={<OurCoffee/>}/>
          <Route path="our-house/:i" element={<SingleCoffee/>}/>
          <Route path="pleasure/" element={<Pleasure/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

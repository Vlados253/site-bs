import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Service from './Pages/Service';
import Contacts from './Pages/Contacts';

import Kazakhstan from './Dialers/Kazakhstan';
import Georgia from './Dialers/Georgia';
import Ukraine from './Dialers/Ukraine';
import Uzbekistan from './Dialers/Uzbekistan';
import Vipo28 from './Components/Vipo28';
import Vipo12 from './Components/Vipo12';
import Vipo18 from './Components/Vipo18';
import Vipo52 from './Components/Vipo52';
import Dvina from './Components/Dvina';
import Dvina2 from './Components/Dvina2';

import MainAutohydraulic from './Main_production/MainAutohydraulic';
import MainAboutCar from './Main_production/MainAboutCar';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about/Kazakhstan" element={<Kazakhstan />} />
          <Route path="/about/Georgia" element={<Georgia />} />
          <Route path="/about/Ukraine" element={<Ukraine />} />
          <Route path="/about/Uzbekistan" element={<Uzbekistan />} />
          <Route path="/Autohydraulic" element={<MainAutohydraulic />} />
          <Route path="/Crane-manipulator" element={<MainAboutCar />} />
          <Route path="/Autohydraulic/vipo28" element={<Vipo28 />} />
          <Route path="/Autohydraulic/vipo12" element={<Vipo12 />} />
          <Route path="/Autohydraulic/vipo18" element={<Vipo18 />} />
          <Route path="/Autohydraulic/vipo52" element={<Vipo52 />} />
          <Route path="/Crane-manipulator/dvina3200.8" element={<Dvina />} />
          <Route path="/Crane-manipulator/dvina4000.10" element={<Dvina2 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

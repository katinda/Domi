import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Nav from './Nav/Nav.js';
import Carousel from './Carousel/Carousel.js';
import Momente from './Momente/Momente.js';
import {Route, Routes} from "react-router-dom";
import Accueil from "./Accueil.js";
import Women from "./Women.js";
import LinkBox from "./LinkBox/LinkBox.js";
import Men from "./Men.js";
import Contact from "./Contact.js";
import Description from "./Description/Description.js";



function App() {

  return (
    <div className="App">
            <Nav/>
        <Routes>
            <Route exact path="/" element={<Accueil  Carousel={Carousel} Momente={Momente}/>}/>
            <Route path="/Women" element={<Women LinkBox={LinkBox}/>} />
            <Route path="/Men" element={<Men LinkBox={LinkBox}/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/description/:id" element={<Description />} />
        </Routes>

    </div>
  );
}

export default App;

import React from 'react';
import './Exercice1.css';
import Header from './Components/Header';
import Ing_Mains from '../assets/ing_mains.webp';

function Exercice1() {
  return (
  <div>
    <div>
      <Header />
    </div>
    <div>
        <img className='ing_mains' src={Ing_Mains} alt="Logo" />
    </div>
  </div>
  );
}

export default Exercice1;

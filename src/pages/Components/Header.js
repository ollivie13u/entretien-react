import React from 'react';
import Logo from '../../assets/ing-light.png';
import Loupe from '../../assets/loupe.svg';
import './Header.css';

function Header() {
  return (
        <div className='header'>
            <div>
                 <img className='logo' src={Logo} alt="Logo" />
            </div>
            <div className='header_links'>
                <img className='loupe' src={Loupe} alt="Logo" />
                <p className='text'>Être client</p>
                <p className='text'>Vos projets</p>
                <p className='text'>Besoin d'aide ?</p>
            </div>
            <div>
                <button className='button' type="button">Espace client</button>
            </div>
    </div>
  )
}

export default Header
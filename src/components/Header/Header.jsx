import React from 'react';
import './header.css';
import Cta from './Cta';
import ME from '../../assets/profile8.png';
// import ME from '../../assets/profile12.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, Eu Sou</h5>
        <h1>Jaime Mahanuque</h1>
        <h5 className="text-light">Front-End Developer </h5>
        <Cta />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll__down'>Rolar Para Baixo</a>
      </div>
    </header>
  )
}

export default Header;
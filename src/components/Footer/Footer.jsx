import React from 'react';
import './footer.css';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ASSUGATOR</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicos</a></li>
        <li><a href="#portifolio">Portifolio</a></li>
        <li><a href="#testimonials">Testemunhas</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy: Powered by Assugator</small>
      </div>
    </footer>
  )
}

export default Footer;
import React from 'react';
import './about.css';
import ME from '../../assets/profile transparent.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Venha Me Conhecer</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__card-icon' />
              <h5>Experiencia</h5>
              <small>1+ Ano</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__card-icon' />
              <h5>Clientes</h5>
              <small>5+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__card-icon' />
              <h5>Projectos</h5>
              <small>20+ Completos</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis exercitationem temporibus dicta minima magnam
            molestiae dolorum atque quam alias perspiciatis eveniet quasi
            nam itaque, eligendi quaerat ad totam iure qui.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
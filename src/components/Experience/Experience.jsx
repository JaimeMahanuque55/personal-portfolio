import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>As Minhas Habilidades</h5>
      <h2>Minha Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML5</h4>
              <small className='text-light'>Avancado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS3</h4>
              <small className='text-light'>Intermediario</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediario</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Sass</h4>
              <small className='text-light'>Avancado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Iniciante</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>ReactJs</h4>
              <small className='text-light'>Iniciante</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Basico</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>PHP</h4>
                <small className='text-light'>Basico</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Laravel</h4>
                <small className='text-light'>Basico</small>
                </div>
              </article>
          
            </div>
        </div>
      </div>


      </section>
  )
}

export default Experience;
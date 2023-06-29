import React from 'react';
import './portifolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// DO NOT USE THE IMAGES PRODUCTION

export const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  }

]


const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>Meus Recentes Trabalhos</h5>
      <h2>Portifolio</h2>

      <div className="container portifolio__container">
        {/* <article className="portifolio__items">
          <div className="portifolio__item-image">
            <img src={IMG1} alt="" />
          </div>  
          <h3>This is a portifolio item title</h3>  
          <div className="portifolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>  */}
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portifolio__items">
              <div className="portifolio__item-image">
                <img src={image} alt={title} />
              </div>  
              <h3>{title}</h3>  
              <div className="portifolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article> 
            )
          })
        }
      </div>
    </section>
  )
}

export default Portifolio;
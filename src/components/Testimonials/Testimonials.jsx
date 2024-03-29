import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';








const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorum rerum recusandae, blanditiis iure iusto magni obcaecati accusamus tempora facere harum, id nesciunt quas voluptatibus voluptate laborum in ipsam suscipit.'
  },

  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorum rerum recusandae, blanditiis iure iusto magni obcaecati accusamus tempora facere harum, id nesciunt quas voluptatibus voluptate laborum in ipsam suscipit.'
  },

  {
    avatar: AVTR3,
    name: 'The Goat',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorum rerum recusandae, blanditiis iure iusto magni obcaecati accusamus tempora facere harum, id nesciunt quas voluptatibus voluptate laborum in ipsam suscipit.'
  },

  {
    avatar: AVTR4,
    name: 'Whatever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorum rerum recusandae, blanditiis iure iusto magni obcaecati accusamus tempora facere harum, id nesciunt quas voluptatibus voluptate laborum in ipsam suscipit.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Avaliacao dos Clientes</h5>
      <h2>Testemunhas</h2>

      <Swiper 
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      className="container testimonials__container">

        {
          data.map(({ avatar, name, review }, index) => {
            return ( 
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials;
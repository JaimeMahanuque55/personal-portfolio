import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Vamos Trocar Uma Conversa</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jaimemahanuque55@gmail.com</h5>
            <a href="mailto:jaimemahanuque55@gmail.com" target="_blank">Mande Uma Mensagem</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Assunto Grave</h5>
            <a href="https://m.me/grizzlymito" target="_blank">Mande Uma Mensagem</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone=+258847714257" target="_blank">Mande Uma Mensagem</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Seu Nome Completo' required />
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name="message" placeholder='Mensagem' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
import { React } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Portifolio from './components/Portifolio/Portifolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import './Home.css'
import Header from '../../compoments/Header/Header'
import Services from '../../compoments/Services/Services'
import Contact from '../../compoments/contact/contact';
import Footer from '../../compoments/footer/Footer'


const Home = forwardRef((props, ref) => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useImperativeHandle(ref, () => ({
    scrollToContact: scrollToContact,
  }));
  
  return (
    <div>
      <Header/>
      <Services />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer/>

      
    </div>
  )
})

export default Home

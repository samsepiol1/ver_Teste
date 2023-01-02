import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'

import facebook from '../../images/social/facebook.png'
import mysql from '../../images/social/sql.png'
import ruby from '../../images/social/ruby.png'
import javascript from '../../images/social/javascript.png'
import python from '../../images/social/python.webp'

const Contact = () => {
  return (
    <Section title="Tecnologias">
      <ContactForm />
      <Bounce cascade>
        
        <div className="links">
          <a
            href="https://github.com/jigalin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mysql} alt="Github Logo" width="40px" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ruby} alt="Linkedin Logo" width="200px" />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={javascript} alt="Facebook Logo" width="200px" />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={python} alt="Facebook Logo" width="200px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact

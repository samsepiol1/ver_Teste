import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'

import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Flag from 'react-world-flags'




const About = () => {
  return (
    <Section title="Sobre">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Quem eu sou?</h2>
            <p>
              Oi, eu sou o Lucas{' '}
              <span role="img" aria-label="lightning">
                😄
              </span>{' '}
            </p>
            <p>
              <span role="img" aria-label="lightning">
              🎓
              </span>{' '}
              Estudante de Sistemas para Internet - IFRN
            </p>
            <p>
              <span role="img" aria-label="lightning">
              🎓💻
              </span>{' '}
              Técnico em Redes de Computadores - IMD/UFRN
            </p>

            <p>
              <span role="img" aria-label="lightning">
              🎓💻
              </span>{' '}
              Técnico em Informática Para Internet - IFRN
            </p>
            <p>

              <span role="img" aria-label="lightning">
                  <Flag code="br" height="16" /> <Flag code="cn" height="16" />
              </span>{' '}
              Um dos primeiros estudantes a representar o estado no programa Huawei Seeds For The Future
            </p>

            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                </span>{' '}
                > Eu amo
              </p>
              <Typewriter
                options={{
                  strings: [
                    'Aprender novas tecnologias',
                    'resolver problemas complexos',
                    'pesquisar novas soluções',
                    'identificar e corrigir falhas',
                    'aprender com os erros',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
              Desde 2014 - ando em contato com o mundo da programação. Lembro que meus primeiros passos se deram em um site chamado CodeAcademy 
              lá pude aprender sobre HTML, CSS, JS e PHP, durante esse período tive a curiosidade de saber como um software funcionava e vi conceitos relacionados as linguagens: C, C++, Assembly.
              Mas pera lá pessoal, eu não cheguei a criar nada extraórdinario naquela época 😄 só um joguinhos e programas não tão complexos.
              

              
            </p>
           

            <p>
           
            Em 2015 busquei entender o processo de publicação de site na internet e para simplificar o processo usei a IDE Abode Dreamweaver e o WordPress (Me arrependo um pouco). Assim Nascia o MundoHq, um site bem simples onde realizava o upload de revistas em quadrinhos.


              </p>

              <p>
              2017 foi o ano a qual ingressei no curso técnico de redes de computadores no IMD/UFRN. Lá aprendi bastante sobre a lógica de programação e outros assuntos base de ciência da computação e conhecimentos mais específicos sobre Redes TCP/IP, Redes Móveis, Redes Bluetooth e outras tanto do ponto de vistia lógico quanto físico.
              Concluí o curso em 2019 com a prática profissional onde pude aplicar aquilo foi aprendi e, também, fui monitor das disciplinas: Lógica de Programação, Arquitetura de Computadores, Sistemas Operacionais, Redes de Computadores I, Sistemas de Conectividade e Banco de Dados.

           
             </p>

             <p>
              Em 2020 resolvi ingressar no curso técnico de Informática Para Internet do IFRN e com isso consegui entender o funcionamento básico de Sistemas e Sites estáticos. Nesse mesmo ano acabei por desenvolver projetos e me alocando no mercado de trabalho como Desenvolvedor. 
             </p>

             <p>
              No Ano de 2022 ingressei no Curso Superior de Sistemas Para Internet do IFRN com a missão de entender como antigas e novas tecnologias serão integradas em nossa realidade e como funcionarão os Sistemas, Sites, Aplicativos que serão a ponte para interação com essas tecnologias. 
              Acredito que IoT estará cada vez mais presente em nosso dia a dia e será fundamental o entendimento, produção e correção de Sistemas que possuem conectividade com a Internet. No curso acabei me engajando em projetos e programas de intercâmbio que me permitiram desenvolver um visão holística sobre a área
             </p>
              {"\n"}
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Rio Grande do Norte, Brasil</p>
            </div>
          </div>
        </Fade>
       
      </div>
    </Section>
  )
}

export default About

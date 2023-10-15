import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { faCode, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import './CSS Files/about.css';

function About() {
  const languages = [
    'Python',
    'Java',
    'Groovy',
    'C/C++',
    'HTML/CSS',
    'JavaScript',
    'Django',
    'NodeJS',
    'Robot',
    'PyTorch',
    'Keras',
    'Tensorflow'
  ];

  const databases = [
    'SQL',
    'MongoDB',
    'Elastic Search',
    'AWS',
  ];

  const tools = [
    'Git',
    'Docker',
    'Kubernetes',
    'AWS',
    'Jenkins'
  ]


  return (
    <section className='about-section' id='About'>
      <h1 className='about-title'>
        About<span className="period">.</span>
      </h1>
      <div className='content-wrapper'>
        <div className='about-text'>
          <p>
          I'm a Backend Software Engineer with a passion for building modular, scalable, and resilient systems.
          </p>
          <br />
          <p>
          My interests span Machine Learning and backend infrastructure. Lately, I've been diving into technologies like Kubernetes and Terraform in my current role.
          </p>
          <br />
          <p> Outside of work, I enjoy watching shows, working out, and occasionally sketching. </p>
          <br />
          <p>If you're interested in exploring collaboration opportunities, don't hesitate to reach out!</p>
        </div>
        <div className='right-section'>
          <div className='tools'>
            <h1>
            <FontAwesomeIcon icon={faCode} className="period"  /> {' '} 
            Languages / Frameworks
            </h1>
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
            <br />
            <h1>
            <FontAwesomeIcon icon={faCode} className="period"  /> {' '} 
            Databases
            </h1>
            {databases.map((db, index) => (
              <span key={index}>{db}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon icon={faScrewdriverWrench} className="period"  /> {' '} 
               Tools
            </h1>
            {tools.map((tool, index) => (
              <span key={index}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
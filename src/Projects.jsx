import React from 'react';
import './CSS Files/projects.css';

import sarkar from './Images/sarkar.png';
import flowchart from './Images/flowchart.png';
import queuing from './Images/queuing.png';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ title, imageSrc, githubLink, technologies, description }) {
  return (
    <div className='project'>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className='images' src={imageSrc} alt={title} />
      </a>
      <div className='project-info'>
        <div className='project-title'>
          <h2>{title}</h2>
          <div className='liness'></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <h3><span className="period">{technologies}</span></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id='Projects'>
      <h1 className='title'>
        My Projects <span className="period">.</span>{' '}
      </h1>
      {/* <div className='section-divider'></div> */}
      <div className='projects-wrapper'>
        <ProjectCard
          title="Hackathon - SARKAR.AI"
          imageSrc={sarkar}
          githubLink="https://github.com/Ruturaj123/SARKAR.AI"
          technologies="HTML CSS JavaScript Python Django"
          description="A hackathon project that uses sentiment analysis to provide the current sentiment of any given topic on twitter. It also has a context-based Q&A bot which answers questions based on the provided context."
        />

        <ProjectCard
          title="Flowchart detection"
          imageSrc={flowchart}
          githubLink="https://github.com/Ruturaj123/Flowchart-Detection"
          technologies="Python, Open-CV, Tensorflow"
          description="This project aims to detect hand-drawn flowcharts using tensorflow. It detects each component in the flowchart and provides the co-ordinates for the same so that it can be used to digitize the flowchart."
        />

        <ProjectCard
          title="Queuing App"
          imageSrc={queuing}
          githubLink="https://github.com/Ruturaj123/QueueingApp"
          technologies="Android, Java, XML"
          description="This app simplifies the submission process by creating virtual queues, enabling teachers to schedule future submissions and notifying students. Students can join queues, stay informed about their position, and subscribe to teachers for real-time updates."
        />
      </div>
    </div>
  );
}

export default Projects;

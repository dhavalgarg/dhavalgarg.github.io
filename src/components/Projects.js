import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaShareSquare,
  FaAngleDown,
  FaAngleUp,
  FaPython,
} from 'react-icons/fa';

export const Projects = () => {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);
  const projectsData = [
    {
      id: 1,
      name: 'Multi-Model Demand Forecasting, Wegmans',
      description: 'Collaborated with Wegmans on a real-world retail data science project.Conducted exploratory data analysis (EDA) on a dataset of 96,000 sales records encompassing 108 products, revealing distinctive seasonal patterns and trends for each individual item.Integrated weather data and holiday effects to assess their impact on sales, addressed missing data through cleaning and imputation.Developed a forecasting pipeline employing Prophet, Random Forest, and XGBoost models to predict sales for three distinct timeframes (15 days, 3 months, and 6 months) for all items. Attained a significant improvement with a 52 % reduction in Mean Absolute Percentage Error (MAPE) compared to baseline model. Developed and documented code for seamless delivery to Wegmans.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      Programming_Language: ['Python', 'SQL'],
      githubURL: 'https://github.com/dhavalgarg',
    },
    { 
      id: 2,
      name: 'Prediction of Hourly Bike Usage for Citi Bike Stations in New York City',
      description: 'Created a comprehensive Machine Learning pipeline in PySpark and Databricks with Git integration, employing the Prophet model for precise hourly bike usage forecasting. Leveraged a dataset of one million bike usage records, implementing MLOps strategies for model performance enhancement and periodic retraining, ultimately enhancing resource allocation and the efficiency of the bike sharing program.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      Programming_Language: ['Python', 'SQL'],
      githubURL: 'https://github.com/dhavalgarg/Prediction-of-Hourly-Bike-Usage-for-Citi-Bike-Stations-in-New-York-City',
    },
    {
      id: 3,
      name: 'Podcast Recommender',
      description: 'Created dataset by converting podcast video content into audio format and applied advanced state-of-the-art Whisper model for accurate transcription. Designed and implemented a podcast recommendation system powered by FAISS similarity search, enhancing content discovery and user engagement.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      Programming_Language: ['Python'],
      githubURL: 'https://github.com/dhavalgarg/Podcast-Recommender-',
    }
  ];  

  // jsx
  return (
    
    <section className="section projects" id="projects">
      {/* title */}
      <div className="section-title">
        <h2>
          latest <span>works</span>
        </h2>
        <div className="underline"></div>
      </div>
     
     
      <div style={ {padding: '50px','align-items': 'center'}}>
        {projectsData.map((project) => (
          <div key={project.id} className='project_name'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies: </strong>{project.technologies.join(', ')}</p>
            <p><strong>Programming Language: </strong>{project.Programming_Language.join(', ')}</p>
            <p>
              <strong>GitHub URL:</strong>{' '}
              <a href={project.githubURL} target="_blank" rel="noopener noreferrer">
                Project Link
              </a>
            </p>
          </div>
        ))}
      </div>
    


      {/* projects-center */}
      {/* <div className="section-center projects-center">
        {loading ? (
          <Loading />
        ) : (
          <>
            {projects.map((project) => (
              <SingleProject key={project.id} {...project} />
            ))}
          </>
        )}
      </div> */}

      {/* all projects btn */}
      {/* <div className="btn-container">
        <Link to="/projects" className="btn">
          view more <FaShareSquare className="fa" />
        </Link>
      </div> */}
    </section>
  );
};

const SingleProject = ({
  imgUrl,
  title,
  desc,
  stack,
  url,
  github,
  isClientWork
}) => {
  const [showDesc, setShowDesc] = useState(false);

  // jsx
  return (
    <article className="project">
      {/* image */}
      <div className="project-img">
        <img
          src={imgUrl}
          alt={title}
          className="project-image"
          loading="lazy"
        />
      </div>
      <div className="project-details">
        {/* info */}
        <div className="project-info">
          <h3 className="project-title">{title}</h3>

          <button
            className="project-text-toggle"
            onClick={() => setShowDesc(!showDesc)}
          >
            Description{' '}
            {showDesc ? (
              <FaAngleUp className="fa" />
            ) : (
              <FaAngleDown className="fa" />
            )}
          </button>

          <p className={`project-text ${showDesc ? 'show-project-text' : ''}`}>
            {desc}
          </p>

          <div className="project-tools">
            {stack.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        {/* footer */}
        <div className="project-footer">
          <a href={url} target="_blank" rel="noreferrer" title="Live Site">
            <strong>
              <FaShareSquare className="fa" /> <span>live site</span>
            </strong>
          </a>
          {!isClientWork && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Code"
            >
              <FaGithub className="fa" /> <span>source code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Projects;
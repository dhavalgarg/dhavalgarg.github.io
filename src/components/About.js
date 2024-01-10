import React from 'react';
import aboutSmallImg from '../images/about/my_img.jpeg';
import aboutBigImg from '../images/about/my_img.jpeg';
import { Skills } from './Skills';

export const About = () => {
  // state
  const [age, setAge] = React.useState(20);

  React.useEffect(() => {
    setAge(
      Math.floor((new Date() - new Date('1999-11-13').getTime()) / 3.15576e10)
    );
  }, []);

  // jsx
  return (
    <section id="about" className="section about">
      <div className="section-title">
        <h2>
          <span>about</span> me
        </h2>
        <div className="underline"></div>
      </div>

      <div className="section-center about-center">
        {/* about-img  */}
        <article>
          {/* small image */}
          <div className="about-img-small">
            <img
              src={aboutSmallImg}
              alt="Dhaval"
              className="about-image-small"
              loading="lazy"
            />
          </div>
          {/* big image */}
          <div className="about-img-big">
            <img
              src={aboutBigImg}
              alt="Dhaval"
              className="about-image-big"
              loading="lazy"
            />
          </div>
        </article>

        <article className="about-info">
          <p>
            {/* text */}
            I'm <strong>Dhaval</strong>, a <span>{age}</span> year old
            <strong> recent graduate</strong> from University of Rochester in Data Science. I have worked on several projects that involve <strong>Machine Learning</strong>, <strong>Data Analytics</strong>,{' '}
            <strong>Data Visualization</strong>, and <strong>MLOps</strong>.
            <br />
            
            <br />
            <br />
            When I'm not coding, I enjoy chilling with sitcoms or getting lost in a good book. 
            Currently hooked on "Project Hail Mary" by Andy Weir, it's teaching me that curiosity and enthusiasm are key to reaching goals faster and keeping things interesting. 
            I'm also a sports fan, playing Table Tennis and Cricket for some fun and fitness.
          </p>

          {/* stack */}
          <Skills />
        </article>
      </div>
    </section>
  );
};

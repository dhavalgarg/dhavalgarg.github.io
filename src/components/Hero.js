import React from 'react';
import heroImg from '../images/hero/hero-img.svg';
import { AppContext } from '../context';
import { FaCode, FaEnvelope } from 'react-icons/fa';

export const Hero = () => {
  // function from context
  const { smoothScroll } = React.useContext(AppContext);

  // jsx
  return (
    <header id="home">
      <div className="banner-container">
        {/* hero-info */}
        <article className="hero-info">
          <h1 id="my-name">
            hey,<span> I'm Dhaval</span>
          </h1>
          <p>
            I am Data Scientist. Currently,I'm looking to be part of a team and use my skills .
          </p>
          <div className="hero-btn-container">
            <a
              href="#projects"
              className="btn hero-btn"
              onClick={(e) => smoothScroll(e)}
              title="My Latest Works"
            >
              projects <FaCode className="fa" />
            </a>
            <a
              href="mailto:dhaval.garg@outlook.com"
              className="btn hero-btn"
              title="Email Me Now"
            >
              contact <FaEnvelope className="fa" />
            </a>
          </div>
        </article>
      </div>
    </header>
  );
};

import { motion } from 'motion/react';

import Speech from './Speech';
import { heroFollowVariants } from '../../utils/animationVariants';

import './style.css';

const HeroRight = () => {
  return (
    <div className="hero-right">
      <motion.div
        className="hero-follow"
        variants={heroFollowVariants}
        initial="initial"
        animate="animate"
      >
        <motion.a
          variants={heroFollowVariants}
          href="https://www.linkedin.com/in/roman-kozyrev-407464200/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" alt="" />
        </motion.a>
        <motion.a
          variants={heroFollowVariants}
          href="https://github.com/Roman-Y-K"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" alt="" />
        </motion.a>
        <motion.div variants={heroFollowVariants} className="follow-label">
          <div className="follow-text">FOLLOW</div>
        </motion.div>
      </motion.div>

      <Speech />

      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="hero-certificate"
      >
        <img width={100} src="/certificate.png" alt="" />
        W3School CERTIFICED
        <br />
        PROFESSIONAL
        <br />
        REACT DEVELOPER
      </motion.div>

      <motion.a
        href="#contact"
        className="hero-contact"
        animate={{
          x: [200, 0],
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
        }}
      >
        <motion.div
          className="contact-button"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 200 200" width="150" height="150">
            <circle cx="100" cy="100" r="90" fill="pink" />
            <path
              id="innerCirclePath"
              fill="none"
              d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
            <text className="button-text">
              <textPath href="#innerCirclePath">Hire Now •</textPath>
            </text>
            <text className="contact_button_text">
              <textPath href="#innerCirclePath" startOffset="44%">
                Contact Me •
              </textPath>
            </text>
          </svg>
          <div className="button-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="black"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </div>
        </motion.div>
      </motion.a>
    </div>
  );
};

export default HeroRight;

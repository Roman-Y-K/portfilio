import { motion } from 'motion/react';

import { heroDescrVariants } from '../../utils/animationVariants';

import './style.css';

const HeroLeft = () => {
  return (
    <div className="hero-left">
      <motion.h1
        className="hero-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hey There,
        <br />
        <span>I'm Roman!</span>
      </motion.h1>

      <motion.div
        variants={heroDescrVariants}
        initial="initial"
        animate="animate"
        className="hero-descr"
      >
        <motion.h2 variants={heroDescrVariants}>Frontend Developer</motion.h2>
        <motion.h3 variants={heroDescrVariants} className="hero-subtitle">
          I build things for the web
        </motion.h3>
      </motion.div>

      <motion.a
        animate={{ y: [0, 5], opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut',
        }}
        id="#services"
        className="hero-scroll"
      >
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
            stroke="white"
            strokeWidth="1"
          />
          <motion.path
            animate={{ y: [0, 5] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'easeInOut',
            }}
            d="M12 5V8"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </motion.a>
    </div>
  );
};

export default HeroLeft;

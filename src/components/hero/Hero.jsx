import { motion } from 'motion/react';
import { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';

import Speech from './Speech';
import Shape from './Shape';

import './style.css';

const descrVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_section left">
        <motion.h1
          className="hero_title"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hey There,
          <br />
          <span>I'm Roman!</span>
        </motion.h1>

        <motion.div
          variants={descrVariants}
          initial="initial"
          animate="animate"
          className="hero_descr"
        >
          <motion.h2 variants={descrVariants}>Frontend Developer</motion.h2>
          <motion.h3 variants={descrVariants} className="hero_subtitle">
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
          className="hero_scroll"
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

      <div className="hero_section right">
        <motion.div
          className="hero_follow"
          variants={followVariants}
          initial="initial"
          animate="animate"
        >
          <motion.a variants={followVariants} href="/">
            <img src="/linkedin.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/github.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="follow_label">
            <div className="follow_text">FOLLOW</div>
          </motion.div>
        </motion.div>

        <Speech />

        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="hero_certificate"
        >
          <img width={100} src="/certificate.png" alt="" />
          W3School CERTIFICED
          <br />
          PROFESSIONAL
          <br />
          REACT DEVELOPER
        </motion.div>

        <motion.a
          href="/#contact"
          className="hero_contact"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            className="contact_button"
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
              <text className="contact_button_text">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="contact_button_text">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="contact_button_icon">
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
      <div className="hero_bg">
        {/* <Canvas
          dpr={[1, 1]}
          gl={{ powerPreference: 'low-power' }}
          frameloop="always"
        >
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas> */}

        <div className="hero_image">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

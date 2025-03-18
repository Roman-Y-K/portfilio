import React from 'react';
import { motion } from 'motion/react';

import { technologiesVariants } from '../../utils/animationVariants';
import { webList, animationList, perfomanceList } from '../../utils/services';

import './style.css';

const Web = () => {
  return (
    <motion.div
      variants={technologiesVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h3 className="details-title">
        Creating web applications that load fast, adapt to any device, and
        integrate seamlessly with the backend
      </motion.h3>

      <motion.ul variants={technologiesVariants}>
        {webList.map((item) => (
          <motion.p
            className="details-item"
            variants={technologiesVariants}
            key={item.id}
          >
            • {item.text}
          </motion.p>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Animation = () => {
  return (
    <motion.div
      variants={technologiesVariants}
      initial="initial"
      animate="animate"
    >
      <h3 className="details-title">
        Adding animations that make your website more engaging and improve user
        experience.
      </h3>

      <motion.ul variants={technologiesVariants}>
        {animationList.map((item) => (
          <motion.p
            className="details-item"
            variants={technologiesVariants}
            key={item.id}
          >
            • {item.text}
          </motion.p>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Perfomance = () => {
  return (
    <motion.div
      variants={technologiesVariants}
      initial="initial"
      animate="animate"
    >
      <h3 className="details-title">
        Optimizing your website’s code, improve loading speed, and boost SEO
        rankings.
      </h3>

      <motion.ul variants={technologiesVariants}>
        {perfomanceList.map((item) => (
          <motion.p
            className="details-item"
            variants={technologiesVariants}
            key={item.id}
          >
            • {item.text}
          </motion.p>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export { Web, Animation, Perfomance };

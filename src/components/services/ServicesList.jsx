import React from 'react';
import { motion } from 'motion/react';

import { textVariants, listVariants } from '../../utils/animationVariants';
import { services } from '../../utils/services';

import './style.css';

const ServicesList = ({ isInView, activeId, setActiveId }) => {
  return (
    <div className="services">
      <motion.h2
        variants={textVariants}
        animate={isInView ? 'animate' : 'initial'}
        className="services-title"
      >
        How do I help?
      </motion.h2>
      <motion.div
        variants={listVariants}
        animate={isInView ? 'animate' : 'initial'}
        className="services-list"
      >
        {services.map((service) => {
          const isActive = activeId === service.id;

          return (
            <motion.div
              variants={listVariants}
              className="services-item"
              key={service.id}
              animate={isActive ? { scale: 1.05 } : { scale: 1 }}
              style={{ transformOrigin: 'left' }}
              onClick={() => setActiveId(service.id)}
            >
              <div className="service-icon">
                <img src={service.img} alt="" />
              </div>

              <h2 className="service-info">{service.title}</h2>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ServicesList;

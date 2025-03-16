import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

import { Web, Animation, Perfomance } from './ServiceItems';
import { textVariants, listVariants } from '../../constants/animationVariants';
import { services } from '../../constants/services';

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);

  const ref = useRef();
  const isInView = useInView(ref, { margin: '-150px' });

  return (
    <div className="services" ref={ref}>
      <div className="services_section left">
        <motion.h2
          variants={textVariants}
          animate={isInView ? 'animate' : 'initial'}
          className="services_title"
        >
          How do I help?
        </motion.h2>
        <motion.div
          variants={listVariants}
          animate={isInView ? 'animate' : 'initial'}
          className="service_list"
        >
          {services.map((service) => {
            const isActive = currentServiceId === service.id;

            return (
              <motion.div
                variants={listVariants}
                className="service_item"
                key={service.id}
                animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                style={{ transformOrigin: 'left' }}
                onClick={() => setCurrentServiceId(service.id)}
              >
                <div className="service_icon">
                  <img src={service.img} alt="" />
                </div>

                <h2 className="service_info">{service.title}</h2>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className="services_section right">
        {currentServiceId === 1 && isInView && <Web />}
        {currentServiceId === 2 && isInView && <Animation />}
        {currentServiceId === 3 && isInView && <Perfomance />}
      </div>
    </div>
  );
};

export default Services;

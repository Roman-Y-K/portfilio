import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { projectsList } from '../../utils/services';
import {
  imgVariants,
  projectsTextVariants,
} from '../../utils/animationVariants';

import './style.css';

const PortfolioItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-10px' });

  return (
    <div ref={ref} className="project-item">
      <motion.div
        variants={imgVariants}
        animate={isInView ? 'animate' : 'initial'}
        className="project-image"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={projectsTextVariants}
        animate={isInView ? 'animate' : 'initial'}
        className="project-text"
      >
        <motion.h2 variants={projectsTextVariants}>{item.title}</motion.h2>
        <motion.p variants={projectsTextVariants}>{item.desc}</motion.p>
        <motion.a variants={projectsTextVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const PortfolioList = ({ setProgress }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      onSlideChange={(swiper) => {
        setProgress((swiper.activeIndex + 1) / projectsList.length);
      }}
    >
      {projectsList.map((item) => (
        <SwiperSlide key={item.id}>
          <PortfolioItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioList;

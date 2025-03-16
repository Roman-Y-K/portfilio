import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { projectsList } from '../../constants/services';
import {
  imgVariants,
  projectsTextVariants,
} from '../../constants/animationVariants';

import './style.css';

const ListItem = ({ item }) => {
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

const Portfolio = () => {
  const [progress, setProgress] = useState(0.25);

  const circleRadius = 70;
  const circumference = 2 * Math.PI * circleRadius;

  const ref = useRef();

  return (
    <div className="portfolio" ref={ref} style={{ height: '100vh' }}>
      <div className="portfolio-progress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            transform="rotate(-90 80 80)"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            style={{ transition: 'stroke-dashoffset 0.3s ease' }}
          />
        </svg>
      </div>

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
            <ListItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;

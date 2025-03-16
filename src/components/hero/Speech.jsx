import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';
import { memo } from 'react';

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="bubble_container"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            'Same substring at the start will only be typed out once, initially',
            1000,
            'Lorem ipsum dolor sit amet lerinat consectetur adipisicing. ',
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/hero.png" alt="" />
    </motion.div>
  );
};

export default memo(Speech);

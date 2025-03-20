import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';
import { memo } from 'react';

const Speech = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="bubble-container"
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            'Transforming concepts into reality...',
            1000,
            'With modern technologies and a passion for perfection.',
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default memo(Speech);

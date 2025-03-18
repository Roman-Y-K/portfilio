import React from 'react';
import { motion } from 'motion/react';

function PortfolioProgress({ progress }) {
  const circleRadius = 70;
  const circumference = 2 * Math.PI * circleRadius;

  return (
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
  );
}

export default PortfolioProgress;

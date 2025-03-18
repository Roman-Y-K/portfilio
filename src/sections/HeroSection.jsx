import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import HeroLeft from '../components/hero/HeroLeft';
import HeroRight from '../components/hero/HeroRight';
import Shape from '../components/hero/Shape';

import './style.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <HeroLeft />
      <HeroRight />

      <div className="hero-bg">
        {/* <Canvas
            dpr={[1, 1]}
            gl={{ powerPreference: 'low-power' }}
            frameloop="always"
          >
            <Suspense fallback="loading...">
              <Shape />
            </Suspense>
          </Canvas> */}

        <div className="hero-image">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

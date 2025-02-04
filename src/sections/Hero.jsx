import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';

import { WorkPlace } from '../components/WorkPlace';
import { calculateSizes } from '../constants';
import Loader from '../components/Loader';
import Target from '../components/Target';

const Hero = () => {
  const controls = useControls('WorkPlace', {
    positionX: { value: -0.5, min: -10, max: 10 },
    positionY: { value: -4.9, min: -10, max: 10 },
    positionZ: { value: 3.1, min: -10, max: 10 },

    rotationX: { value: -2.7, min: -10, max: 10 },
    rotationY: { value: 3.3, min: -10, max: 10 },
    rotationZ: { value: 3.1, min: -10, max: 10 },

    scale: { value: 6.6, min: 0.1, max: 10 },
  });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isBigMobile = useMediaQuery({ minWidth: 640, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  console.log(isSmall, isMobile, isTablet);

  const sizes = calculateSizes(isSmall, isMobile, isBigMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-accentText text-center font-generalsans">
          Hi, I am Roman <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <WorkPlace
              // position={[
              //   controls.positionX,
              //   controls.positionY,
              //   controls.positionZ,
              // ]}
              rotation={[
                controls.rotationX,
                controls.rotationY,
                controls.rotationZ,
              ]}
              // scale={[controls.scale, controls.scale, controls.scale]}
              position={sizes.deskPosition}
              // rotation={[-2.7, 3.3, 3.1]}
              scale={sizes.deskScale}
              // scale={[6.6, 6.6, 6.6]}
            />
            <group>{/* <Target /> */}</group>
            <ambientLight intensity={1}></ambientLight>
            <directionalLight
              intensity={0.5}
              position={[10, 10, 10]}
            ></directionalLight>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;

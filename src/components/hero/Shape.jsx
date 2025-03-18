import { useEffect } from 'react';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Shape = () => {
  const { invalidate } = useThree();

  useEffect(() => {
    const interval = setInterval(() => {
      invalidate();
    }, 1000 / 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Sphere renderOrder={1} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#DB8B9B"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
        <ambientLight intensity={0.1} />
      </mesh>
    </>
  );
};

export default Shape;

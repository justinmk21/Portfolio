import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useMemo(() => {
     // Generate 5000 random points inside a sphere of radius 1.5
     return [random.inSphere(new Float32Array(5000), { radius: 1.5 })];
  }, []);

  useFrame((state, delta) => {
    // Rotation animation
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Mouse interaction (optional drift)
    // const { mouse } = state;
    // ref.current.rotation.x = mouse.y * 0.1;
    // ref.current.rotation.y = mouse.x * 0.1;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ededed"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Starfield = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
             <Canvas camera={{ position: [0, 0, 1] }}>
                 <Stars />
             </Canvas>
        </div>
    );
};

export default Starfield;

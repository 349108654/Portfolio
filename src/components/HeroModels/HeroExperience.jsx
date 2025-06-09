import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { Room } from './room';
import HeroLights from './HeroLights';
import Particles from './particles';
import { CloudStation } from './CloudStation';
import { MagicalFind } from './MagicalFind';
import { Concerto } from './Concerto';

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'});

  return (
    <Canvas camera={{position: [0, 0, 15], fov: 45}}>
        

        <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
        />

        <HeroLights />

        {/* <Particles count={100} /> */}

        <group
          scale={isMobile ? 0.7 : 1}
          position={[-2, -3.5, 0]}
          rotation={[0, -3*Math.PI/2, 0]}
        >
          <Concerto />
          {/* REMEMBER TO ADD CREDITS! */}
        </group>
    </Canvas>
  )
}

export default HeroExperience
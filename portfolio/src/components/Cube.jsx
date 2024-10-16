import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
    const meshRef = useRef();
    const speed = 0.02; // Velocidad de rotación

    // Aplicar la rotación al cubo en cada frame
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += speed;
            meshRef.current.rotation.y += speed;
            meshRef.current.rotation.z += speed;
        }
    });

    return (
        <mesh ref={meshRef} scale={3}>
            <boxGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={'Blue'} />
        </mesh>
    );
};

export default Cube;
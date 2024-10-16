import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
    const meshRef = useRef();
    const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
    const [scale, setScale] = useState(3); // Nuevo estado para la escala

    // Generar valores de rotación aleatorios cada segundo
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation({
                x: Math.random() * Math.PI,
                y: Math.random() * Math.PI,
                z: Math.random() * Math.PI,
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // Aplicar la rotación al cubo en cada frame
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x = rotation.x;
            meshRef.current.rotation.y = rotation.y;
            meshRef.current.rotation.z = rotation.z;
            meshRef.current.scale.set(scale, scale, scale); // Aplicar la escala al cubo
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'Blue'} />
        </mesh>
    );
};

export default Cube;
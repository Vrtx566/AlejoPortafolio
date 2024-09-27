import { Sphere, useTexture } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Star = ({ initialPosition }) => {
    const texture = useTexture('/star-texture.jpg'); // Asume que tienes una textura de estrella en esta ruta
    const meshRef = useRef();

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.position.y = initialPosition[1] + Math.sin(clock.getElapsedTime()) * 0.5;
        }
    });

    return (
        <Sphere ref={meshRef} position={initialPosition} args={[0.5, 30, 30]}>
            <meshBasicMaterial attach="material" map={texture} />
        </Sphere>
    );
};

const Stars = ({ count = 5000 }) => {
    const positions = useMemo(() => {
        const pos = [];
        for (let i = 0; i < count; i++) {
            pos.push([
                (Math.random() - 0.5) * 1000, // x
                (Math.random() - 0.5) * 1000, // y
                (Math.random() - 0.5) * 1000, // z
            ]);
        }
        return pos;
    }, [count]);

    return positions.map((position, i) => <Star key={i} initialPosition={position} />);
};

export default Stars;
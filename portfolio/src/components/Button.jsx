import { Cylinder, Sparkles, Plane, useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import { useSpring, a } from '@react-spring/three';

const ButtonCylinder = () => {
    const meshRef = useRef();
    const [props, set] = useSpring(() => ({ scale: [1, 1, 1], position: [0, -9, 2], config: { mass: 1, tension: 170, friction: 26 } }));
    const powerSymbolTexture = useTexture('src/components/power-symbol.png'); // Asegúrate de que la ruta a la imagen sea correcta

    const handleClick = () => {
        set({ scale: [1, 0.1, 1] });
    };

    return (
        <a.mesh ref={meshRef} scale={props.scale} position={props.position} onClick={handleClick}>
            <Cylinder args={[1, 1, 2, 32]} rotation={[0.,0.9,0]}>
                <meshLambertMaterial color="#6BCAB3"/>
            </Cylinder>
            <Plane position={[0, 1.01, 0]} args={[2, 2]} rotation={[-Math.PI / 2, 0, 0]}> {/* Aumenta el tamaño del plano */}
                <meshBasicMaterial map={powerSymbolTexture} transparent />
            </Plane>
        </a.mesh>
    );
};

export default ButtonCylinder;
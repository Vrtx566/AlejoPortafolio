import React, {useRef, useMemo} from 'react'
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";

const HeroCamera = ({children, isMobile}) => {
    const groupRef = useRef()

    // Memorizar los valores que se utilizan en useFrame
    const position = useMemo(() => [0, 0, 30], []);
    const rotation = useMemo(() => [0, 0, 0], []);

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, position, 0.25, delta);

        if (!isMobile) {
            // Limitar la rotación hacia arriba
            const limitedY = Math.min(state.pointer.y, 0.5); // Ajusta el valor 0.5 a tu preferencia

            easing.dampE(groupRef.current.rotation, [-limitedY / 3, state.pointer.x / 5, 0], 0.25, delta);
        }
    });

    return (
        <group ref={groupRef}>{children}</group>
    )
}
export default HeroCamera
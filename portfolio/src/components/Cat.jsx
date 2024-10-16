import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'

const Cat = (props) =>{
    const { nodes, materials } = useGLTF('/models/dingus.glb')
    const meshRef = useRef()

    useEffect(() => {
        if (meshRef.current) {
            gsap.to(meshRef.current.rotation, {
                z: "-=2",
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }
    }, [])

    return (
        <group {...props} dispose={null}>
            <group scale={0.01} rotation={[0,1.2,0]}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dingus_dingus_0.geometry}
                        material={materials.dingus}
                        ref={meshRef}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dingus_whiskers_0.geometry}
                        material={materials.whiskers}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/dingus.glb')

export default Cat
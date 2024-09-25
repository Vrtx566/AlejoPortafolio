import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HAB from "../components/HAB.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../../public/constants/index.js";

const Hero = () => {
    //cambiar a controls
    const x = useControls('HAB', {
        positionX: {
            value: 0,
            min: -10,
            max: 10,
        },
        positionY: {
            value: 0,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationX: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationY: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10,
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10,
        }
    })

    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({maxWidth: 1024,minWidth: 768})

    const size = calculateSizes(isMobile,isTablet)

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl
                font-medium text-blue-500 text-center font-generalsans">Hi,I am Alejandro
                    <span className="waving-hand">🖐️</span>
                </p>

                <p className="hero_tag text-gray_gradient ">I am a full-stack developer</p>
            </div>

            <div className="w-full h-full absolute inset-0"></div>

            <Leva/>
            <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                    <HAB
                        position={[x.positionX, x.positionY, x.positionZ]}
                        //position={sizes.deskPosition}
                        rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                        scale={[x.scale, x.scale, x.scale]}
                        // scale={sizes.deskScale}
                    />

                    <ambientLight intensity={1}/>
                    <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                </Suspense>

            </Canvas>


        </section>
    )
}
export default Hero

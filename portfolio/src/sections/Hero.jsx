import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera, SpotLight, Stars} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
//import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../../public/constants/index.js";
import OldComputers from "../components/Computer.jsx";
import ButtonCylinder from "../components/Button.jsx";



const Hero = () => {

    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({maxWidth: 1024, minWidth: 768})

    const size = calculateSizes(isMobile, isTablet)

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
                <p className="sm:text-3xl text-2xl
                font-medium text-white text-center font-generalsans">Hi,I am Alejandro
                    <span className="waving-hand">🖐️</span>
                </p>

                <p className="hero_tag text-gray_gradient ">I'm a system engineer</p>
            </div>

            <div className="w-full h-full absolute inset-0"></div>


            <Canvas style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]}/>

                    <OldComputers
                        position={[0, -9, 0]}
                        //position={sizes.deskPosition}
                        rotation={[0, 0, 0]}
                        scale={2}
                        // scale={sizes.deskScale}
                    />

                    <ButtonCylinder/>


                    <Stars count={5000}/>
                    <SpotLight
                        position={[0, -12, 2]}
                        angle={10} // Aumentar valor para hacer la luz más ancha
                        penumbra={0.1}
                        intensity={7}
                        direction={[0, 1, 0]}
                        distance={200}
                        decay={2}
                    />

                    <ambientLight intensity={1}/>
                    <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                </Suspense>


            </Canvas>


        </section>
    )
}
export default Hero

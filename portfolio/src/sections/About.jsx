import React, {Suspense, useState} from 'react';
import Globe from 'react-globe.gl';
import Button2 from '../components/Button2.jsx';
import './About.css';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import canvasLoader from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";
import {Leva, useControls} from "leva";
import CanvasLoader from "../components/CanvasLoader.jsx";
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(' jose.gomez.arenas.jaga@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };


    return (


        <section className="c-space my-20" id="about">
            <div className="absolute top-0 left-0 w-full h-full invisible xl:visible">
                <Canvas style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                    <Stars count={5000}/>
                    <ambientLight intensity={0.5}/>
                    <spotLight position={[10, 10, 10]} angle={0.15}/>
                </Canvas>
            </div>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 xl:mx-32 md:grid-cols-2 grid-cols-1 gap-5  h-full">
                <div id="card" className="col-span-1 xl:row-span-3">
                    <div className="grid-container">

                        <Canvas>
                            <ambientLight intensity={7}/>
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={1}/>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>
                            <Suspense fallback={<CanvasLoader/>}>
                                <Developer position-y={-7} rotation={[0.1,0,0]} scale={5}/>

                            </Suspense>
                        </Canvas>

                        <div>
                            <p className="grid-headtext">Hi, I’m Alejandro</p>
                            <p className="grid-subtext">
                                Actually i dont have any experience, but im ready to embrace every challenge that comes
                                my way.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="card" className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/PIcons.png" alt="grid-2" className="w-full sm:h-[200px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">System engeneer student</p>
                            <p className="grid-subtext">
                                I'm a system engineer student,i'm doing my career in EIA university, I have experience with Python, Java, Javascript, React, Node.js,
                                MongoDB, SQL, Docker, Git, among others.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="card" className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                            />
                        </div>
                        <div>
                            <p className="grid-headtext">My Location and Availability for Work
                            </p>
                            <p className="grid-subtext">I'm based in Medellin, Colombia But im open to remote work
                                worldwide.</p>
                            <Button2 name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>

                <div id="card" className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">My Passion for embracing new challenges
                            </p>
                            <p className="grid-subtext">
                                i'm ready to embrace every challenge that comes my way, i'm a fast learner and i'm
                                always looking for new ways to improve my skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="card" className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container items-center">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full xl:flex xl:w-[300px] md:w-[300px] md:h-[130px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xs md:text-3xs font-medium text-gray_gradient text-white">jose.gomez.arenas.jaga@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
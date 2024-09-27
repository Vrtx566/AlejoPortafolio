import React from 'react'

const About = () => {

    return (
        <section id="about" className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, i'm Alejandro</p>
                            <p className="grid-subtext">mucho texto</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
export default About

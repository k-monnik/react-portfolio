import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJsSquare


} from 'react-icons/fa'
import { SiTailwindcss, SiFirebase, SiGit } from "react-icons/si";

const About = () => {
    return (
        <div id="about" className='h-screen'>
            <h1 className='mt-48 mb-12 font-regular text-5xl flex justify-center content-center'>About Me</h1>
            <div className='container mx-auto md:max-w-4xl '>
                <p className='m-6 font-light text-3xl flex justify-center'>Hi! I'm Kristen, a front-end developer based in Montréal, Canada.</p>
                <p className='mb-48 font-thin text-2xl flex justify-center'>I'm passionate about creating dynamic user experiences for websites and software projects, thinking outside the box to solve problems, and bringing design ideas to life on the web.
                    I'm naturally curious, and perpetually working on improving my programming chops one project at a time. I'm currently seeking a full-time front-end/React developer role.</p>
            </div>

            <h2 className='m-12 font-regular text-4xl flex justify-center'>Skills</h2>
            <div className='flex flex-row mx-auto justify-center gap-6 text-5xl cursor-pointer'>
                <div>
                    <FaHtml5 />
                    <p className='flex text-sm justify-center mt-4'>HTML</p>
                </div>
                <div>
                    <FaCss3Alt />
                    <p className='flex text-sm justify-center mt-4'>CSS</p>
                </div>
                <div>
                    <FaJsSquare />
                    <p className='flex text-sm justify-center mt-4'>JavaScript</p>
                </div>
                <div>
                    <FaReact />
                    <p className='flex text-sm justify-center mt-4'>React</p>
                </div>
                <div>
                    <FaBootstrap />
                    <p className='flex text-sm justify-center mt-4'>Bootstrap</p>
                </div>
                <div>
                    <SiTailwindcss />
                    <p className='flex text-sm justify-center mt-4'>Tailwind</p>
                </div>
                <div>
                    <SiFirebase />
                    <p className='flex text-sm justify-center mt-4'>Firebase</p>
                </div>
                <div>
                    <SiGit />
                    <p className='flex text-sm justify-center mt-4'>Git</p>
                </div>








            </div>


        </div>
    )
}

export default About

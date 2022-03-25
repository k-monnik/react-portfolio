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
        <div id="about">
            <h1 className='font-regular'>About Me</h1>
            <p className='font-thin'>Hi! I'm Kristen, a front-end developer based in Montréal, Canada.</p>
            <p>I'm passionate about creating user-friendly websites and software projects...</p>
            <h2>Skills</h2>
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

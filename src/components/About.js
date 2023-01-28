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
        <div id="about" className='h-screen bg-ice'>
            <div className='relative top-12 md:top-28'>
                <h1 className='relative top-0 mb-4 md:mb-12 font-regular text-4xl md:text-5xl flex justify-center content-center'>About Me</h1>
                <div className='container mx-auto md:max-w-4xl '>
                    <p className='px-4 md:px-0 m-2 md:m-6 font-light text-xl md:text-3xl flex justify-center'>Hi! I'm Kristen, a front-end developer based in Montréal, Canada.</p>
                    <p className='px-6 md:px-0 mb-16 m:mb-48 font-thin text-lg leading-tight md:leading-normal tracking-tighter md:tracking-normal md:text-2xl flex justify-center'>I'm passionate about creating dynamic user experiences for websites and software projects, thinking outside the box to solve problems, and bringing design ideas to life on the web.
                    </p>
                </div>
            </div>


            <h2 className='m-6 pt-6 md:pt-24 md:m-12 font-regular text-4xl flex justify-center'>Skills</h2>
            <div className='grid grid-cols-4 grid-rows-2 gap-2 px-4 md:grid-cols-8 mx-auto justify-center md:px-36 text-5xl cursor-pointer'>
                <div className='mx-auto'>
                    <FaHtml5 className='text-ocean' />
                    <p className='flex justify-center text-sm mt-4'>HTML</p>
                </div>
                <div className='mx-auto'>
                    <FaCss3Alt className='text-ocean' />
                    <p className='flex text-sm justify-center mt-4'>CSS</p>
                </div>
                <div className='mx-auto'>
                    <FaJsSquare className='text-ocean' />
                    <p className='flex text-sm justify-center mt-4'>JavaScript</p>
                </div>
                <div className='mx-auto'>
                    <FaReact className='text-ocean' />
                    <p className='flex text-sm justify-center mt-4'>React</p>
                </div>
                <div className='mx-auto'>
                    <FaBootstrap className='text-ocean' />
                    <p className='flex text-sm justify-center mt-4'>Bootstrap</p>
                </div>
                <div className='mx-auto'>
                    <SiTailwindcss className='text-ocean' />
                    <p className='flex text-sm justify-center mt-4'>Tailwind</p>
                </div>
                <div className='mx-auto'>
                    <SiFirebase className='text-ocean' />
                    <p className='flex text-sm justify-center mt-4'>Firebase</p>
                </div>
                <div className='mx-auto'>
                    <SiGit className='text-ocean' />
                    <p className='flex text-sm justify-center mt-4'>Git</p>
                </div>








            </div>


        </div>
    )
}

export default About

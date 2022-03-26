import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="h-1/2 bg-blue-400 p-4">

            <div className="flex flex-row justify-center gap-16 text-3xl cursor-pointer">
                <FaEnvelope onClick={() => { window.location = 'mailto:krmonnik@gmail.com' }} className="cursor-pointer hover:text-white" />
                <FaGithub onClick={() => { window.open("https://github.com/k-monnik") }} className="cursor-pointer hover:text-white" />
                <FaLinkedin onClick={() => { window.open("https://www.linkedin.com/in/kristenmonnik/") }} className="cursor-pointer hover:text-white" />
            </div>
            <p className="mt-6 font-light text-sm flex justify-center items-end">© 2022 Kristen Monnik</p>
        </div>
    )
}

export default Footer

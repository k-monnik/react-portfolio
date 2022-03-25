import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>

            <div className="flex flex-row justify-evenly">
                <p>© 2022 Kristen Monnik</p>
                <FaEnvelope onClick={() => { window.location = 'mailto:krmonnik@gmail.com' }} className="cursor-pointer" />
                <FaGithub onClick={() => { window.open("https://github.com/k-monnik") }} className="cursor-pointer" />
                <FaLinkedin onClick={() => { window.open("https://www.linkedin.com/in/kristenmonnik/") }} className="cursor-pointer" />
            </div>
        </div>
    )
}

export default Footer

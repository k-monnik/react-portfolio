// import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FiMenu } from "react-icons/fi";

const Nav = () => {
    return (
        <>
            {/* navbar START */}
            {/* logo */}
            {/* about nav  */}
            {/* projects nav  */}
            {/* contact nav  */}
            {/* mobile menu */}
            {/* content goes here */}
            <nav className="sticky top-0 cursor-pointer flex flex-row justify-between bg-ocean text-mint">
                <div className='font-bold m-2 font-Josefin'>
                    <HashLink smooth to='/#'>monnik.dev</HashLink>
                </div>
                <div className='px-6 mt-2 text-2xl md:hidden'>
                    <FiMenu />
                </div>

                <div className='hidden md:block'>
                    <ul className='flex flex-row gap-20 mr-8'>
                        <li className='pt-2 hover:border-b-4 hover:border-midnight'>
                            <HashLink smooth to={'/page#about'}>About</HashLink>
                        </li>
                        <li className='py-2 hover:border-b-4 hover:border-midnight'>
                            <HashLink smooth to={'/page#projects'}>Projects</HashLink>
                        </li>
                        <li className='py-2 hover:border-b-4 hover:border-midnight'>
                            <HashLink smooth to={'/page#contact'}>Contact</HashLink>
                        </li>
                    </ul>
                </div>
            </nav>



        </>
    )
}

export default Nav

// import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
            <nav className="sticky top-0 bg-blue-200 cursor-pointer flex flex-row justify-between">
                <div className='font-bold text-purple-800 m-2 font-Josefin'>
                    <HashLink smooth to='/#'>monnik.dev</HashLink>
                </div>
                <div>
                    <ul className='flex flex-row gap-20 mr-8'>
                        <li>
                            <HashLink smooth to={'/page#about'}>About</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to={'/page#projects'}>Projects</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to={'/page#contact'}>Contact</HashLink>
                        </li>
                    </ul>
                </div>
            </nav>



        </>
    )
}

export default Nav

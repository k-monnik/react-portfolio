import { Link, NavLink } from 'react-router-dom';

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
            <nav className="bg-blue-200 cursor-pointer flex flex-row justify-between">
                <div className='font-bold text-purple-800 m-2'>
                    <Link to='/' exact>monnik.dev</Link>
                </div>
                <div>
                    <ul className='flex flex-row gap-20 mr-8'>
                        <li><NavLink to='about' />About</li>
                        <li><NavLink to='projects' />Projects</li>
                        <li><NavLink to='contact' />Contact</li>
                    </ul>
                </div>
            </nav>



        </>
    )
}

export default Nav

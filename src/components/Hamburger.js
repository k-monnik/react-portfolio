import { HashLink } from 'react-router-hash-link';

const Hamburger = ({ isOpen, toggle }) => {

    return (
        <div className={
            isOpen
                ? 'grid grid-rows-3 text-center items-center bg-mint'
                : 'hidden'
        }
            onClick={toggle}
        >
            <ul className=''>
                <li className='pt-2 text-2xl'>
                    <HashLink smooth to={'/page#about'}>About</HashLink>
                </li>
                <li className='pt-2 text-2xl'>
                    <HashLink smooth to={'/page#projects'}>Projects</HashLink>
                </li>
                <li className='pt-2 text-2xl'>
                    <HashLink smooth to={'/page#contact'}>Contact</HashLink>
                </li>
            </ul>
        </div>
    )
}

export default Hamburger
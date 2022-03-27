
import avatar from '../assets/avatar-km.png';

const Header = () => {
    return (
        <div className="bg-ocean h-screen grid grid-cols-1 md:grid-cols-3 content-center items-end">

            <div className="flex justify-end col-span-2">
                <div className='text-ice'>
                    <h1 className="text-6xl flex justify-center">
                        Kristen Monnik
                    </h1>
                    <h2 className="text-4xl font-thin flex justify-center">front-end web + software developer</h2>
                </div>

            </div>
            <img src={avatar} alt='' className='object-scale-down h-72 w-96 rounded-full -ml-20' />

        </div>
    )
}

export default Header

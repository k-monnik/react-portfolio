import Cards from "./Cards"

const Projects = () => {
    return (
        <div id="projects" className="md:h-screen bg-mint text-midnight">
            <div className="relative top-10 md:top-20 mx-auto">
                <h1 className='mb-2 font-regular text-5xl flex justify-center content-center'>Projects</h1>
                <p className="mt-2 px-14 md:px-0 mb-16 md:mb-36 font-thin text-2xl flex justify-center content-center">Check out what I've been working on lately:</p>
            </div>
            <Cards />

        </div>
    )
}

export default Projects

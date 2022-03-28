import Cards from "./Cards"

const Projects = () => {
    return (
        <div id="projects" className="h-screen bg-mint text-midnight">
            <div className="relative top-20">
                <h1 className='mb-2 font-regular text-5xl flex justify-center content-center'>Projects</h1>
                <p className="mt-2 mb-36 font-thin text-2xl flex justify-center">Check out what I've been working on lately:</p>
            </div>
            <Cards />

        </div>
    )
}

export default Projects

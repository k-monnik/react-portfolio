import Cards from "./Cards"

const Projects = () => {
    return (
        <div id="projects" className="h-screen bg-mint text-black">
            <h1 className='mt-12 mb-2 font-regular text-5xl flex justify-center content-center'>Projects</h1>
            <p className="mt-2 mb-36 font-thin text-2xl flex justify-center">Check out what I've been working on lately:</p>
            <Cards />

        </div>
    )
}

export default Projects

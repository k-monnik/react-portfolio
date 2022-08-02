import { FaGithub, FaImage } from "react-icons/fa";
import shoplist from "../assets/shoplist-img.png";
import spacepic from "../assets/space-img.png";
// import tasklist from "../assets/task-tracker-img.png";
import makerPage from "../assets/maker-landing-img.jpg";

const Cards = () => {

    return (
        <div className="m-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-ice text-black">
                <img src={shoplist} alt="" className="" />
                <div className="px-6 py-4">
                    <div className="font-bold text-blue-800 text-xl flex justify-center">
                        Smart Shopping List
                    </div>
                    <div>
                        <p className="flex justify-center text-lg font-light text-ocean mb-3 md:mb-6">
                            React/Firebase/Tailwind
                        </p>
                        <p className="text-normal tracking-tighter md:tracking-normal font-thin mb-2 md:mb-8">
                            A web app designed with a chalkboard theme that lets the user create and share shopping lists that track item purchase dates, and estimates how soon they will need to be purchased again.
                        </p>
                    </div>
                    <div className="flex flex-row justify-center gap-1 md:gap-12">
                        <button
                            className="flex p-2 border border-ocean rounded-lg text-sm md:text-base hover:bg-ocean hover:text-white active:border-white"
                            onClick={() => { window.open("https://tcl-38-smart-shopping-list.web.app/") }}
                        >View Live<FaImage className="m-1 align-middle" /></button>
                        <button
                            className="flex p-2 border border-ocean rounded-lg text-sm md:text-base hover:bg-ocean hover:text-white active:border-white"
                            onClick={() => { window.open("https://github.com/the-collab-lab/tcl-38-smart-shopping-list") }}
                        >View Code<FaGithub className="m-1 align-middle" /></button>
                    </div>
                </div>

            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-ice text-black">
                <img src={spacepic} alt="" className="" />
                <div className="px-6 py-4">
                    <div className="font-bold text-blue-800 text-xl flex justify-center">
                        Spacestagram
                    </div>
                    <div>
                        <p className="flex justify-center text-lg font-light text-ocean mb-3 md:mb-6">
                            React/CSS
                        </p>
                        <p className="text-normal tracking-tighter md:tracking-normal font-thin mb-2 md:mb-14">
                            A web app that fetches and displays images from NASA's Astronomy Photo of the Day API, and gives users the option to "like" or "unlike" the image.
                        </p>
                    </div>
                    <div className="flex flex-row justify-center gap-1 md:gap-12">
                        <button
                            className="flex p-2 border border-ocean rounded-lg text-sm md:text-base hover:bg-ocean hover:text-white active:border-white"
                            onClick={() => { window.open("https://km-spacestagram.herokuapp.com/") }}
                        >View Live<FaImage className="m-1 align-middle" /></button>
                        <button
                            className="flex p-2 border border-ocean rounded-lg text-sm md:text-base hover:bg-ocean hover:text-white active:border-white"
                            onClick={() => { window.open("https://github.com/k-monnik/apod-gram") }}
                        >View Code<FaGithub className="m-1 align-middle" /></button>
                    </div>
                </div>

            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-ice text-black">
                <img src={makerPage} alt="" className="" />
                <div className="px-6 py-4">
                    <div className="font-bold text-blue-800 text-xl flex justify-center">
                        Maker Landing Page
                    </div>
                    <div>
                        <p className="flex justify-center text-lg font-light text-ocean mb-3 md:mb-6">
                            HTML/Tailwind/JavaScript
                        </p>
                        <p className="text-normal tracking-tighter md:tracking-normal font-thin mb-12 md:mb-16">
                            A pre-launch landing page for a digital product with an email registration form and custom validation message feature.
                        </p>
                    </div>
                    <div className="flex flex-row justify-center gap-1 md:gap-12">
                        <button
                            className="flex p-2 border border-ocean rounded-lg text-sm md:text-base hover:bg-ocean hover:text-white active:border-white"
                            onClick={() => { window.open("https://gregarious-smakager-02166e.netlify.app/") }}
                        >View Live<FaImage className="m-1 align-middle" /></button>
                        <button
                            className="flex p-2 rounded-lg text-sm md:text-base border border-ocean hover:bg-ocean hover:text-white "
                            onClick={() => { window.open("https://github.com/k-monnik/maker-landing-page") }}
                        >View Code<FaGithub className="m-1 align-middle" /></button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Cards;
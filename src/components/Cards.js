import { FaGithub, FaImage } from "react-icons/fa";
import shoplist from "../assets/sshoplist-img.jpg";
import spacepic from "../assets/spacestagram-img.png";
import tasklist from "../assets/task-tracker-img.png";

const Cards = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={shoplist} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl">
                        Smart Shopping List
                    </div>
                    <div>
                        <p>
                            React/Firebase/Tailwind
                        </p>
                        <p>
                            A web app that lets the user create and share shopping lists that track item purchase dates, and estimates how soon they will need to be purchased again.
                        </p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button
                            className="flex p-2 rounded-lg bg-blue-500"
                            onClick={() => { window.open("https://tcl-38-smart-shopping-list.web.app/") }}
                        >View Live<FaImage className="m-1 align-middle" /></button>
                        <button
                            className="flex p-2 rounded-lg bg-green-500"
                            onClick={() => { window.open("https://github.com/the-collab-lab/tcl-38-smart-shopping-list") }}
                        >View Code<FaGithub className="m-1 align-middle" /></button>
                    </div>
                </div>

            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={spacepic} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl">
                        Spacestagram
                    </div>
                    <div>
                        <p>
                            React/CSS
                        </p>
                        <p>
                            A web app that fetches and displays images from NASA's Astronomy Photo of the Day API, and gives users the option to "like" or "unlike" the image.
                        </p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button
                            className="flex p-2 rounded-lg bg-blue-500"
                            onClick={() => { window.open("https://km-spacestagram.herokuapp.com/") }}
                        >View Live<FaImage className="m-1 align-middle" /></button>
                        <button
                            className="flex p-2 rounded-lg bg-green-500"
                            onClick={() => { window.open("https://github.com/k-monnik/apod-gram") }}
                        >View Code<FaGithub className="m-1 align-middle" /></button>
                    </div>
                </div>

            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={tasklist} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl">
                        Task Tracker
                    </div>
                    <div>
                        <p>
                            React/CSS
                        </p>
                        <p>
                            A web app that lets the user add, delete, and create reminders for tasks on their to-do list.
                        </p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button
                            className="flex p-2 rounded-lg bg-blue-500"
                            onClick={() => { window.open("https://monnik-react-task-tracker.netlify.app/") }}
                        >View Live<FaImage className="m-1 align-middle" /></button>
                        <button
                            className="flex p-2 rounded-lg bg-green-500"
                            onClick={() => { window.open("https://github.com/k-monnik/react-task-tracker") }}
                        >View Code<FaGithub className="m-1 align-middle" /></button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Cards;
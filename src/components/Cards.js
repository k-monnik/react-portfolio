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
                            Description
                        </p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button className="flex p-2 rounded-lg bg-blue-500">View Live<FaImage className="m-1 align-middle" /></button>
                        <button className="flex p-2 rounded-lg bg-green-500">View Code<FaGithub className="m-1 align-middle" /></button>
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
                            Description
                        </p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button className="flex p-2 rounded-lg bg-blue-500">View Live<FaImage className="m-1 align-middle" /></button>
                        <button className="flex p-2 rounded-lg bg-green-500">View Code<FaGithub className="m-1 align-middle" /></button>
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
                            Description
                        </p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button className="flex p-2 rounded-lg bg-blue-500">View Live<FaImage className="m-1 align-middle" /></button>
                        <button className="flex p-2 rounded-lg bg-green-500">View Code<FaGithub className="m-1 align-middle" /></button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Cards;
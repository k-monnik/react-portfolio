import { FaGithub, FaArrowRight, FaImage } from "react-icons/fa";

const Cards = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="" alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        Project Title
                    </div>
                    <ul>
                        <li>
                            Description
                        </li>
                        <li>
                            Built with
                        </li>
                    </ul>
                    <div className="flex flex-row justify-between">
                        <button className="flex p-2 rounded-lg bg-blue-500">View Live<FaImage className="m-1 align-middle" /></button>
                        <button className="flex p-2 rounded-lg bg-green-500">View Code<FaGithub className="m-1 align-middle" /></button>
                    </div>
                </div>

            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="" alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        Project Title
                    </div>
                    <ul>
                        <li>
                            Description
                        </li>
                        <li>
                            Built with
                        </li>
                    </ul>
                    <div className="flex flex-row justify-between">
                        <button className="flex p-2 rounded-lg bg-blue-500">View Live<FaImage className="m-1 align-middle" /></button>
                        <button className="flex p-2 rounded-lg bg-green-500">View Code<FaGithub className="m-1 align-middle" /></button>
                    </div>
                </div>

            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="" alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        Project Title
                    </div>
                    <ul>
                        <li>
                            Description
                        </li>
                        <li>
                            Built with
                        </li>
                    </ul>
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
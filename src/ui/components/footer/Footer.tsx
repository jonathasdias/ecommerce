import { FaFacebookF, FaDiscord, FaTwitter, FaGithub, FaLinkedin  } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 md:pb-1">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Company</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Brand Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Help center</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">App</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">iOS</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Android</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="px-4 py-6 bg-gray-700 md:flex md:items-center md:justify-between md:rounded-lg">

                    <span className="text-sm text-gray-300 sm:text-center">
                        © 2024 <Link to="/">WebLine</Link>. All Rights Reserved.
                    </span>

                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-4">
                        <a href="#" className="text-gray-400 hover:text-gray-900">
                            <FaFacebookF className="w-4 h-4"/>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900">
                            <FaDiscord  className="w-4 h-4"/>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900">
                            <FaTwitter   className="w-4 h-4"/>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900">
                            <FaGithub className="w-4 h-4"/>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900">
                            <FaLinkedin  className="w-4 h-4"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../imgs/logo.png';
import { FaSearch } from "react-icons/fa";
import ButtonCart from "./ButtonCart";
import { useState } from "react";

const Header: React.FC = () => {

    const navigate = useNavigate();

    const [ search, setSearch ] = useState<string>("");

    function handleSearchProduct(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        navigate(`/products?search=${encodeURIComponent(search.trim())}`)
    }

    return (
        <header className="flex flex-col gap-y-2 px-2 lg:px-4 py-4 border-b text-base md:text-lg lg:text-xl bg-white">

            <div className="flex justify-end md:hidden gap-x-2">
                <a href="#" className="text-gray-800 whitespace-nowrap hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-4 py-1 md:px-5 md:py-2.5 focus:outline-none">Login</a>
                <a href="#" className="text-white whitespace-nowrap bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-1 md:px-5 md:py-2.5 focus:outline-none">Sign up</a>
            </div>

            <div className="flex justify-between items-center gap-x-4">
                <Link to="/" className="flex items-center space-x-2 min-w-28 md:min-w-36">
                    <img src={Logo} className="h-7 lg:h-8 rounded-full" alt="WebLine Logo" />
                    <span className="text-lg md:text-2xl font-semibold whitespace-nowrap">WebLine</span>
                </Link>

                <form onSubmit={handleSearchProduct} className="border-2 flex flex-nowrap w-[40rem] rounded-md">
                    <input type="search" name="search" onChange={(e)=> setSearch(e.target.value)} className="py-1 px-2 md:p-2 w-full bg-[#E8F0FE]" placeholder="Busque pelo nome do seu produto"/>
                    <button type="submit" className="px-3" aria-label="Buscar produto"><FaSearch /></button>
                </form>

                <div className="flex items-center gap-x-2">
                    <ButtonCart/>

                    <div className="hidden md:flex gap-x-2">
                        <a href="#" className="text-gray-800 whitespace-nowrap hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none">Login</a>
                        <a href="#" className="text-white whitespace-nowrap bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 focus:outline-none">Sign up</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
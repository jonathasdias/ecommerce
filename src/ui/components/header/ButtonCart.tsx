import { FaOpencart } from "react-icons/fa";

const ButtonCart:React.FC = () => {
    return (
        <button type="button" className="relative grid place-items-center hover:bg-gray-50 size-10 rounded-full">
            <span className="absolute top-0 right-0 px-1 rounded-full text-sm font-bold">1</span>
            <FaOpencart className="text-2xl"/>
        </button>
    )
}
export default ButtonCart;
import { Link } from "react-router-dom";

const EmptyCard:React.FC = ()=> {
    return (
        <div className="h-full grid place-items-center bg-slate-600 text-xl p-6 mx-auto mt-10 rounded-lg">
            <p className="">The cart is empty. <Link to='/' className="text-blue-500 hover:underline">Go back to the beginning.</Link></p>
        </div>
    )
}
export default EmptyCard;
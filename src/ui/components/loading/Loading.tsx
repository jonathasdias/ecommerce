import { FiLoader } from "react-icons/fi";

const Loading:React.FC = ()=> {
    return (
        <div className="w-full min-h-[60vh] p-6">
            <FiLoader className="animate-spin mx-auto text-5xl text-slate-800"/>
        </div>
    );
}
export default Loading;
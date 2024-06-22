import { MdError } from "react-icons/md";

const Error:React.FC = ()=> {
    return (
        <div className="p-6 min-h-[70vh]">
            <p className="flex justify-center items-center text-xl">
                <MdError className="text-4xl text-red-700"/>
                Erro ao carregar dados. Por favor, tente novamente mais tarde ou recarregue a página.
            </p>
        </div>
    );
}
export default Error;
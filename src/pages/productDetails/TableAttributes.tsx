import { useState } from "react";
import { Attribute } from "@/model/@types/TypeProductDetails";

interface Attributes {
    attributes: Attribute[]
}

const TableAttributes: React.FC<Attributes> = ({ attributes }) => {

    const firstColumn = attributes.slice(0, Math.ceil(attributes.length / 2));
    const secondColumn = attributes.slice(Math.ceil(attributes.length / 2));
    const [ seeItAll, setSeeItAll ] = useState<boolean>(false);

    return (
        <div className={`${seeItAll ? "h-auto" : "h-[80vh]"} overflow-hidden relative`}>
            <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-baseline gap-x-4 pb-14">

                <div className="p-2 md:p-4 w-full lg:w-1/2">
                    <h3 className="p-4">Características principais</h3>

                    <table className="shadow-md sm:rounded-lg w-full text-xs text-left text-gray-500">
                        <tbody>
                            {firstColumn.map(item => (
                                <tr key={item.id + 1} className="even:bg-white odd:bg-gray-50 border-b">
                                    <th scope="row" className="p-3 md:px-6 md:py-4 font-medium text-gray-900">
                                        {item.name}
                                    </th>
                                    <td>
                                        {item.value_name}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="px-2 md:px-4 w-full lg:w-1/2">
                    <h3 className="p-4">Outros</h3>

                    <table className="shadow-md sm:rounded-lg w-full text-xs text-left text-gray-500 break-all">
                        <tbody>
                            {secondColumn.map(item => (
                                <tr key={item.id + 1} className="even:bg-white odd:bg-gray-50 border-b">
                                    <th scope="row" className="p-3 md:px-6 md:py-4 font-medium text-gray-900">
                                        {item.name}
                                    </th>
                                    <td>
                                        {item.value_name}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            <button onClick={()=> setSeeItAll(seeItAll=> !seeItAll)} className="absolute bottom-0 right-0 left-0 bg-black opacity-55 hover:opacity-70 text-white py-2">
                {seeItAll ? "Ver menos" : "Ver tudo"}
            </button>
        </div>
    )
}
export default TableAttributes;
import { Attribute } from "../../model/@types/TypeProductDetails";

interface Attributes {
    attributes: Attribute[]
}

const TableAttributes: React.FC<Attributes> = ({ attributes }) => {

    const firstColumn = attributes.slice(0, Math.ceil(attributes.length / 2));
    const secondColumn = attributes.slice(Math.ceil(attributes.length / 2));

    return (
        <div className="flex justify-between gap-x-4">

            <div className="p-4 w-1/2">
                <h3 className="p-4">Características principais</h3>

                <table className="shadow-md sm:rounded-lg w-full text-xs text-left text-gray-500">
                    <tbody>
                        {firstColumn.map(item => (
                            <tr className="even:bg-white odd:bg-gray-50 border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item.value_name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="px-4 w-1/2">
                <h3 className="p-4">Outros</h3>

                <table className="shadow-md sm:rounded-lg w-full text-xs text-left text-gray-500">
                    <tbody>
                        {secondColumn.map(item => (
                            <tr className="even:bg-white odd:bg-gray-50 border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item.value_name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default TableAttributes;
import { FiltersType } from "../../../model/@types/TypeProduct";

const FilterDetails: React.FC<{filtro: FiltersType}> = ({filtro}) => {
    return (
        <>
            <h2 className="mb-2 font-black">{filtro.name}</h2>

            <ul>
                {filtro.values.map(value => (
                    <li key={value.id} className="border-b border-gray-300 py-1">
                        <button type="button" aria-label={"filtro" + value.name} className="hover:text-blue-500">
                            {value.name} ({value.results})
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default FilterDetails;

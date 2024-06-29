import { Filters } from "../../../model/@types/TypeProduct";

const FilterDetails: React.FC<{filtro: Filters}> = ({filtro}) => {
    return (
        <>
            <h2 className="mb-2 font-black">{filtro.name}</h2>

            <ul>
                {filtro.values.map(value => (
                    <li key={value.id}>
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
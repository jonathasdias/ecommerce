import { useState } from "react";
import regexImproveImageQuality from "@utils/regexImproveImageQuality";

interface SliderDesc {
    pictures: Pictures[],
    thumbnail: string,
}

interface Pictures {
    id: string,
    url: string,
    secure_url: string,
}

const SliderDesc:React.FC<SliderDesc> = ({thumbnail = "", pictures = []}) => {

    const [img, setImg ] = useState<string>("");
    const [activeId, setActiveId] = useState<string | null>(pictures.length > 0 ? pictures[0].id : null);
    const activeClass:string = "opacity-100 border-2 border-black";

    const handleClick = (picture:Pictures) => {
        setImg(regexImproveImageQuality(picture.url));
        setActiveId(picture.id);
    };

    return (
        <div className="flex flex-nowrap border-2 w-full h-[26rem] md:h-[30rem] lg:w-[40rem] rounded-lg">
            <div className="flex flex-col items-center flex-nowrap min-w-20 gap-y-1 py-1 overflow-x-hidden overflow-y-auto">
                {pictures.map(picture => (
                    <figure key={picture.id + 1} onClick={() => handleClick(picture)}
                    className={`${picture.id === activeId ? activeClass : 'opacity-50'} flex-shrink-0 size-14 rounded-lg cursor-pointer overflow-hidden shadow-lg`}>
                        <img src={regexImproveImageQuality(picture.url)} alt="imagem" className="h-full w-full"/>
                    </figure>
                ))}
            </div>

            <div className="grid place-items-center h-full w-full lg:w-[30rem]">
                <figure className="md:size-96 w-full h-96">
                    <img src={img === "" ? regexImproveImageQuality(thumbnail) : img}
                    alt="imagem" className="h-full w-full"
                    />
                </figure>
            </div>
        </div>
    )
}
export default SliderDesc;
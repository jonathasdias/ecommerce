import { useState } from "react";
import regexImproveImageQuality from "@utils/regexImproveImageQuality";

interface SliderDesc {
    images: string[],
    thumbnail: string,
}

const SliderDesc:React.FC<SliderDesc> = ({thumbnail = "", images = []}) => {

    const [img, setImg ] = useState<string>("");
    const [activeId, setActiveId] = useState<string | null>(images.length > 0 ? images[0] : null);
    const activeClass:string = "opacity-100 border-2 border-black";

    const handleClick = (image:string) => {
        setImg(regexImproveImageQuality(image));
        setActiveId(image);
    };

    return (
        <div className="flex flex-nowrap border-2 w-full h-[26rem] md:h-[30rem] lg:w-[40rem] rounded-lg">

            <div className="relative grid place-items-center h-full w-full lg:w-[30rem]">
                <div className="absolute left-0 top-0 z-10 flex flex-col items-center flex-nowrap min-w-20 gap-y-1 py-1 overflow-x-hidden overflow-y-auto">
                    {images.map(image => (
                        <figure key={image + 1} onClick={() => handleClick(image)}
                        className={`${image === activeId ? activeClass : 'opacity-50'} flex-shrink-0 size-14 rounded-lg cursor-pointer overflow-hidden shadow-lg`}>
                            <img src={regexImproveImageQuality(image)} alt="imagem" className="h-full w-full object-contain"/>
                        </figure>
                    ))}
                </div>

                <figure className="md:size-96 w-full h-96">
                    <img src={img === "" ? regexImproveImageQuality(thumbnail) : img}
                    alt="imagem" className="h-full w-full object-contain"
                    />
                </figure>
            </div>
        </div>
    )
}
export default SliderDesc;
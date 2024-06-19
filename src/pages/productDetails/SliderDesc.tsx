import { useState } from "react";

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

    const handleClick = (item:Pictures) => {
        setImg(item.url.replace(/\w\.jpg/gi, "W.jpg"));
        setActiveId(item.id);
    };

    return (
        <div className="flex flex-nowrap border-2 h-[30rem] w-[40rem] rounded-lg">
            <div className="flex flex-col items-center flex-nowrap gap-y-1 p-3 overflow-x-hidden overflow-y-auto">
                {pictures.map(item => (
                    <figure key={item.id + 1} onClick={() => handleClick(item)}
                    className={`${item.id === activeId ? activeClass : 'opacity-50'} flex-shrink-0 size-20 rounded-lg cursor-pointer overflow-hidden shadow-lg`}>
                        <img src={item.url.replace(/\w\.jpg/gi, "W.jpg")} alt="imagem" className="h-full w-full"/>
                    </figure>
                ))}
            </div>

            <figure className="grid place-items-center h-full w-full">

                <div className={`h-[28rem] w-[32rem]`}>
                    <img src={img === "" ? thumbnail.replace(/\w\.jpg/gi, "W.jpg") : img}
                    alt="imagem" className="h-full w-full"
                    />
                </div>

            </figure>
        </div>
    )
}
export default SliderDesc;
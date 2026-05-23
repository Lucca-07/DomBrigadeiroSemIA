import type { ICardAbout } from "../../types/index"

export default function CardAbout({ imageURL, title, topics, reversed }: ICardAbout) {
    return (
        <div className="w-full flex flex-col md:flex-row p-5 place-items-center justify-center gap-10 text-orange-950 ">
            {!reversed && <img className="w-80 lg:w-96 xl:w-md flex place-self-center rounded-2xl border-6 border-orange-950 md:hover:scale-105 md:transition-all md:cursor-pointer" src={imageURL} alt="Imagem representativa do card" />}
            <div className="flex flex-col place-items-center gap-5 w-2/3">
                <p className="text-3xl lg:text-4xl  xl:text-5xl poppins-semibold">{title}</p>
                <ul className="list-disc flex flex-col place-items-center text-center text-lg lg:text-xl gap-3">{Object.values(topics).map((topic, index) => {
                    return <li id={title + index} key={index}>{topic}</li>
                })}</ul>
            </div>
            {reversed && <img className="w-80 lg:w-96 xl:w-md flex place-self-center rounded-2xl border-6 border-orange-950 md:hover:scale-105 md:transition-all md:cursor-pointer" src={imageURL} alt="Imagem representativa do card" />}
        </div>
    )
}
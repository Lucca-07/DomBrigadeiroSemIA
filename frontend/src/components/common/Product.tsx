import { useNavigate } from "react-router";
import type { IProduct } from "../../types/product"
import { TiStarburst } from "react-icons/ti";
export default function Product({ id, name, imageUrl, special }: IProduct) {
    const navigate = useNavigate()
    return (
        <div className="w-72 h-auto poppins-medium flex flex-col items-center text-center border-2 border-pink-200 shadow-lg rounded-2xl bg-linear-to-br from-pink-200 via-pink-50 to-pink-200 p-5 gap-4 text-orange-950 relative hover:scale-105 transition-all cursor-pointer" id={"id_card=" + id} onClick={() => navigate(`/detalhes/${id}`)}>
            <img src={imageUrl} alt="Imagem do produto" className="w-40 rounded-full shadow-lg" />
            <p className="text-2xl">{name}</p>
            {/* <p className="text-sm flex-1">{desc}</p> */}
            {special && <div className="absolute -left-4 -top-4 text-4xl text-red-500 rotate-12 hover:scale-110 transition-all cursor-pointer">
                <TiStarburst />
            </div>}
        </div>
    )
}
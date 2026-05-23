import { IoMenu } from "react-icons/io5"

export default function Header() {
    return (
        <nav className="poppins-medium w-full h-fit bg-pink-300 flex justify-center place-items-center p-4 shadow-md">
            <div className="w-full flex flex-col place-items-center gap-1 md:flex-row md:justify-between md:gap-0 lg:w-11/12">
                <h1 className="text-3xl p-3">Dom Brigadeiro Gourmet</h1>
                <button className="text-2xl cursor-pointer md:hidden"><IoMenu /></button>
                <div className="hidden md:flex self-center gap-5 ">
                    <a href="" className="px-5 py-2 hover:bg-pink-200 rounded-lg transition">Produtos</a>
                    <a href="" className="px-5 py-2 hover:bg-pink-200 rounded-lg transition">Sobre</a>
                </div>
            </div>
        </nav>
    )
}
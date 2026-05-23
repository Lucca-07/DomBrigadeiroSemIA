import { TiStarburst } from "react-icons/ti";
import Product from "../components/common/Product";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function Home() {
    return (
        <div className="poppins-regular min-h-screen w-full bg-linear-0 from-pink-200 via-pink-50 to-pink-200 transition-all">
            <nav><Header /></nav>
            <main className="w-full flex flex-col justify-center place-items-center">
                <section className="w-11/12 md:container h-fit min-h-52 border-2 border-orange-950 m-5 rounded-2xl bg-linear-to-bl from-pink-200 via-pink-50 to-pink-200  p-7 flex flex-col justify-center place-items-center gap-2 shadow-lg">
                    <h1 className="poppins-semibold text-orange-950 text-5xl md:text-6xl w-fit text-center">Dom Brigadeiro Gourmet</h1>
                    <p className="poppins-medium  text-pink-300 md:text-xl text-center">Venha conhecer nossos deliciosos doces!</p>
                    <button className="poppins-regular bg-pink-200 text-orange-950 shadow px-4 py-2 rounded-lg cursor-pointer transition-all hover:scale-105 md:text-lg md:px-5 md:py-2">Quero conhecer!</button>
                </section>
                <div className="flex place-items-center gap-1">
                    <span className="text-red-500 text-lg"><TiStarburst /></span><span> Item Especial</span>
                </div>
                <div className=" container w-full flex flex-col md:flex-row md:items-stretch items-center justify-center flex-wrap gap-4 p-8 relative">
                    <Product id="1" name="Brigadeiro" desc="Brigadeiro feito com chocolate belga" imageUrl="https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=" special={true} />
                    <Product id="1" name="Brigadeiro" desc="Brigadeiro feito com chocolate belga" imageUrl="https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=" special={false} />
                    <Product id="1" name="Brigadeiro" desc="Brigadeiro feito com chocolate belga" imageUrl="https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=" special={false} />
                    <Product id="1" name="Brigadeiro" desc="Brigadeiro feito com chocolate belga" imageUrl="https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=" special={true} />
                    <Product id="1" name="Brigadeiro" desc="Brigadeiro feito com chocolate belga" imageUrl="https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=" special={false} />
                </div>
            </main>
            <footer><Footer /></footer>
        </div>
    )
}
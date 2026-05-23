import { TiStarburst } from "react-icons/ti";
import Product from "../components/common/Product";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const PRODUCTS = [
    { id: "1", name: "Brigadeiro", desc: "Brigadeiro feito com chocolate belga", imageUrl: "https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=", special: true },
    { id: "2", name: "Beijinho", desc: "Docinho de coco artesanal", imageUrl: "https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=", special: false },
    { id: "3", name: "Bicho de Pé", desc: "Brigadeiro de morango", imageUrl: "https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=", special: false },
    { id: "4", name: "Ninho Nutella", desc: "Leite ninho recheado com nutella", imageUrl: "https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=", special: true },
    { id: "5", name: "Churros", desc: "Docinho de churros com doce de leite", imageUrl: "https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=", special: false }
];

export default function Home() {
    return (
        <div className="poppins-regular min-h-screen w-full bg-linear-0 from-pink-100 via-pink-50 to-pink-100 transition-all flex flex-col">
            <Header />
            <main className="flex-1 w-full flex flex-col justify-center items-center">
                <section className="w-11/12 md:container h-fit min-h-52 border-2 border-orange-950 m-5 rounded-2xl bg-linear-to-bl from-pink-200 via-pink-50 to-pink-200 p-7 flex flex-col justify-center items-center gap-4 shadow-lg">
                    <h1 className="poppins-semibold text-orange-950 text-5xl md:text-6xl text-center">Dom Brigadeiro Gourmet</h1>
                    <p className="poppins-medium text-pink-700 md:text-xl text-center">Venha conhecer nossos deliciosos doces!</p>
                    <button className="poppins-regular bg-pink-200 text-orange-950 shadow px-5 py-2 rounded-lg cursor-pointer transition-transform hover:scale-105 md:text-lg">
                        Quero conhecer!
                    </button>
                </section>

                <div className="flex items-center gap-2 mt-4">
                    <span className="text-red-500 text-xl"><TiStarburst /></span>
                    <span className="text-orange-950 font-medium">Item Especial</span>
                </div>

                <div className="container w-full flex flex-col md:flex-row md:items-stretch items-center justify-center flex-wrap gap-5 p-8 relative">
                    {PRODUCTS.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            desc={product.desc}
                            imageUrl={product.imageUrl}
                            special={product.special}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
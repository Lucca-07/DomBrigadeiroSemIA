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
        <div className="poppins-regular min-h-screen w-full bg-linear-to-br from-pink-100 via-white to-pink-50 transition-all flex flex-col">
            <Header />
            <main className="flex-1 w-full flex flex-col items-center pb-12">
                <section className="w-11/12 max-w-5xl mt-8 mb-12 rounded-3xl bg-pink-200/50 p-10 md:p-16 flex flex-col justify-center items-center gap-6 shadow-xl border border-pink-200 relative overflow-hidden backdrop-blur-sm">
                    <div className="absolute top-[-50%] left-[-10%] w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
                    <div className="absolute bottom-[-50%] right-[-10%] w-64 h-64 bg-pink-400 rounded-full blur-3xl opacity-30"></div>

                    <h1 className="poppins-semibold text-pink-900 text-5xl md:text-6xl text-center relative z-10 drop-shadow-sm">
                        Dom Brigadeiro Gourmet
                    </h1>
                    <p className="font-medium text-pink-700 md:text-xl text-center max-w-2xl relative z-10">
                        Os doces mais deliciosos e artesanais da cidade. Venha conhecer nosso cardápio repleto de carinho e sabor especial!
                    </p>
                    <button
                        className="mt-4 bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-pink-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative z-10 cursor-pointer"
                        onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Quero conhecer!
                    </button>
                </section>

                <div className="flex items-center gap-3 mb-8 bg-white/60 px-6 py-2 rounded-full shadow-sm border border-pink-100">
                    <TiStarburst className="text-pink-500 text-2xl animate-pulse" />
                    <span className="text-pink-900 font-semibold tracking-wide">Item Especial da Casa</span>
                </div>

                {/* Products Grid */}
                <div id="products" className="container max-w-6xl w-full flex flex-wrap justify-center gap-8 px-4 md:px-8">
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
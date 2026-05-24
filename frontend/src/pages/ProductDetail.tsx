import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PRODUCTS = [
    { id: "1", name: "Brigadeiro", desc: "Brigadeiro feito com chocolate belga", imageUrl: "https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=", special: true },
    { id: "2", name: "Beijinho", desc: "Docinho de coco artesanal", imageUrl: "https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=", special: false },
    { id: "3", name: "Bicho de Pé", desc: "Brigadeiro de morango", imageUrl: "https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=", special: false },
    { id: "4", name: "Ninho Nutella", desc: "Leite ninho recheado com nutella", imageUrl: "https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=", special: true },
    { id: "5", name: "Churros", desc: "Docinho de churros com doce de leite", imageUrl: "https://media.istockphoto.com/id/1173585579/pt/foto/brigadier.jpg?s=612x612&w=is&k=20&c=sI8IcksCr5pM8I8WU49meBU61ZirY7EEMWfNrTVwOqo=", special: false }
];

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const product = PRODUCTS.find((p) => p.id === id);

    useEffect(() => {
        if (!product) {
            navigate("/");
        }
    }, [product, navigate]);

    if (!product) return null;

    return (
        <div className="poppins-regular text-orange-950 min-h-screen w-full bg-linear-to-br from-pink-100 via-pink-50 to-pink-100 transition-all flex flex-col">
            <Header />
            <main className="flex-1 w-full max-w-5xl mx-auto p-6 md:p-12 flex flex-col justify-center items-center">
                <div className="bg-white/60 backdrop-blur-md border border-pink-200 shadow-xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full max-w-4xl">

                    {/* Imagem do Produto */}
                    <div className="relative group shrink-0">
                        <div className="absolute inset-0 bg-pink-300 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <img
                            className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105"
                            src={product.imageUrl}
                            alt={`Imagem de ${product.name}`}
                        />
                    </div>

                    {/* Dados do Produto */}
                    <div className="flex flex-col gap-5 w-full text-center md:text-left">
                        <div className="flex flex-col gap-2 items-center md:items-start">
                            <h1 className="text-4xl md:text-5xl font-bold text-pink-700">
                                {product.name}
                            </h1>
                            {product.special && (
                                <span className="bg-pink-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                    Produto sazonal
                                </span>
                            )}
                        </div>

                        <div className="bg-pink-50/80 p-6 rounded-2xl border border-pink-100 mt-2">
                            <h2 className="text-lg font-semibold text-pink-800 mb-2">Sobre esta delícia</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {product.desc}
                            </p>
                        </div>

                        <div className="mt-4 flex justify-center md:justify-start">
                            <button
                                onClick={() => navigate(-1)}
                                className="px-8 py-3 bg-orange-950 text-white font-medium rounded-full hover:bg-orange-900 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 ease-in-out cursor-pointer"
                            >
                                Voltar para o Menu
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
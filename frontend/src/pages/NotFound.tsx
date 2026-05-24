import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function NotFound() {
    return (
        <div className="poppins-regular min-h-screen w-full bg-linear-to-br from-pink-100 via-white to-pink-50 transition-all flex flex-col">
            <Header />
            <main className="flex-1 w-full flex flex-col items-center justify-center p-6 text-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-60"></div>
                    <h1 className="text-pink-800 text-8xl md:text-9xl font-bold relative z-10 drop-shadow-sm">404</h1>
                </div>
                <p className="text-pink-900 text-2xl md:text-3xl font-medium mt-6 z-10">
                    Ops, parece que não temos essa página.
                </p>
                <Link
                    to="/"
                    className="mt-8 bg-orange-950 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-10"
                >
                    Voltar para a página inicial
                </Link>
            </main>
            <Footer />
        </div>
    );
}
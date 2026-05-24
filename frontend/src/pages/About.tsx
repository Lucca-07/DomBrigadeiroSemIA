import CardAbout from "../components/common/CardAbout";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const ABOUT_SECTIONS = [
    {
        id: 1,
        imageURL: "https://images.pexels.com/photos/8176166/pexels-photo-8176166.jpeg",
        title: "Nossa História",
        topics: {
            topic1: "Ateliê de confeitaria artesanal",
            topic2: "Atendimento no ABC Paulista",
            topic3: "Mais de 10 anos de experiência"
        },
        reversed: true
    },
    {
        id: 2,
        imageURL: "https://images.pexels.com/photos/33718562/pexels-photo-33718562.jpeg",
        title: "Nossos Valores",
        topics: {
            topic1: "Ingredientes selecionados a dedo",
            topic2: "Receitas tradicionais de família",
            topic3: "Foco total na qualidade"
        },
        reversed: false
    },
    {
        id: 3,
        imageURL: "https://images.pexels.com/photos/30205964/pexels-photo-30205964.jpeg",
        title: "Nosso Propósito",
        topics: {
            topic1: "Adoçar os seus melhores momentos",
            topic2: "Entregas feitas com muito amor",
            topic3: "Ser referência em sabor no ABC"
        },
        reversed: true
    }
];

export default function About() {
    return (
        <div className="poppins-regular min-h-screen w-full bg-linear-to-br from-pink-100 via-white to-pink-50 transition-all flex flex-col">
            <Header />
            <main className="flex-1 w-full max-w-5xl mx-auto flex flex-col gap-12 items-center py-16 px-6">

                {/* Cabeçalho da Página */}
                <div className="text-center space-y-4 mb-4 relative w-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-40 -z-10"></div>
                    <h1 className="text-pink-800 text-5xl md:text-6xl font-bold tracking-tight">Quem somos</h1>
                    <p className="text-lg text-pink-600/80 font-medium">Um pouco sobre a nossa paixão por doces artesanais</p>
                </div>

                <div className="w-full flex flex-col gap-16 relative z-10">
                    {ABOUT_SECTIONS.map((section, index) => (
                        <div key={section.id} className="w-full flex flex-col items-center gap-16">
                            <CardAbout
                                imageURL={section.imageURL}
                                title={section.title}
                                topics={section.topics}
                                reversed={section.reversed}
                            />
                            {index !== ABOUT_SECTIONS.length - 1 && (
                                <div className="w-1/3 min-w-50 border-t-2 border-pink-200/50 rounded-full"></div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
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
        <div className="poppins-regular min-h-screen w-full bg-linear-0 from-pink-100 via-pink-50 to-pink-100 transition-all flex flex-col">
            <Header />
            <main className="flex-1 w-full max-w-6xl mx-auto flex flex-col gap-12 justify-center items-center py-10 px-5">
                <h1 className="text-orange-950 text-5xl md:text-6xl poppins-bold-italic mb-4 text-center">Quem somos</h1>

                {ABOUT_SECTIONS.map((section, index) => (
                    <div key={section.id} className="w-full flex flex-col items-center gap-12">
                        <CardAbout
                            imageURL={section.imageURL}
                            title={section.title}
                            topics={section.topics}
                            reversed={section.reversed}
                        />
                        {/* Renderizar o divisor apenas se não for o último item */}
                        {index !== ABOUT_SECTIONS.length - 1 && (
                            <div className="w-2/3 max-w-xl border-t-2 border-orange-900/20 rounded-full"></div>
                        )}
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    )
}
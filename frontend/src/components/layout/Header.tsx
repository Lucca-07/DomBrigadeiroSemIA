export default function Header() {
    return (
        <header className="bg-pink-200 py-4 sticky top-0 z-50 shadow-md border-b-4 border-orange-950 border-brand-pink">
            <div className="container mx-auto px-4 flex justify-between items-center transition-colors">
                <a href="/" className="text-3xl font-bold italic tracking-wider text-brand-maroon flex items-center gap-2 text-orange-950">
                    <span>Dom Brigadeiro <span className="font-light">Gourmet</span></span>
                </a>
                <nav className="flex gap-2 pe-3 items-center font-semibold text-brand-maroon text-orange-950">
                    <a href="/" className="hover:text-brand-pink transition-all px-3 py-2 rounded-lg hover:scale-110">Doces</a>
                    <a href="/sobre" className="hover:text-brand-pink transition-all px-3 py-2 rounded-lg hover:scale-110">Sobre</a>
                </nav>
            </div>
        </header>
    )
}
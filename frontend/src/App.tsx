import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-pink-100 transition-all">
      <nav><Header /></nav>
      <main className=""></main>
      <footer className="fixed bottom-0 w-full"><Footer /></footer>
    </div>
  )
}
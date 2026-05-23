import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-linear-0 from-pink-200 via-pink-50 to-pink-200 transition-all">
      <nav><Header /></nav>
      <main className="w-full flex justify-center">
        <div className="w-11/12 h-32 border-2 border-orange-950 m-6 rounded-2xl bg-pink-50">

        </div>
      </main>
      <footer><Footer /></footer>
    </div>
  )
}
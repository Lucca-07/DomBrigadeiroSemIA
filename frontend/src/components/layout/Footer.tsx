import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="poppins-regular w-full min-h-42 bg-linear-360 from-pink-300 via-pink-200 border-t-2 border-orange-950 flex flex-col justify-center items-center rounded-t-2xl text-sm text-orange-950">
            <p className="text-lg">&copy; 2026, Todos os direitos reservados</p>

            <div className="flex gap-3 place-items-center">
                <p>Contato:</p>
                <a className="text-2xl p-2 cursor-pointer hover:text-blue-700 transition-all hover:scale-110" href="https://www.facebook.com/dombrigadeirogourmett" target="_blank">
                    <FaFacebook />
                </a>
                <a className="text-2xl p-2 cursor-pointer hover:text-green-700 transition-all hover:scale-110" href="https://w.app/dombrigadeirogourmett" target="_blank">
                    <FaWhatsapp />
                </a>
                <a className="text-2xl p-2 cursor-pointer hover:text-pink-700 transition-all hover:scale-110" href="https://www.instagram.com/dombrigadeirogourmett/" target="_blank">
                    <FaInstagram />
                </a>
            </div>
            <p className="text-sm">Santo André - SP</p>
        </div>
    )
}
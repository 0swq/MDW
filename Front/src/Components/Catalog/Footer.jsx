import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-white pt-16 pb-6 mt-24">
      <div className="w-[90%] max-w-6xl mx-auto px-4">

        {/* Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Consultar aquí */}
          <div className="px-2">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 pb-3 border-b-2 border-[#3498db] w-fit">
              Consultar aquí
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tienda" className="text-[#bdc3c7] hover:text-[#3498db] hover:translate-x-2 transition-all duration-300 block py-2 text-sm">
                  Nuestra tienda
                </Link>
              </li>
              <li>
                <Link to="/contactanos" className="text-[#bdc3c7] hover:text-[#3498db] hover:translate-x-2 transition-all duration-300 block py-2 text-sm">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Quiénes somos */}
          <div className="px-2">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 pb-3 border-b-2 border-[#3498db] w-fit">
              ¿Quiénes somos?
            </h3>
            <p className="text-[#bdc3c7] text-sm leading-relaxed">
              "Somos una empresa peruana especializada en materiales para carpintería
              y ferretería. Proveemos melaminas, maderas y herramientas con calidad
              y atención personalizada."
            </p>
          </div>

          {/* Contáctanos */}
          <div className="px-2">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 pb-3 border-b-2 border-[#3498db] w-fit">
              Contáctanos
            </h3>
            <p className="text-[#bdc3c7] text-sm">+51 923197032</p>
          </div>

          {/* Redes sociales */}
          <div className="px-2">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 pb-3 border-b-2 border-[#3498db] w-fit">
              Síguenos en
            </h3>
            <p className="text-[#bdc3c7] text-sm mb-4">Nuestras redes sociales</p>
            <div className="flex gap-3 flex-wrap">
              <a href="https://www.facebook.com/AglomePeru/?locale=es_LAa"
                target="_blank" rel="noreferrer"
                className="w-11 h-11 bg-[#34495e] text-white rounded-full flex items-center justify-center text-lg hover:bg-[#3498db] hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/aglome.peru/"
                target="_blank" rel="noreferrer"
                className="w-11 h-11 bg-[#34495e] text-white rounded-full flex items-center justify-center text-lg hover:bg-[#3498db] hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-[#34495e] pt-6 text-center text-[#bdc3c7] text-sm">
          <p>
            Copyright © 2025 Todos los derechos reservados | Desarrollado por{' '}
            <a href="#" target="_blank" rel="noreferrer"
              className="text-[#3498db] font-bold hover:text-white hover:underline transition-colors duration-300">
              EQUIPO-A-B-M-O-D-E-L
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
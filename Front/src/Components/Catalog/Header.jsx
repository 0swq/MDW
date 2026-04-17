import {useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import logo from '../../assets/aglome _copy.png'

export default function Header() {
    const [menuAbierto, setMenuAbierto] = useState(false)
    const [menuUsuario, setMenuUsuario] = useState(false)
    const navigate = useNavigate()


    const usuario = null

    const handleSearch = (e) => {
        e.preventDefault()
        const q = e.target.q.value
        navigate(`/tienda?q=${q}`)
    }

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="w-full pl-5">
                <div className="flex items-center gap-5 py-4 min-h-[70px] flex-wrap">

                    <NavLink to="/"
                             className="flex items-center gap-2 text-[#2c3e50] font-bold text-2xl no-underline hover:opacity-90 transition-opacity">
                        <img src={logo} alt="AGLOME" className="w-12 h-12 object-contain"/>
                        <div className="text-2xl font-bold text-[#2c3e50] whitespace-nowrap">
                            AGLO<span className="text-[#3498db]">ME</span>
                            <span className="text-[#3498db] text-xs font-bold ml-0.5 align-super">PERU</span>
                        </div>
                    </NavLink>

                    <button
                        className="md:hidden ml-auto w-11 h-11 flex items-center justify-center bg-gray-100 rounded-md text-xl text-[#2c3e50] hover:bg-gray-200 transition-colors"
                        onClick={() => setMenuAbierto(!menuAbierto)}
                        aria-label="Abrir menú"
                    >
                        <i className={`fas ${menuAbierto ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>

                    <nav
                        className={`${menuAbierto ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto md:flex-1 md:justify-center`}>
                        <ul className="flex flex-col md:flex-row gap-0 md:gap-10 list-none p-0 m-0 w-full md:w-auto border-t md:border-none border-gray-100 mt-2 md:mt-0">
                            {[
                                {to: '/', label: 'INICIO'},
                                {to: '/nosotros', label: 'NOSOTROS'},
                                {to: '/tienda', label: 'TIENDA'},
                                {to: '/metodos', label: 'MÉTODO DE PAGOS'},
                                {to: '/reclamaciones', label: 'LIBRO DE RECLAMACIONES'},
                                {to: '/contactanos', label: 'CONTACTANOS'},
                            ].map(({to, label}) => (
                                <li key={to} className="border-b md:border-none border-gray-100">
                                    <NavLink
                                        to={to}
                                        end={to === '/'}
                                        className={({isActive}) =>
                                            `block px-4 md:px-0 py-3 md:py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 relative
                      ${isActive ? 'text-[#3498db] font-bold' : 'text-[#2c3e50] hover:text-[#3498db]'}`
                                        }
                                    >
                                        {({isActive}) => (
                                            <>
                                                {label}
                                                {isActive && (
                                                    <span
                                                        className="hidden md:block absolute bottom-0 left-0 w-full h-[3px] bg-[#3498db] rounded"/>
                                                )}
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Barra de búsqueda */}
                    <form
                        onSubmit={handleSearch}
                        className={`${menuAbierto ? 'flex' : 'hidden'} md:flex items-center bg-gray-50 rounded-full px-3 py-1 shadow-sm focus-within:shadow-blue-200 focus-within:bg-white transition-all max-w-[350px] w-full md:w-auto`}
                    >
                        <input
                            type="text"
                            name="q"
                            placeholder="Buscar productos..."
                            className="border-none bg-transparent px-3 py-2 text-sm outline-none flex-1 text-[#2c3e50] placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="bg-[#3498db] text-white px-3 py-2 rounded-full hover:bg-[#2980b9] transition-colors flex items-center justify-center"
                        >
                            <i className="fas fa-search text-sm"></i>
                        </button>
                    </form>

                    {/* Botón de usuario */}
                    <div className="relative mr-5 ml-auto md:ml-0">
                        <button
                            onClick={() => setMenuUsuario(!menuUsuario)}
                            className="flex items-center gap-2 rounded-full focus:outline-none group"
                            aria-label="Menú de usuario"
                        >
                            {usuario?.foto ? (
                                <img
                                    src={usuario.foto}
                                    alt={usuario.nombre}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-[#3498db] shadow-sm group-hover:border-[#2980b9] transition-colors"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-[#3498db] flex items-center justify-center shadow-sm hover:bg-[#2980b9] transition-colors">
                                    <i className="fas fa-user text-white text-base"></i>
                                </div>
                            )}
                            {usuario?.nombre && (
                                <span className="hidden md:block text-sm font-semibold text-[#2c3e50] group-hover:text-[#3498db] transition-colors">
                                    {usuario.nombre}
                                </span>
                            )}
                            <i className={`fas fa-chevron-down text-xs text-gray-400 hidden md:block transition-transform duration-200 ${menuUsuario ? 'rotate-180' : ''}`}></i>
                        </button>

                        {/* Dropdown del usuario */}
                        {menuUsuario && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                                {usuario ? (
                                    <>
                                        <div className="px-4 py-2 border-b border-gray-100">
                                            <p className="text-sm font-semibold text-[#2c3e50]">{usuario.nombre}</p>
                                            <p className="text-xs text-gray-400">{usuario.email}</p>
                                        </div>
                                        <NavLink
                                            to="/perfil"
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-[#2c3e50] hover:bg-blue-50 hover:text-[#3498db] transition-colors"
                                            onClick={() => setMenuUsuario(false)}
                                        >
                                            <i className="fas fa-user-circle w-4"></i>
                                            Mi perfil
                                        </NavLink>
                                        <NavLink
                                            to="/pedidos"
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-[#2c3e50] hover:bg-blue-50 hover:text-[#3498db] transition-colors"
                                            onClick={() => setMenuUsuario(false)}
                                        >
                                            <i className="fas fa-box w-4"></i>
                                            Mis pedidos
                                        </NavLink>
                                        <button
                                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                                            onClick={() => { /* lógica de cierre de sesión */ setMenuUsuario(false) }}
                                        >
                                            <i className="fas fa-sign-out-alt w-4"></i>
                                            Cerrar sesión
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <NavLink
                                            to="/login"
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-[#2c3e50] hover:bg-blue-50 hover:text-[#3498db] transition-colors"
                                            onClick={() => setMenuUsuario(false)}
                                        >
                                            <i className="fas fa-sign-in-alt w-4"></i>
                                            Iniciar sesión
                                        </NavLink>
                                        <NavLink
                                            to="/registro"
                                            className="flex items-center gap-2 px-4 py-2 text-sm text-[#2c3e50] hover:bg-blue-50 hover:text-[#3498db] transition-colors"
                                            onClick={() => setMenuUsuario(false)}
                                        >
                                            <i className="fas fa-user-plus w-4"></i>
                                            Registrarse
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </header>
    )
}
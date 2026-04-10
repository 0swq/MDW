// Components/Catalog/HeroPage.jsx
export default function Hero({ titulo, subtitulo, icono, bg }) {

  if (!titulo) {
    return (
      <section className="text-center relative overflow-hidden bg-[#2c3e50]">
        <img
          src={bg}
          alt="Hero"
          className="w-auto max-w-full h-auto max-h-[600px] block mx-auto object-contain object-center"
        />
      </section>
    )
  }

  return (
    <section
      className="relative text-white text-center py-[200px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bg})` }}>
      <div className="relative z-10 max-w-4xl mx-auto px-5">
        <h1 className="text-5xl font-bold mb-5 flex items-center justify-center gap-4">
          {icono && <i className={`fas ${icono}`}></i>}
          {titulo}
        </h1>
        {subtitulo && (
          <p className="text-xl max-w-[700px] mx-auto opacity-95">{subtitulo}</p>
        )}
      </div>
    </section>
  )
}
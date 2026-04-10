import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const slides = [
    {
        tipo: 'alta',
        img: 'https://scontent.fchm1-1.fna.fbcdn.net/v/t39.30808-6/355121357_642450417903851_7101098727645776075_n.png?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=b895b5&_nc_eui2=AeHZJIwUx49YjBIa_5_9ptYQTGvkIgukaGhMa-QiC6RoaKPKH87qVxZC4064rfLqC4tQE2_5aaGlVUaf5LipED2P&_nc_ohc=nEES5vGvD0EQ7kNvwE_2cyC&_nc_oc=Adq8Fv14kdyjiRTkSZIW4u0M0FXKyyEvcppyrhhYrcVuR2n0w7iYCX8pKNOVyTstlUIvbwdRtmsxOaaoicD9dKHa&_nc_zt=23&_nc_ht=scontent.fchm1-1.fna&_nc_gid=HVJR1LjD6Q57fgIvd9O7Fg&_nc_ss=7a3a8&oh=00_Af2xG3b-NQcUmznt46A18upNvAEeZ43i96T1z3Kgsq6niA&oe=69D7DAD1',
        alt: 'Sala moderna',
        contenido: true,
    },
    {
        tipo: 'alta',
        img: 'https://scontent.fchm1-1.fna.fbcdn.net/v/t39.30808-6/472698631_1715506379015040_5302607970070863565_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeHAaKI1R13ASC_2-Rneh-I1NnFk48mp9aw2cWTjyan1rGaVjMz6jas5iXp1j7F_2YqKChMWjR-pFBpQCJyJI-Xz&_nc_ohc=DVta1rsyF-YQ7kNvwFtwI1f&_nc_oc=AdqozwBsAPW5HXVjgUAHbg89F7-E5nmkfo7McGIMezD5zP5bCuX6MQlN4mIwG66iH7v0AT21zrV79H7dtNPxwMi3&_nc_zt=23&_nc_ht=scontent.fchm1-1.fna&_nc_gid=k6mKiejbCS0yRFOJ8nI-9w&_nc_ss=7a3a8&oh=00_Af1tJzUbyU-_jCQP6__48BjYnVEK8t-WTRJ3Nygx7O7rGQ&oe=69D7DAE3',
        alt: 'Imagen Facebook',
        contenido: true,
    },
    {
        tipo: 'ancha',
        img: 'https://scontent.fchm1-1.fna.fbcdn.net/v/t1.6435-9/53399809_399223590643332_2243677631096553472_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeHAF4Z2fJjEetDZR9-ZSWXGYmznSVOI6gtibOdJU4jqC_lVyIaGfvKZpf8o3YqDC1OSbpSkNHqx600H_YcT1PuS&_nc_ohc=jCJrR-1oN1YQ7kNvwFlNfTX&_nc_oc=Adqxvl06qLd_w0FEpThz8Grmg3W38DKmJxkYc5b29HT1ZBWaKFrkTEEYJHCYB06TabW6GcI23VdD68zhuuzzTnVB&_nc_zt=23&_nc_ht=scontent.fchm1-1.fna&_nc_gid=TtToGPSTF6dBZ9XZQQf6Cg&_nc_ss=7a3a8&oh=00_Af2sZ8QIzDa230R0ynwDaE7SvZZBU6aa48GiqWwImTQ_mw&oe=69F9666B',
        alt: 'Imagen horizontal 1',
        contenido: false,
    },
    {
        tipo: 'ancha',
        img: 'https://scontent.fchm1-1.fna.fbcdn.net/v/t1.6435-9/31195759_239651679933858_7735358704232431616_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeGKp5SLAeZN8TfqKId4ekLvvNmIiILh3Fm82YiIguHcWVqMGHZcve-RFXapnGtVFABzvn7N-uoUpRD0D71MbBeI&_nc_ohc=XvusIve_kr0Q7kNvwGaY1VF&_nc_oc=AdqpSgR4BoktmF4zoxBRAJkTLH9Bxc-s-AL0hXnlazAVD8CkPVkcs8598u5cL5Q_Zjq9PdE7JrMLmYHhr5fk8xAF&_nc_zt=23&_nc_ht=scontent.fchm1-1.fna&_nc_gid=jj71LuOBLd5_r3JvXSJU1w&_nc_ss=7a3a8&oh=00_Af3YJz02BUX-l7WlQRAoSsrBVj01pnrUkCGaXZoSiHWd9Q&oe=69F95664',
        alt: 'Imagen horizontal 2',
        contenido: false,
    },
]
export default function HeroCarrusel() {
    useEffect(() => {
        const swiper = new Swiper('.mySwiper', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        })
        return () => swiper.destroy()
    }, [])

    return (
        <section className="relative w-full h-[70vh] overflow-hidden">
            <div className="swiper mySwiper w-full h-full">
                <div className="swiper-wrapper">
                    {slides.map((slide, i) => (
                        <div key={i} className={`swiper-slide relative w-full h-full 
                        ${slide.tipo === 'alta' ? 'flex items-center justify-center bg-[#1a1a1a]' : 'flex items-center justify-center bg-black'}`}>
                            <img
                                src={slide.img}
                                alt={slide.alt}
                                className={`${slide.tipo === 'alta'
                                    ? 'w-[70%] h-auto max-h-[90vh] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                                    : 'w-full h-full object-contain'}`}
                            />
                            {slide.tipo === 'alta' && (
                                <div className="absolute inset-0 bg-black/60 z-10"/>
                            )}

                            {slide.contenido && (
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white max-w-2xl w-[90%] z-20">
                                    <h1 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                                        Añade estilo y elegancia a tus espacios con nuestras melaninas de primera
                                        calidad
                                    </h1>
                                    <p className="text-sm md:text-lg mb-6 drop-shadow">
                                        Descubre nuestra amplia gama de productos para la fabricación de muebles en
                                        melamina
                                    </p>
                                    <Link
                                        to="/tienda"
                                        className="bg-[#3498db] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2980b9] hover:-translate-y-1 transition-all duration-300 inline-block">
                                        Ir a la tienda
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="swiper-pagination"/>
            </div>
        </section>
    )
}
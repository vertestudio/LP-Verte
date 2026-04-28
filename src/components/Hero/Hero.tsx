import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Hero.css'

const slides = [
    {
        id: 1,
        eyebrow: 'Tecnologia & Design',
        title: 'Feito camada\npor camada',
        sub: 'Impressão 3D com acabamento premium.',
        image: null,
        gradient: 'linear-gradient(130deg, #3a4832 0%, #4d6040 35%, #b8a888 65%, #ddd0b8 100%)',
    },
    {
        id: 2,
        eyebrow: 'Verte Decora',
        title: 'Cada peça conta\numa história',
        sub: 'Beleza e função andam sempre juntas.',
        image: null,
        gradient: 'linear-gradient(130deg, #5a6848 0%, #7a8c60 40%, #c8b080 70%, #e0caa0 100%)',
    },
    {
        id: 3,
        eyebrow: 'Verte Organiza',
        title: 'Seu espaço,\nsua identidade',
        sub: 'Organização com design de verdade.',
        image: null,
        gradient: 'linear-gradient(130deg, #2e3c2a 0%, #404e38 35%, #a89878 65%, #ccc0a0 100%)',
    },
]

function ProductSVG() {
    return (
        <svg viewBox="0 0 520 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="260" cy="545" rx="195" ry="25" fill="rgba(0,0,0,0.16)" />
            <rect x="82" y="505" width="356" height="38" rx="5" fill="#1e2e1c" />
            <rect x="82" y="505" width="356" height="11" rx="5" fill="#253822" />
            <polygon points="282,122 342,142 342,504 282,504" fill="#1c381a" />
            <polygon points="282,122 342,142 362,182 302,162" fill="#284824" />
            <polygon points="282,122 302,162 302,504 282,504" fill="#2c5226" />
            <polygon points="302,162 362,182 362,504 302,504" fill="#223e1e" />
            <rect x="310" y="58" width="5" height="118" rx="2" fill="#c8a840" transform="rotate(4,312,100)" />
            <polygon points="310,58 315,58 312,40" fill="#b89030" transform="rotate(4,312,50)" />
            <g transform="translate(98,382) rotate(-11)">
                <polygon points="0,0 62,10 62,82 0,82" fill="#1c381a" />
                <polygon points="0,0 62,10 72,36 10,28" fill="#284824" />
                <polygon points="0,0 10,28 10,82 0,82" fill="#2c5226" />
                <polygon points="10,28 72,36 72,82 10,82" fill="#223e1e" />
                <circle cx="18" cy="12" r="5" fill="#182c16" />
                <circle cx="36" cy="14" r="5" fill="#182c16" />
            </g>
            <polygon points="302,162 311,166 311,298 302,294" fill="rgba(255,255,255,0.06)" />
        </svg>
    )
}

export default function Hero() {
    return (
        <section id="inicio" className="hero">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                effect="fade"
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: '.hero__pagination' }}
                navigation={{ prevEl: '.hero__btn--prev', nextEl: '.hero__btn--next' }}
                className="hero__swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="hero__bg"
                            style={{
                                background: slide.image
                                    ? `url(${slide.image}) center/cover no-repeat`
                                    : slide.gradient,
                            }}
                        />
                        <div className="hero__bg-overlay" />

                        <div className="hero__product" aria-hidden="true">
                            <ProductSVG />
                        </div>

                        <div className="hero__content">
                            <p className="hero__eyebrow">{slide.eyebrow}</p>
                            <h1 className="hero__title">
                                {slide.title.split('\n').map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                ))}
                            </h1>
                            <p className="hero__sub">{slide.sub}</p>
                            <a href="#produtos" className="btn-outline-white">Explorar</a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="hero__pagination" />
            <div className="hero__nav">
                <button className="hero__btn hero__btn--prev" aria-label="Slide anterior">‹</button>
                <button className="hero__btn hero__btn--next" aria-label="Próximo slide">›</button>
            </div>
        </section>
    )
}
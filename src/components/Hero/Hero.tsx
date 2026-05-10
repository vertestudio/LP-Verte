import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { slides } from '../../data/index'
import './Hero.css'


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
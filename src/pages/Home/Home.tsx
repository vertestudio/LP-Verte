import { useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import Categorias from '../../components/Categorias/Categorias'
import Produtos from '../../components/Produtos/Produtos'
import Marketplaces from '../../components/Marketplaces/Marketplaces'
import B2B from '../../components/B2B/B2B'
import BannerMeio from '../../components/BannerMeio/BannerMeio'
import Sobre from '../../components/Sobre/Sobre'
import Depoimentos from '../../components/Depoimentos/Depoimentos'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    useReveal()

    // Scroll para âncora quando chega via link (ex: /#produtos)
    useEffect(() => {
        const { hash } = window.location
        if (hash) {
            setTimeout(() => {
                document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        }
    }, [])

    return (
        <>
            <Nav />
            <Hero />
            <Categorias />
            <Produtos />
            <Marketplaces />
            <B2B />
            <BannerMeio />
            <Sobre />
            <Depoimentos />
            <Newsletter />
            <Footer />
        </>
    )
}
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReaveal'
import { valoresMarca } from '../../data'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { LogoNomeSvg } from '../../assets/AssetsSvg'
import './Marca.css'

export default function Marca() {
    useReveal()

    return (
        <>
            <Nav />

            {/* Hero */}
            <div className="marca-hero">
                <LogoNomeSvg />
                <p className="marca-hero__eyebrow reveal">Sobre a Marca</p>
                <h1 className="marca-hero__title reveal">
                    Uma marca para quem<br />acredita que os detalhes<br />importam
                </h1>
            </div>

            {/* 01 Essência + 02 Propósito */}
            <div className="marca-dois-col">
                <div className="marca-col reveal">
                    <p className="marca-col__num">01 — Essência</p>
                    <h2>Transformar o cotidiano, com cuidado</h2>
                    <p>A Verte nasceu da vontade de transformar o cotidiano — não apenas o aspecto visual dos lares, mas a forma como as pessoas se sentem dentro deles.</p>
                    <p>Somos uma marca que pensa em qualidade e traz inovação para o lar, com peças criadas com propósito e impressas em 3D com precisão artesanal.</p>
                </div>
                <div className="marca-col reveal">
                    <p className="marca-col__num">02 — Propósito</p>
                    <h2>Facilitar, organizar, encantar</h2>
                    <p>Facilitar e organizar o cotidiano de forma criativa e elegante — por meio de peças funcionais e bonitas, feitas com cuidado.</p>
                    <p>Levar artigos personalizáveis, decorações únicas e inovações em impressão 3D ao lar das pessoas. Queremos que cada peça faça você sentir que a escolha valeu cada detalhe.</p>
                </div>
            </div>

            {/* 03 Valores */}
            <div className="marca-valores">
                <p className="marca-valores__label reveal">03 — Valores</p>
                <h2 className="marca-valores__title reveal">O que guia cada decisão</h2>
                <div className="marca-valores__grid">
                    {valoresMarca.map((v) => (
                        <div key={v.id} className="valor-card reveal">{v.label}</div>
                    ))}
                </div>
            </div>

            {/* 04 Posicionamento */}
            <div className="marca-posicionamento">
                <p className="marca-col__num reveal">04 — Posicionamento</p>
                <h2 className="reveal">A escolha inteligente</h2>
                <p className="reveal">
                    A Verte ocupa um espaço precioso no mercado: qualidade real a um preço acessível.
                    Não somos a opção mais barata — nem a mais cara. Somos a escolha mais inteligente
                    para quem quer personalidade no lar sem abrir mão de qualidade.
                </p>
            </div>

            {/* Quote banner */}
            <div className="marca-quote">
                <blockquote className="reveal">
                    "Um espaço organizado não é luxo. É a forma<br />
                    mais simples de se presentear todo dia."
                </blockquote>
            </div>

            <Footer />
        </>
    )
}
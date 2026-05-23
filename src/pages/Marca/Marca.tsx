import { useReveal } from '../../hooks/useReveal'
import { valoresMarca } from '../../data'
import { LogoNomeSvg } from '../../assets/AssetsSvg'
import { JsonLd } from '../../components/JsonLd/JsonLd'
import { organizationSchema, webPageSchema } from '../../data/schemas'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import './Marca.css'

export default function Marca() {
    useReveal()

    const schemas = [
        organizationSchema(),
        webPageSchema(
            "Verte Studio — Sobre a Marca",
            "Conheça a Verte Studio: marca de organização e decoração em impressão 3D. Peças sustentáveis, design exclusivo e feitas camada por camada."
        ),
    ]

    return (
        <>
            <JsonLd data={schemas} />
            <Nav />

            {/* Hero */}
            <div className="marca-hero">
                <LogoNomeSvg />
                <p className="marca-hero__eyebrow reveal">Sobre a Marca</p>
                <h1 className="marca-hero__title reveal">
                    Para quem<br />acredita que os detalhes<br />importam
                </h1>
            </div>

            {/* 01 Essência + 02 Propósito */}
            <div className="marca-dois-col">
                <div className="marca-col reveal">
                    <h3 className="marca-col__num">01 — Essência</h3>
                    <h2>Transformar o cotidiano, com cuidado</h2>
                    <p>A Verte nasceu da vontade de renovar o cotidiano, trazendo mais aconchego para os momentos que passamos em casa.</p>
                    <p>Somos uma marca que pensa em qualidade e traz inovação para o lar, com peças criadas com propósito e impressas em 3D com precisão artesanal.</p>
                </div>
                <div className="marca-col reveal">
                    <h3 className="marca-col__num">02 — Propósito</h3>
                    <h2>Criar espaços que abraçam a sua rotina</h2>
                    <p>Trazer leveza para o dia a dia através de peças que equilibram beleza e utilidade, feitas para que você se sinta em casa em cada detalhe.</p>
                    <p>Porque um espaço bonito começa nos detalhes que você escolhe.</p>
                </div>
            </div>

            {/* 03 Valores */}
            <div className="marca-valores">
                <h3 className="marca-valores__label reveal">03 — Valores</h3>
                <h2 className="marca-valores__title reveal">O que guia cada decisão</h2>
                <div className="marca-valores__grid">
                    {valoresMarca.map((v) => (
                        <div key={v.id} className="valor-card reveal">{v.label}</div>
                    ))}
                </div>
            </div>

            {/* 04 Posicionamento */}
            <div className="marca-posicionamento">
                <h3 className="marca-col__num reveal">04 — Posicionamento</h3>
                <h2 className="reveal">Para que cada lar reflita a personalidade de quem vive nele</h2>
                <p className="reveal">
                    Acreditamos que transformar o cotidiano através dos detalhes é o primeiro passo para criar um lar que abraça e acolhe a nossa história.
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
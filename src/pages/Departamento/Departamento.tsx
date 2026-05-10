import { useParams, Link, Navigate } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import { categorias, produtos } from '../../data'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import type { Departamento as DepartamentoType } from '../../types'
import './Departamento.css'

export default function Departamento() {
    useReveal()

    const { slug } = useParams<{ slug: DepartamentoType }>()

    // Busca a categoria pelo slug
    const categoria = categorias.find((c) => c.slug === slug)

    // Slug inválido → redireciona para home
    if (!categoria) return <Navigate to="/" replace />

    // Filtra produtos do departamento
    const produtosDoDepartamento = produtos.filter(
        (p) => p.departamento === slug
    )

    return (
        <>
            <Nav />

            {/* ── Banner ── */}
            <div
                className="depto-banner"
                style={{
                    background: categoria.banner
                        ? `url(${categoria.banner}) center/cover no-repeat`
                        : categoria.bannerGradient,
                }}
            >
                <div className="depto-banner__overlay" />
                <div className="depto-banner__content">
                    <p className="depto-banner__label">Departamento</p>
                    <h1 className="depto-banner__title">Verte {categoria.id.charAt(0).toUpperCase() + categoria.id.slice(1)}</h1>
                    <p className="depto-banner__sub">{categoria.tagline}</p>
                </div>
            </div>

            {/* ── Grid de produtos ── */}
            <section className="depto-colecao">
                <div className="depto-colecao__header reveal">
                    <p className="section-label">Coleção</p>
                    <h2 className="section-title">{categoria.colecaoTitulo}</h2>
                </div>

                {produtosDoDepartamento.length > 0 ? (
                    <div className="depto-grid">
                        {produtosDoDepartamento.map((p) => (
                            <div key={p.id} className="prod-card reveal">
                                <div className="prod-card__img">
                                    {p.image
                                        ? <img src={p.image} alt={p.nome} />
                                        : <div className={`prod-card__ph prod-card__ph--${p.cor}`} />
                                    }
                                </div>
                                <h3 className="prod-card__nome">{p.nome}</h3>
                                <p className="prod-card__linha">{p.linha}</p>
                                {/* <div className="prod-card__tags">
                                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                                </div> */}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="depto-empty">Produtos em breve.</p>
                )}
            </section>

            {/* ── Voltar ── */}
            <div className="depto-voltar">
                <Link to="/#departamentos" className="btn-outline-dark">← Ver todas os Departamentos</Link>
            </div>

            <Footer />
        </>
    )
}
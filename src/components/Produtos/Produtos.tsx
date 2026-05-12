import { produtos } from '../../data'
import './Produtos.css'


export default function Produtos() {
    return (
        <section id="produtos" className="produtos">
            <div className="produtos__header reveal">
                <div>
                    <p className="section-label">Coleção</p>
                    <h2 className="section-title">Peças em destaque</h2>
                </div>
                <p className="produtos__desc">
                    Cada produto é impresso camada por camada com materiais
                    sustentáveis e acabamento artesanal.
                </p>
            </div>

            <div className="produtos__grid">
                {produtos.map((p) => (
                    <div key={p.id} className="prod-card reveal">
                        <div className="prod-card__img">
                            {p.image
                                ? <img src={p.image} alt={p.nome} />
                                : <div className={`prod-card__ph prod-card__ph--${p.cor}`} />
                            }
                        </div>
                        <p className="prod-card__linha">{p.linha}</p>
                        <h3 className="prod-card__nome">{p.nome}</h3>
                        {/* <div className="prod-card__tags">
                            {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    )
}
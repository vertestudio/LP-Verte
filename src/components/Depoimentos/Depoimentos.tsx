import { depoimentos } from '../../data'
import './Depoimentos.css'

function Stars() {
    return (
        <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="star" />
            ))}
        </div>
    )
}

export default function Depoimentos() {
    return (
        <section id="depoimentos" className="depoimentos">
            <span className="section-label reveal">Depoimentos</span>
            <h2 className="section-title reveal">O que dizem sobre nós</h2>

            <div className="depoimentos__grid">
                {depoimentos.map((d) => (
                    <div key={d.id} className="dep-card reveal">
                        <Stars />
                        <p className="dep-card__texto">{d.texto}</p>
                        <div className="dep-card__divider" />
                        <p className="dep-card__nome">{d.nome}</p>
                        <p className="dep-card__cidade">{d.cidade}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
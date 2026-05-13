import { Link } from 'react-router-dom'
import { categorias } from '../../data'
import './Categorias.css'

export default function Categorias() {
    return (
        <section id="categorias" className="categorias">
            <p className="section-label reveal">Categorias</p>
            <h2 className="section-title reveal">Nos detalhes é onde a Verte vive.</h2>

            <div className="categorias__grid">
                {categorias.map((cat) => (
                    <Link
                        key={cat.id}
                        to={`/espacos/${cat.slug}`}
                        className="cat-card reveal"
                    >
                        <div className="cat-card__img">
                            <img src={cat.image} alt={cat.nome} />
                        </div>
                        <div className="cat-card__label">
                            <p>{cat.linha}</p>
                            <h3>{cat.nome}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
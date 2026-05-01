import { Link } from 'react-router-dom'
import { categorias } from '../../data'
import './Categorias.css'

export default function Categorias() {
    return (
        <section id="categorias" className="categorias">
            <p className="section-label reveal">Departamentos</p>
            <h2 className="section-title reveal">Dois universos, um propósito</h2>

            <div className="categorias__grid">
                {categorias.map((cat) => (
                    <Link
                        key={cat.id}
                        to={`/departamento/${cat.slug}`}
                        className="cat-card reveal"
                    >
                        <div
                            className={`cat-card__img cat-card__img--${cat.id}`}
                            style={
                                cat.image
                                    ? { backgroundImage: `url(${cat.image})` }
                                    : undefined
                            }
                        />
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
import './Categorias.css'

const categorias = [
    { id: 'organiza', linha: 'Linha', nome: 'Organiza' },
    { id: 'decora', linha: 'Linha', nome: 'Decora' },
]

export default function Categorias() {
    return (
        <section id="categorias" className="categorias">
            <p className="section-label reveal">Departamentos</p>
            <h2 className="section-title reveal">Dois universos, um propósito</h2>

            <div className="categorias__grid">
                {categorias.map((cat) => (
                    <div key={cat.id} className="cat-card reveal">
                        <div className={`cat-card__img cat-card__img--${cat.id}`} />
                        <div className="cat-card__label">
                            <p>{cat.linha}</p>
                            <h3>{cat.nome}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
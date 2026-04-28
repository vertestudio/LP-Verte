import './Produtos.css'

// ─── Dados dos produtos ───────────────────────────────────────────────
// Para usar imagens reais, adicione o campo `image` com o caminho:
// image: '/assets/images/porta-canetas-geo.jpg'
export const produtos = [
    { id: 1, nome: 'Porta-canetas Geo', linha: 'Verte Organiza', tags: ['PLA Reciclado', 'Layer: 0.2mm'], cor: 'p1' },
    { id: 2, nome: 'Vaso Curva', linha: 'Verte Decora', tags: ['PLA Silk', 'Layer: 0.16mm'], cor: 'p2' },
    { id: 3, nome: 'Bandeja Banho', linha: 'Verte Organiza', tags: ['PLA Reciclado', 'Layer: 0.2mm'], cor: 'p3' },
    { id: 4, nome: 'Suporte Notebook', linha: 'Verte Organiza', tags: ['PLA Matte', 'Layer: 0.2mm'], cor: 'p4' },
    { id: 5, nome: 'Castiçal Orgânico', linha: 'Verte Decora', tags: ['PLA Silk', 'Layer: 0.12mm'], cor: 'p5' },
    { id: 6, nome: 'Porta-joias Geo', linha: 'Verte Acessórios', tags: ['PLA Reciclado', 'Layer: 0.16mm'], cor: 'p6' },
]

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
                        <h3 className="prod-card__nome">{p.nome}</h3>
                        <p className="prod-card__linha">{p.linha}</p>
                        <div className="prod-card__tags">
                            {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
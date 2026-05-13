import './B2B.css'

const diferenciais = [
    {
        id: '01',
        titulo: 'Personalização completa',
        desc: 'Cores, dimensões e acabamentos adaptados à identidade da sua empresa.',
    },
    {
        id: '02',
        titulo: 'Pedidos por volume',
        desc: 'Atendemos desde pequenas quantidades até pedidos maiores com prazo acordado.',
    },
    {
        id: '03',
        titulo: 'Entrega para todo o Brasil',
        desc: 'Embalagem cuidadosa e envio rastreável para qualquer região do país.',
    },
]

export default function B2B() {
    return (
        <section id="empresas" className="b2b">
            <div className="b2b__inner">

                <div className="b2b__left reveal">
                    <p className="b2b__label">Para empresas</p>
                    <h2 className="b2b__title">Aquilo que sua marca precisa</h2>
                    <p className="b2b__sub">
                        Atendemos empresas que buscam peças personalizadas — kits
                        corporativos, brindes exclusivos ou produtos com identidade
                        própria. Cada pedido é tratado com a mesma atenção que
                        dedicamos às nossas peças.
                    </p>
                    <a href="#contato" className="b2b__cta">Fazer um pedido →</a>
                </div>

                <div className="b2b__right reveal">
                    {diferenciais.map((d) => (
                        <div key={d.id} className="b2b__item">
                            <span className="b2b__num">{d.id}</span>
                            <div>
                                <h4>{d.titulo}</h4>
                                <p>{d.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
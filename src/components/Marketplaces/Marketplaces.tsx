import './Marketplaces.css'

const marketplaces = [
    {
        id: 'mercadolivre',
        nome: 'Mercado Livre',
        desc: 'Compre com segurança e parcelamento em até 12x sem juros.',
        tag: 'Entrega rápida',
        url: 'https://www.mercadolivre.com.br', // ← substitua pela URL da sua loja
    },
    // {
    //     id: 'shopee',
    //     nome: 'Shopee',
    //     desc: 'Frete grátis em selecionados e promoções exclusivas da plataforma.',
    //     tag: 'Frete grátis',
    //     url: 'https://shopee.com.br', // ← substitua pela URL da sua loja
    // },
]

export default function Marketplaces() {
    return (
        <section id="onde-comprar" className="marketplaces">
            <div className="marketplaces__inner">

                <div className="marketplaces__header reveal">
                    <div>
                        <span className="section-label">Onde comprar</span>
                        <h2 className="section-title">Encontre a Verte nos<br />melhores marketplaces</h2>
                    </div>
                    <p className="marketplaces__sub">
                        Nossos produtos estão disponíveis nas principais plataformas
                        de compra do Brasil. Escolha onde prefere comprar.
                    </p>
                </div>

                <div className="marketplaces__grid">
                    {marketplaces.map((mp) => (
                        <a
                            key={mp.id}
                            href={mp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mp-card reveal"
                        >
                            <div className="mp-card__top">
                                <span className="mp-card__nome">{mp.nome}</span>
                                <span className="mp-card__arrow">↗</span>
                            </div>
                            <p className="mp-card__desc">{mp.desc}</p>
                            <span className="mp-card__tag">{mp.tag}</span>
                        </a>
                    ))}
                </div>

                <p className="marketplaces__note reveal">
                    Prefere falar direto com a gente?{' '}
                    <a href="#contato">Entre em contato</a> — atendemos pedidos
                    personalizados e respondemos em até 1 dia útil.
                </p>

            </div>
        </section>
    )
}
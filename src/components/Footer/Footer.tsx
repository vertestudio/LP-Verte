import { Link } from 'react-router-dom'
import { LogoNomeWhiteSvg } from '../../assets/AssetsSvg'
import './Footer.css'

const nav = [
    { label: 'Início', href: '/#inicio' },
    { label: 'Categorias', href: '/#categorias' },
    { label: 'Produtos', href: '/#produtos' },
    { label: 'A Marca', href: '/marca' },
]

const social = [
    { label: 'Instagram', href: 'https://www.instagram.com/verte.studio_/' },
    //{ label: 'Pinterest', href: '#' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@verte.studio' },
]

const contato = [
    { label: 'contato.vertestudio@gmail.com', href: 'mailto:contato.vertestudio@gmail.com' },
    { label: 'WhatsApp', href: 'https://wa.me/5554996002205?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Verte%20%3A)' },
]

export default function Footer() {
    return (
        <footer className="footer">
            <Link to="/" className="footer__logo"><LogoNomeWhiteSvg /></Link>
            <div className="footer__brand">
                <p>Uma marca para quem acredita que até os pequenos detalhes do dia a dia merecem ser bonitos.</p>
            </div>

            <div className="footer__grid">
                <div className="footer__col">
                    <h4>Navegação</h4>
                    <ul>
                        {nav.map((item) => (
                            <li key={item.label}>
                                {item.href.startsWith('/') && !item.href.includes('#')
                                    ? <Link to={item.href}>{item.label}</Link>
                                    : <a href={item.href}>{item.label}</a>
                                }
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__col">
                    <h4>Redes Sociais</h4>
                    <ul>
                        {social.map((item) => (
                            <li key={item.label}><a href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="footer__col">
                    <h4>Contato</h4>
                    <ul>
                        {contato.map((item) => (
                            <li key={item.label}><a href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <p>© 2026 Verte. Todos os direitos reservados.</p>
                <p>Feito com cuidado, camada por camada.</p>
            </div>
        </footer>
    )
}

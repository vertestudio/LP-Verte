import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NomeSvg } from '../../assets/AssetsSvg'
import './Nav.css'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const close = () => setMenuOpen(false)

    return (
        <>
            {/* Mobile overlay menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-top">
                    <Link to="/" className="mobile-menu-logo" onClick={close}><NomeSvg /></Link>
                    <button className="mobile-menu-close" onClick={close}>✕</button>
                </div>
                <ul className="mobile-menu-links">
                    <li><a href="/#inicio" onClick={close}>Início</a></li>
                    <li><a href="/#categorias" onClick={close}>Categorias</a></li>
                    <li><a href="/#produtos" onClick={close}>Produtos</a></li>
                    {/* <li><a href="/#onde-comprar" onClick={close}>Onde comprar</a></li> */}
                    <li><a href="/#empresas" onClick={close}>Empresas</a></li>
                    {/* <li><a href="/#sobre" onClick={close}>Sobre</a></li> */}
                    {/* <li><a href="/#depoimentos" onClick={close}>Depoimentos</a></li> */}
                    <li><Link to="/marca" onClick={close}>A Marca</Link></li>
                </ul>
            </div>

            {/* Main nav */}
            <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
                <Link to="/" className="nav-logo"><NomeSvg /></Link>
                <ul className="nav-links">
                    <li><a href="/#inicio">Início</a></li>
                    <li><a href="/#categorias">Categorias</a></li>
                    <li><a href="/#produtos">Produtos</a></li>
                    {/* <li><a href="/#onde-comprar">Onde comprar</a></li> */}
                    <li><a href="/#empresas">Empresas</a></li>
                    {/* <li><a href="/#sobre">Sobre</a></li> */}
                    {/* <li><a href="/#depoimentos">Depoimentos</a></li> */}
                    <li><Link to="/marca">A Marca</Link></li>
                </ul>
                <button
                    className="nav-hamburger"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Abrir menu"
                >
                    <span /><span /><span />
                </button>
            </nav>
        </>
    )
}


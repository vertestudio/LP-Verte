import './BannerMeio.css'

export default function BannerMeio() {
    return (
        <div className="banner-meio">
            <div className="banner-meio__bg" />
            <div className="banner-meio__content reveal">
                <h2 className="banner-meio__title">
                    Onde tecnologia<br />encontra o lar
                </h2>
                <p className="banner-meio__sub">
                    Peças funcionais e decorativas, impressas em 3D com materiais sustentáveis.<br />
                    Feitas com cuidado, pensadas para transformar.
                </p>
                <a href="#departamentos" className="btn-outline-white">Conheça as Coleções</a>
            </div>
        </div>
    )
}
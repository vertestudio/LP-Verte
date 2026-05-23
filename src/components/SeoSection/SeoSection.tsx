import { useState } from "react";
import "./SeoSection.css";

export function SeoSection() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="seo-wrapper">
            <h2 className="seo-logo reveal">Verte Studio</h2>

            <p className="seo-text reveal">
                A Verte Studio surgiu da ideia de que itens do dia a dia podem ser{" "}
                <em className="seo-highlight">bonitos, práticos e exclusivos</em>.
                Utilizamos a impressão 3D para criar peças decorativas e organizadores
                com design cuidadoso — vasos, porta-copos, suportes para celular,
                bandejas e muito mais.
            </p>

            <div className={`seo-extra-box reveal${expanded ? " seo-extra-box--expanded" : ""}`}>
                <p className="seo-extra">
                    Todas as nossas peças são fabricadas artesanalmente por meio da impressão 3D, utilizando materiais de alta qualidade e atenção aos detalhes. Cada peça é projetada para quem valoriza um ambiente com personalidade. Design exclusivo e entrega para todo o Brasil
                </p>
            </div>

            <button
                className={`seo-toggle reveal${expanded ? " seo-toggle--open" : ""}`}
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
            >
                {expanded ? "Ver menos" : "Ver mais"}
                <svg
                    className="seo-chevron"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
        </section>
    );
}
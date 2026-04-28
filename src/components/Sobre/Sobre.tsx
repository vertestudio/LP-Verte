import { Link } from 'react-router-dom'
import './Sobre.css'

export default function Sobre() {
    return (
        <section id="sobre" className="sobre">
            <div className="sobre__inner">

                <div className="sobre__img reveal" aria-hidden="true">
                    <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" y="60" width="160" height="180" rx="4"
                            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
                        <rect x="40" y="160" width="120" height="8" rx="2" fill="rgba(255,255,255,0.14)" />
                        <rect x="80" y="100" width="40" height="20" rx="3" fill="rgba(255,255,255,0.18)" />
                        <rect x="95" y="118" width="10" height="16" rx="2" fill="rgba(255,255,255,0.28)" />
                        <ellipse cx="100" cy="162" rx="28" ry="6" fill="rgba(140,190,110,0.28)" />
                        <path d="M72 162 Q68 130 75 110 Q85 95 100 90 Q115 95 125 110 Q132 130 128 162 Z"
                            fill="rgba(90,150,70,0.18)" stroke="rgba(140,190,110,0.36)" strokeWidth="1" />
                        <path d="M78 155 Q90 130 100 120 Q110 130 122 155"
                            stroke="rgba(140,210,90,0.28)" strokeWidth="0.5" fill="none" />
                        <path d="M75 148 Q88 122 100 112 Q112 122 125 148"
                            stroke="rgba(140,210,90,0.22)" strokeWidth="0.5" fill="none" />
                        <path d="M100 98 L100 118"
                            stroke="rgba(255,255,255,0.36)" strokeWidth="2" strokeDasharray="3,2" />
                        <rect x="30" y="60" width="4" height="180" rx="2" fill="rgba(255,255,255,0.07)" />
                        <rect x="166" y="60" width="4" height="180" rx="2" fill="rgba(255,255,255,0.07)" />
                    </svg>
                </div>

                <div className="sobre__text reveal">
                    <h2>Organização sustentável para o lar moderno</h2>
                    <p>A Verte nasceu da vontade de transformar o cotidiano — não apenas o aspecto visual dos lares, mas a forma como as pessoas se sentem dentro deles.</p>
                    <p>Cada peça é pensada com cuidado e impressa camada por camada, utilizando filamento PLA de origem sustentável. Da modelagem 3D ao acabamento final, priorizamos qualidade, funcionalidade e um design que faça diferença.</p>
                    <p>Somos a escolha inteligente para quem quer personalidade no lar sem abrir mão de qualidade — organização e decoração feitas com propósito.</p>

                    <div className="sobre__stats">
                        <div><span className="stat-num">100%</span><span className="stat-label">PLA Sustentável</span></div>
                        <div><span className="stat-num">0.12mm</span><span className="stat-label">Precisão Mínima</span></div>
                        <div><span className="stat-num">∞</span><span className="stat-label">Personalização</span></div>
                    </div>

                    <Link to="/marca" className="btn-outline-dark">Saiba mais sobre a Verte</Link>
                </div>

            </div>
        </section>
    )
}
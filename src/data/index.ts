import type { Produto, Categoria, Depoimento, ValorMarca } from '../types'
import OrganizaImg from '../assets/photos/departamentos/Organiza.webp'
import DecoraImg from '../assets/photos/departamentos/Decora.webp'
import BandejaImg from '../assets/photos/products/bandeja.webp'
import ConjuntoBandejaImg from '../assets/photos/products/conjunto_bandeja_caixinha.webp'
import ConjuntoDecora from '../assets/photos/products/conjunto_decora.webp'
import ConjuntoVasos from '../assets/photos/products/conjunto_vasos.webp'
import SuporteCelular from '../assets/photos/products/suporte_celular.webp'
import SuporteCopo from '../assets/photos/products/suporte_copo.webp'
import VasoComSuporte from '../assets/photos/products/vaso_com_suporte.webp'
import VasoRosca from '../assets/photos/products/vaso_rosca.webp'
import BandejaImgHero from '../assets/photos/slider/Bandeja_Organizadora.webp'
import BandejaMobileImg from '../assets/photos/slider/Bandeja_Organiza_Mobile.webp'
import ConjuntoImg from '../assets/photos/slider/Conjunto_Decora.webp'
import ConjuntoMobileImg from '../assets/photos/slider/Conjunto_Decora_Mobile.webp'
import VasoImg from '../assets/photos/slider/Vaso_Decora.webp'
import VasoMobileImg from '../assets/photos/slider/Vaso_Decora_Mobile.webp'

const isMobile = window.innerWidth < 768

//Slider Principal

export const slides = [
    {
        id: 1,
        eyebrow: 'Tecnologia & Design',
        title: 'Feito camada\npor camada',
        sub: 'Impressão 3D com acabamento premium.',
        image: isMobile ? BandejaMobileImg : BandejaImgHero,
        gradient: 'linear-gradient(130deg, #3a4832 0%, #4d6040 35%, #b8a888 65%, #ddd0b8 100%)',
    },
    {
        id: 2,
        eyebrow: 'Verte Decora',
        title: 'Cada peça conta\numa história',
        sub: 'Beleza e função andam sempre juntas.',
        image: isMobile ? ConjuntoMobileImg : ConjuntoImg,
        gradient: 'linear-gradient(130deg, #5a6848 0%, #7a8c60 40%, #c8b080 70%, #e0caa0 100%)',
    },
    {
        id: 3,
        eyebrow: 'Verte Decora',
        title: 'Seu espaço,\nsua identidade',
        sub: 'Decoração com design de verdade.',
        image: isMobile ? VasoMobileImg : VasoImg,
        gradient: 'linear-gradient(130deg, #2e3c2a 0%, #404e38 35%, #a89878 65%, #ccc0a0 100%)',
    },
]


//Categorias

export const categorias: Categoria[] = [
  {
    id: 'organiza',
    linha: 'Linha',
    nome: 'Organiza',
    slug: 'organiza',
    image: OrganizaImg,
    banner: null,
    bannerGradient: 'linear-gradient(145deg, #c8c4b8 0%, #a0a890 40%, #6a7c60 100%)',
    tagline: 'Organização com design de verdade.',
    descricao: 'Peças funcionais que transformam sua casa e seu espaço.',
    colecaoTitulo: 'Peças para organizar',
  },
  {
    id: 'decora',
    linha: 'Linha',
    nome: 'Decora',
    slug: 'decora',
    image: DecoraImg,
    banner: null,
    bannerGradient: 'linear-gradient(145deg, #c8b89a 0%, #c49070 40%, #8a6050 100%)',
    tagline: 'Peças únicas que transformam ambientes com personalidade.',
    descricao: 'Decoração impressa com cuidado, pensada para transformar.',
    colecaoTitulo: 'Peças para decorar',
  },
]

//Produtos

export const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Conjunto Organizador de Mesa – Bandeja + Pote com Tampa',
    linha: 'Verte Organiza',
    departamento: 'organiza',
    image: ConjuntoBandejaImg,
    // tags: ['PLA Reciclado', 'Layer: 0.2mm'],
    cor: 'p1',
  },
  {
    id: 2,
    nome: 'Conjunto Decorativo – Bandeja, Vaso, Difusor e Suporte de Vela',
    linha: 'Verte Decora',
    departamento: 'decora',
    image: ConjuntoDecora,
    // tags: ['PLA Silk', 'Layer: 0.16mm'],
    cor: 'p2',
  },
  {
    id: 3,
    nome: 'Bandeja Organizadora de Acessórios',
    linha: 'Verte Organiza',
    departamento: 'organiza',
    image: BandejaImg,
    // tags: ['PLA Reciclado', 'Layer: 0.2mm'],
    cor: 'p3',
  },
  {
    id: 4,
    nome: 'Jogo de Descanso para Copos – Textura Rendada',
    linha: 'Verte Organiza',
    departamento: 'organiza',
    image: SuporteCopo,
    // tags: ['PLA Matte', 'Layer: 0.2mm'],
    cor: 'p4',
  },
  {
    id: 5,
    nome: 'Conjunto de Vasos Canelados com Pés',
    linha: 'Verte Decora',
    departamento: 'decora',
    image: ConjuntoVasos,
    // tags: ['PLA Silk', 'Layer: 0.12mm'],
    cor: 'p5',
  },
  {
    id: 6,
    nome: 'Suporte para Celular Slim',
    linha: 'Verte Organiza',
    departamento: 'organiza',
    image: SuporteCelular,
    // tags: ['PLA Reciclado', 'Layer: 0.16mm'],
    cor: 'p6',
  },
    {
    id: 7,
    nome: 'Vaso com Suporte',
    linha: 'Verte Decora',
    departamento: 'decora',
    image: VasoComSuporte,
    // tags: ['PLA Silk', 'Layer: 0.12mm'],
    cor: 'p7',
  },
    {
    id: 8,
    nome: 'Vaso com Textura de Arcos',
    linha: 'Verte Decora',
    departamento: 'decora',
    image: VasoRosca,
    // tags: ['PLA Silk', 'Layer: 0.12mm'],
    cor: 'p8',
  },
]

//Depoimentos

export const depoimentos: Depoimento[] = [
  {
    id: 1,
    texto: '"Os organizadores de banheiro mudaram completamente meu espaço. A qualidade do acabamento é impressionante — parece peça de designer."',
    nome: 'Carolina M.',
    cidade: 'Porto Alegre, RS',
  },
  {
    id: 2,
    texto: '"Comprei o vaso Curva e já virou a peça favorita da sala. Todo mundo pergunta onde encontrei. Amei o cuidado na embalagem também."',
    nome: 'Fernanda S.',
    cidade: 'São Paulo, SP',
  },
  {
    id: 3,
    texto: '"Finalmente encontrei organizadores que são bonitos e funcionais. Meu escritório nunca esteve tão arrumado — e elegante ao mesmo tempo."',
    nome: 'Juliana R.',
    cidade: 'Curitiba, PR',
  },
]


//Valores

export const valoresMarca: ValorMarca[] = [
  { id: 1, label: 'Qualidade'    },
  { id: 2, label: 'Praticidade'  },
  { id: 3, label: 'Satisfação'   },
  { id: 4, label: 'Cuidado'      },
  { id: 5, label: 'Criatividade' },
]
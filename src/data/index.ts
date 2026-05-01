import type { Produto, Categoria, Depoimento, ValorMarca } from '../types'

export const categorias: Categoria[] = [
  {
    id: 'organiza',
    linha: 'Linha',
    nome: 'Escritório',
    slug: 'organiza',
    // image: '/assets/images/categorias/cat-organiza.jpg',
    banner: null,
    bannerGradient: 'linear-gradient(145deg, #c8c4b8 0%, #a0a890 40%, #6a7c60 100%)',
    tagline: 'Organização com design de verdade.',
    descricao: 'Peças funcionais que transformam sua mesa e seu espaço.',
    colecaoTitulo: 'Peças para organizar',
  },
  {
    id: 'decora',
    linha: 'Linha',
    nome: 'Casa',
    slug: 'decora',
    // image: '/assets/images/categorias/cat-decora.jpg',
    banner: null,
    bannerGradient: 'linear-gradient(145deg, #c8b89a 0%, #c49070 40%, #8a6050 100%)',
    tagline: 'Peças únicas que transformam ambientes com personalidade.',
    descricao: 'Decoração impressa com cuidado, pensada para transformar.',
    colecaoTitulo: 'Peças para decorar',
  },
]

export const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Porta-canetas Geo',
    linha: 'Verte Organiza',
    departamento: 'organiza',
    tags: ['PLA Reciclado', 'Layer: 0.2mm'],
    cor: 'p1',
  },
  {
    id: 2,
    nome: 'Vaso Curva',
    linha: 'Verte Decora',
    departamento: 'decora',
    tags: ['PLA Silk', 'Layer: 0.16mm'],
    cor: 'p2',
  },
  {
    id: 3,
    nome: 'Bandeja Banho',
    linha: 'Verte Organiza',
    departamento: 'organiza',
    tags: ['PLA Reciclado', 'Layer: 0.2mm'],
    cor: 'p3',
  },
  {
    id: 4,
    nome: 'Suporte Notebook',
    linha: 'Verte Organiza',
    departamento: 'organiza',
    tags: ['PLA Matte', 'Layer: 0.2mm'],
    cor: 'p4',
  },
  {
    id: 5,
    nome: 'Castiçal Orgânico',
    linha: 'Verte Decora',
    departamento: 'decora',
    tags: ['PLA Silk', 'Layer: 0.12mm'],
    cor: 'p5',
  },
  {
    id: 6,
    nome: 'Porta-joias Geo',
    linha: 'Verte Acessórios',
    departamento: 'organiza',
    tags: ['PLA Reciclado', 'Layer: 0.16mm'],
    cor: 'p6',
  },
]
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

export const valoresMarca: ValorMarca[] = [
  { id: 1, label: 'Qualidade'    },
  { id: 2, label: 'Praticidade'  },
  { id: 3, label: 'Satisfação'   },
  { id: 4, label: 'Cuidado'      },
  { id: 5, label: 'Criatividade' },
]
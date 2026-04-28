import type { Produto, Categoria, Depoimento, ValorMarca } from '../types'

export const categorias: Categoria[] = [
  { id: 'organiza', linha: 'Linha', nome: 'Organiza'},
  { id: 'decora', linha: 'Linha', nome: 'Decora'},
]

export const produtos: Produto[] = [
  { id: 1, nome: 'Porta-canetas Geo',  linha: 'Verte Organiza',    tags: ['PLA Reciclado', 'Layer: 0.2mm'],  cor: 'p1' },
  { id: 2, nome: 'Vaso Curva',         linha: 'Verte Decora',      tags: ['PLA Silk',      'Layer: 0.16mm'], cor: 'p2' },
  { id: 3, nome: 'Bandeja Banho',      linha: 'Verte Organiza',    tags: ['PLA Reciclado', 'Layer: 0.2mm'],  cor: 'p3' },
  { id: 4, nome: 'Suporte Notebook',   linha: 'Verte Organiza',    tags: ['PLA Matte',     'Layer: 0.2mm'],  cor: 'p4' },
  { id: 5, nome: 'Castiçal Orgânico',  linha: 'Verte Decora',      tags: ['PLA Silk',      'Layer: 0.12mm'], cor: 'p5' },
  { id: 6, nome: 'Porta-joias Geo',    linha: 'Verte Acessórios',  tags: ['PLA Reciclado', 'Layer: 0.16mm'], cor: 'p6' },
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
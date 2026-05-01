// ─────────────────────────────────────────────────────────────────────
// Departamentos disponíveis
// ─────────────────────────────────────────────────────────────────────
export type Departamento = 'organiza' | 'decora'

// ─────────────────────────────────────────────────────────────────────
// Produto
// ─────────────────────────────────────────────────────────────────────
export interface Produto {
  id: number
  nome: string
  linha: string
  departamento: Departamento
  tags: string[]
  cor: string
  image?: string
}

// ─────────────────────────────────────────────────────────────────────
// Categoria (usado nas páginas de departamento)
// ─────────────────────────────────────────────────────────────────────
export interface Categoria {
  id: string
  slug: Departamento
  linha: string
  nome: string
  image?: string
  banner?: string | null
  bannerGradient: string
  tagline: string
  descricao: string
  colecaoTitulo: string
}

// ─────────────────────────────────────────────────────────────────────
// Depoimento
// ─────────────────────────────────────────────────────────────────────
export interface Depoimento {
  id: number
  texto: string
  nome: string
  cidade: string
}

// ─────────────────────────────────────────────────────────────────────
// Valor da marca
// ─────────────────────────────────────────────────────────────────────
export interface ValorMarca {
  id: number
  label: string
}
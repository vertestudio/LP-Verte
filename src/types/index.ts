// ── Produto ──────────────────────────────────────────────────────────
export interface Produto {
  id: number
  nome: string
  linha: string
  tags: string[]
  cor: string
  image?: string // caminho para imagem real quando disponível
}

// ── Categoria ────────────────────────────────────────────────────────
export interface Categoria {
  id: string
  linha: string
  nome: string
  image?: string
}

// ── Depoimento ───────────────────────────────────────────────────────
export interface Depoimento {
  id: number
  texto: string
  nome: string
  cidade: string
}

// ── Valor da marca ───────────────────────────────────────────────────
export interface ValorMarca {
  id: number
  label: string
}
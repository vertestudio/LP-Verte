const SITE_URL = "https://vertestudio.com.br"

export function organizationSchema() {
  return {
    "@type": "Organization",
    name: "Verte Studio",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Peças decorativas e organizadores impressos em 3D. Para que cada lar reflita a personalidade de quem vive nele.",
    sameAs: [
      "https://www.instagram.com/verte.studio_/",
      "https://www.tiktok.com/@verte.studio",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contato.vertestudio@gmail.com",
      contactType: "customer service",
      url: `${SITE_URL}/#contato`,
    },
  }
}

export function productSchema(produto: {
  nome: string
  linha: string
  departamento: string
  image?: string
}) {
  const schema: Record<string, unknown> = {
    "@type": "Product",
    name: produto.nome,
    description: `${produto.nome} — peça da linha ${produto.linha}, impressa em 3D pela Verte Studio.`,
    brand: { "@type": "Brand", name: "Verte Studio" },
    category: produto.departamento === "organiza" ? "Organização" : "Decoração",
  }

  if (produto.image) schema.image = produto.image

  return schema
}

export function webPageSchema(title: string, description: string) {
  return {
    "@type": "WebPage",
    name: title,
    description,
    url: SITE_URL,
    inLanguage: "pt-BR",
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

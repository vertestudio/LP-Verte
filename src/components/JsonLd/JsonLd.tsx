import { Helmet } from "react-helmet-async"

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  const graph = Array.isArray(data) ? { "@graph": data } : data

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", ...graph })}
      </script>
    </Helmet>
  )
}

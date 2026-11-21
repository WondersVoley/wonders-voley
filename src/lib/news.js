
/* =========================================
   WONDERS - GESTOR DE NOTICIAS MARKDOWN
   ========================================= */

// Importamos todos los archivos .md como texto

const files = import.meta.glob(
  "../content/noticias/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);

// Extraemos los datos del encabezado Markdown

function parseArticle(path, content) {
  const match = content.match(
    /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/
  );

  if (!match) return null;

  const metadata = {};

  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");

    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();

    const value = line
      .slice(separator + 1)
      .trim()
      .replace(/^["']|["']$/g, "");

    metadata[key] = value;
  }

  const slug = path
    .split("/")
    .pop()
    .replace(/\.md$/, "");

  if (
    !metadata.title ||
    !metadata.date ||
    !metadata.image ||
    !metadata.summary
  ) {
    return null;
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.date)) {
    return null;
  }

  return {
    ...metadata,
    slug,
    draft: metadata.status !== "published",
    body: content.slice(match[0].length).trim(),
  };
}

// Construimos la colección y ordenamos por fecha

export const news = Object.entries(files)
  .map(([path, content]) => parseArticle(path, content))
  .filter(Boolean)
  .filter((article) => !article.draft || import.meta.env.DEV)
  .sort((a, b) => b.date.localeCompare(a.date));

// Obtener las últimas noticias

export function getLatestNews(limit = 3) {
  return news.slice(0, limit);
}

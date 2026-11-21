
import { getLatestNews } from "../lib/news";
import "./LatestNews.css";

export default function LatestNews() {
  const articles = getLatestNews(3);

  function formatDate(date) {
    return new Date(`${date}T12:00:00`)
      .toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
  }

  return (
    <section
      className="latest-news"
      aria-labelledby="latest-news-title"
    >
      <div className="latest-news__container">

        {/* CABECERA */}

        <div className="latest-news__heading">
          <div>
            <span className="latest-news__eyebrow">
              ACTUALIDAD DEL CLUB
            </span>

            <h2 id="latest-news-title">
              Últimas noticias
            </h2>
          </div>

          <a
            href="/noticias/"
            className="latest-news__all"
          >
            Ver todas
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>

        {/* NOTICIAS */}

        {articles.length > 0 ? (
          <div className="latest-news__grid">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="news-card"
              >
                <a
                  href={`/noticias/${article.slug}/`}
                  className="news-card__link"
                >
                  <div className="news-card__media">
                    <img
                      src={article.image}
                      alt=""
                      loading="lazy"
                    />
                  </div>

                  <div className="news-card__content">

                    <span className="news-card__category">
                      {article.category || "Noticias"}
                    </span>

                    {article.draft && (
                      <span className="news-card__draft">
                        Borrador
                      </span>
                    )}

                    <h3>{article.title}</h3>

                    <p>{article.summary}</p>

                    <div className="news-card__footer">
                      <time dateTime={article.date}>
                        {formatDate(article.date)}
                      </time>

                      <span className="news-card__arrow">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path d="M7 17 17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </span>
                    </div>

                  </div>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <p className="latest-news__empty">
            Próximamente publicaremos novedades del club.
          </p>
        )}

      </div>
    </section>
  );
}

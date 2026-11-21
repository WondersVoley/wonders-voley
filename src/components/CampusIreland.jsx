
import "./CampusIreland.css";

export default function CampusIreland() {
  return (
    <section
      className="ireland-campus"
      aria-labelledby="ireland-campus-title"
    >
      <div className="ireland-campus__container">

        {/* COLUMNA IZQUIERDA: TÍTULO */}

        <div className="ireland-campus__title-area">

          <span className="ireland-campus__eyebrow">
            EXPERIENCIA INTERNACIONAL
          </span>

          <h2 id="ireland-campus-title">
            CAMPUS EN
            <span>IRLANDA</span>
          </h2>

        </div>

        {/* COLUMNA DERECHA: CONTENIDO */}

        <div className="ireland-campus__text-area">

          <h3 className="ireland-campus__subtitle">
            Voleibol, inglés y nuevas experiencias.
          </h3>

          <p className="ireland-campus__description">
            Vive una experiencia deportiva bilingüe
            que combina el voleibol con el aprendizaje
            del inglés.
          </p>

          <p className="ireland-campus__description">
            Una oportunidad para conocer otra cultura,
            compartir nuevas experiencias y crecer
            dentro y fuera de la pista.
          </p>

          <a
            href="/campus/"
            className="ireland-campus__button"
          >
            <span>Descubre el campus</span>

            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>

        </div>

      </div>
    </section>
  );
}

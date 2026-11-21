
import "./Welcome.css";

export default function Welcome() {
  return (
    <section className="welcome" aria-labelledby="welcome-title">
      <div className="welcome__container">

        <div
          className="welcome__photo"
          role="img"
          aria-label="Espacio reservado para la fotografía de Kennya Valencia"
        />

        <div className="welcome__content">

          <span className="welcome__eyebrow">
            BIENVENIDOS A WONDERS
          </span>

          <h2 id="welcome-title">
            Mucho más que voleibol en Madrid
          </h2>

          <p>
            En Wonders queremos que cada deportista
            encuentre un espacio para aprender, disfrutar
            y crecer en equipo.
          </p>

          <p>
            Creemos en el deporte como una oportunidad
            para compartir experiencias, desarrollar valores
            y construir una comunidad.
          </p>

          <div className="welcome__signature">
            <strong>Kennya Valencia</strong>
            <span>Presidenta de Wonders Voley</span>
          </div>

        </div>

      </div>
    </section>
  );
}

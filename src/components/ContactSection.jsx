
import ContactForm from "./ContactForm";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section
      id="contacto-home"
      className="contact-home"
      aria-labelledby="contact-home-title"
    >
      <div className="contact-home__container">

        <div className="contact-home__intro">

          <span className="contact-home__eyebrow">
            HABLEMOS
          </span>

          <h2 id="contact-home-title">
            ¿Hablamos de voleibol?
          </h2>

          <p>
            ¿Quieres formar parte de Wonders Voley
            Madrid? ¿Tienes preguntas sobre nuestros
            equipos, entrenamientos o actividades?
          </p>

          <p>
            Estamos encantados de ayudarte a encontrar
            tu lugar dentro del club.
          </p>

          <span
            className="contact-home__decoration"
            aria-hidden="true"
          />

        </div>

        <div className="contact-home__form">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}

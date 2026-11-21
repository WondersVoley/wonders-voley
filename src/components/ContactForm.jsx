
import { useId, useState } from "react";

export default function ContactForm() {
  const id = useId();
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Pendiente de conectar con la API del VPS.
    // Por ahora no enviamos ni almacenamos datos.

    setNotice(
      "Formulario validado. Estamos en modo de prueba: " +
      "todavía no se ha enviado ningún mensaje."
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <h3>Envíanos tu consulta</h3>

      <div className="contact-form__row">

        <div className="contact-form__field">
          <label htmlFor={`${id}-name`}>
            Nombre *
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            maxLength={100}
            required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor={`${id}-email`}>
            Correo electrónico *
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tu@correo.com"
            maxLength={254}
            required
          />
        </div>

      </div>

      <div className="contact-form__field">
        <label htmlFor={`${id}-subject`}>
          Motivo de la consulta *
        </label>

        <select
          id={`${id}-subject`}
          name="subject"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="inscripciones">
            Inscripciones
          </option>
          <option value="equipos">
            Equipos y horarios
          </option>
          <option value="actividades">
            Campus y actividades
          </option>
          <option value="otros">
            Otras consultas
          </option>
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor={`${id}-message`}>
          Tu mensaje *
        </label>

        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          placeholder="Cuéntanos en qué podemos ayudarte..."
          minLength={10}
          maxLength={2000}
          required
        />
      </div>

      <label className="contact-form__privacy">
        <input
          type="checkbox"
          name="privacy"
          required
        />
        <span>
          He leído la{" "}
          <a href="/privacidad/">
            política de privacidad
          </a>.
        </span>
      </label>

      <button
        className="contact-form__submit"
        type="submit"
      >
        Enviar mensaje

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
          <path d="m5 12 14 0" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </button>

      {notice && (
        <p className="contact-form__notice" role="status">
          {notice}
        </p>
      )}
    </form>
  );
}

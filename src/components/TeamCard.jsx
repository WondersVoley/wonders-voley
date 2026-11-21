
import { useEffect, useRef, useState } from "react";

export default function TeamCard({ team }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const frontRef = useRef(null);
  const mapsRef = useRef(null);
  const keyboardOpenRef = useRef(false);

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(team.venue.address);

  // GIRAR AUTOMÁTICAMENTE CON EL CURSOR

  function handlePointerEnter(event) {
    if (
      event.pointerType === "mouse" ||
      event.pointerType === "pen"
    ) {
      setIsFlipped(true);
    }
  }

  function handlePointerLeave(event) {
    if (
      event.pointerType === "mouse" ||
      event.pointerType === "pen"
    ) {
      setIsFlipped(false);
    }
  }

  // AL TOCAR EN MÓVIL O ACTIVAR CON TECLADO

  function openCard(event) {
    keyboardOpenRef.current = event.detail === 0;
    setIsFlipped(true);
  }

  function closeCard() {
    setIsFlipped(false);
  }

  useEffect(() => {
    if (isFlipped && keyboardOpenRef.current) {
      mapsRef.current?.focus();
      keyboardOpenRef.current = false;
    }
  }, [isFlipped]);

  function handleKeyDown(event) {
    if (event.key === "Escape" && isFlipped) {
      setIsFlipped(false);
      frontRef.current?.focus();
    }
  }

  function handleBlur(event) {
    if (
      !event.currentTarget.contains(event.relatedTarget) &&
      !event.currentTarget.matches(":hover")
    ) {
      setIsFlipped(false);
    }
  }

  return (
    <article
      className={`team-card ${
        isFlipped ? "is-flipped" : ""
      }`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <div className="team-card__inner">

        {/* CARA FRONTAL */}

        <button
          ref={frontRef}
          type="button"
          className="team-card__face team-card__face--front"
          onClick={openCard}
          aria-label={`Ver información de ${team.name}`}
          aria-hidden={isFlipped}
          tabIndex={isFlipped ? -1 : 0}
        >
          <img
            src={team.image}
            alt=""
            loading="lazy"
            className="team-card__image"
          />

          <span className="team-card__front-content">
            <span className="team-card__name">
              {team.name}
            </span>

            <span className="team-card__action">
              Ver información
            </span>
          </span>
        </button>

        {/* CARA TRASERA */}

        <div
          className="team-card__face team-card__face--back"
          aria-hidden={!isFlipped}
        >
          <h3 className="team-card__back-title">
            {team.name}
          </h3>

          <div className="team-card__details">

            {/* INSTALACIÓN */}

            <div className="team-card__detail">
              <h4>Dónde entrenamos</h4>

              <strong>
                {team.venue.name}
              </strong>

              <span className="team-card__address">
                {team.venue.address}
              </span>

              <a
                ref={mapsRef}
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="team-card__maps"
                tabIndex={isFlipped ? 0 : -1}
              >
                Ver en Google Maps

                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
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

            <div className="team-card__divider" />

            {/* HORARIOS */}

            <div className="team-card__detail">
              <h4>Horarios</h4>

              <div className="team-card__schedule">
                {team.schedule.map((slot) => (
                  <div
                    className="team-card__schedule-row"
                    key={slot.day}
                  >
                    <strong>{slot.day}</strong>
                    <span>{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* SOLO NECESARIO EN PANTALLAS TÁCTILES */}

          <button
            type="button"
            className="team-card__return"
            onClick={closeCard}
            tabIndex={isFlipped ? 0 : -1}
          >
            Volver a la fotografía
          </button>

        </div>

      </div>
    </article>
  );
}

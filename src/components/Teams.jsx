
import { useCallback, useEffect, useRef, useState } from "react";
import TeamCard from "./TeamCard";
import "./Teams.css";

const teams = [
  {
    id: "infantil-femenino",
    name: "Infantil Femenino",
    image: "/images/infantil.webp",
    venue: {
      name: "CDM Orcasur",
      address: "Calle Moreja, 11, 28041 Madrid, España",
    },
    schedule: [
      { day: "Lunes", time: "19:00–20:30" },
      { day: "Miércoles", time: "19:00–20:30" },
    ],
  },
  {
    id: "cadete-femenino-a",
    name: "Cadete Femenino A",
    image: "/images/cadete-a.webp",
    venue: {
      name: "CDM Orcasur",
      address: "Calle Moreja, 11, 28041 Madrid, España",
    },
    schedule: [
      { day: "Martes", time: "19:00–20:30" },
      { day: "Jueves", time: "20:00–21:00" },
    ],
  },
  {
    id: "cadete-femenino-b",
    name: "Cadete Femenino B",
    image: "/images/cadete-b.webp",
    venue: {
      name: "Pabellón Deportivo Municipal",
      address:
        "Calle Mirasierra, 61, 28950 Moraleja de Enmedio, Madrid, España",
    },
    schedule: [
      { day: "Martes", time: "18:00–19:20" },
      { day: "Jueves", time: "18:00–19:20" },
    ],
  },
  {
    id: "senior-femenino",
    name: "Sénior Femenino",
    image: "/images/senior.webp",
    venue: {
      name: "CDM Orcasur",
      address: "Calle Moreja, 11, 28041 Madrid, España",
    },
    schedule: [
      { day: "Martes", time: "22:00–23:00" },
      { day: "Jueves", time: "21:00–22:00" },
    ],
  },
];

export default function Teams() {
  const carouselRef = useRef(null);

  const [arrows, setArrows] = useState({
    prev: false,
    next: false,
  });

  const updateArrows = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScroll =
      carousel.scrollWidth - carousel.clientWidth;

    setArrows({
      prev: carousel.scrollLeft > 2,
      next: carousel.scrollLeft < maxScroll - 2,
    });
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new ResizeObserver(updateArrows);

    observer.observe(carousel);

    Array.from(carousel.children).forEach((child) => {
      observer.observe(child);
    });

    updateArrows();

    return () => observer.disconnect();
  }, [updateArrows]);

  function scrollCarousel(direction) {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector(".team-card");
    if (!card) return;

    const gap =
      parseFloat(getComputedStyle(carousel).columnGap) || 0;

    const distance =
      card.getBoundingClientRect().width + gap;

    carousel.scrollBy({
      left: distance * direction,
      behavior: "smooth",
    });
  }

  return (
    <section
      className="teams"
      aria-labelledby="teams-title"
    >
      <div className="teams__container">

        <div className="teams__heading">
          <span className="teams__eyebrow">
            WONDERS VOLEY MADRID
          </span>

          <h2 id="teams-title">
            Nuestros equipos de voleibol
          </h2>

          <p>
            Conoce nuestros equipos de voleibol
            en Madrid, sus instalaciones y
            sus horarios de entrenamiento.
          </p>
        </div>

        {/* CARRUSEL */}

        <div
          ref={carouselRef}
          className="teams__carousel"
          onScroll={updateArrows}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Equipos de Wonders Voley"
          tabIndex={0}
        >
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>

        {/* FLECHAS */}

        <div className="teams__controls">

          <button
            type="button"
            className="teams__arrow"
            onClick={() => scrollCarousel(-1)}
            disabled={!arrows.prev}
            aria-label="Equipo anterior"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            className="teams__arrow"
            onClick={() => scrollCarousel(1)}
            disabled={!arrows.next}
            aria-label="Equipo siguiente"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}

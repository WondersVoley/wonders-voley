
import ActivityCard from "./ActivityCard";
import "./Activities.css";

const activities = [
  {
    title: "Campus",
    description: "Experiencias deportivas inolvidables.",
    image: "/images/imagen-3.webp",
    href: "/campus/",
  },
  {
    title: "Espinho",
    description: "Voleibol más allá de nuestras fronteras.",
    image: "/images/imagen-4.webp",
    href: "/espinho/",
  },
  {
    title: "Escuela de voleibol",
    description: "Aprende y crece con nosotros en Madrid.",
    image: "/images/imagen-5.webp",
    href: "/escuela-voleibol/",
  },
];

export default function Activities() {
  return (
    <section
      className="activities"
      aria-labelledby="activities-title"
    >
      <div className="activities__container">

        <div className="activities__heading">
          <span className="activities__eyebrow">
            DESCUBRE WONDERS
          </span>

          <h2 id="activities-title">
            Nuestras actividades
          </h2>

          <p>
            Vive el voleibol en Madrid y descubre
            nuevas experiencias dentro y fuera de
            la pista.
          </p>
        </div>

        <div className="activities__grid">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.title}
              {...activity}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

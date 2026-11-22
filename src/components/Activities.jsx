
import ActivityCard from "./ActivityCard";
import "./Activities.css";

const activities = [
  {
    title: "Campus",
    description: "Experiencias deportivas inolvidables.",
    image: "/images/home-campus.webp",
    href: "/campus/",
  },
  {
    title: "Espinho",
    description: "Voleibol más allá de nuestras fronteras.",
    image: "/images/home-espinho.webp",
    href: "/espinho/",
  },
  {
    title: "Escuela de voleibol",
    description: "Aprende y crece con nosotros en Madrid.",
    image: "/images/home-escuela.webp",
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

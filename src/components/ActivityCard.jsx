
export default function ActivityCard({
  title,
  description,
  image,
  href
}) {
  return (
    <a
      href={href}
      className="activity-card"
    >
      <img
        src={image}
        alt=""
        className="activity-card__image"
        loading="lazy"
      />

      <div className="activity-card__overlay" />

      <div className="activity-card__content">
        <h3>{title}</h3>

        <p>{description}</p>

        <span className="activity-card__link">
          Descubrir actividad
        </span>
      </div>
    </a>
  );
}

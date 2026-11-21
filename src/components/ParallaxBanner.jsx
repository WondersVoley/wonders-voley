
import { useEffect, useId, useRef, useState } from "react";
import "./ParallaxBanner.css";

export default function ParallaxBanner({
  image,
  eyebrow = "WONDERS VOLEY MADRID",
  title,
  description,
  buttonText = "Más información",
  href = "/contacto/",
}) {
  const bannerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    const element = bannerRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={bannerRef}
      className={`parallax-banner ${visible ? "is-visible" : ""}`}
      style={{
        backgroundImage: `url("${image}")`,
      }}
      aria-labelledby={titleId}
    >
      <div className="parallax-banner__content">

        <div className="parallax-banner__eyebrow">
          <span>{eyebrow}</span>
        </div>

        <h2 id={titleId}>{title}</h2>

        {description && (
          <p>{description}</p>
        )}

        <a href={href} className="parallax-banner__button">
          {buttonText}
        </a>

      </div>
    </section>
  );
}

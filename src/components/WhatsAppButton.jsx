
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phone = "34635746212";

  const message =
    "¡Hola! Me gustaría recibir más información sobre el Club Wonders Voley. Muchas gracias.";

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-floating"
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar con Wonders Voley por WhatsApp"
      title="Contacta con nosotros por WhatsApp"
    >
      <img
        src="/images/whatsapp-icon.webp"
        alt=""
        width="32"
        height="32"
      />
    </a>
  );
}

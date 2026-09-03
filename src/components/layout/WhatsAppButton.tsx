export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5561995827488?text=Ol%C3%A1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-[9998]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        transition-transform
        duration-300
        hover:scale-110
        active:scale-95
        sm:bottom-6
        sm:right-6
        sm:h-16
        sm:w-16
      "
    >
      <img
        src="/images/whatsapp.png"
        alt="WhatsApp"
        className="
          h-full
          w-full
          object-contain
          drop-shadow-[0_0_10px_rgba(37,211,102,0.35)]
        "
      />
    </a>
  );
}
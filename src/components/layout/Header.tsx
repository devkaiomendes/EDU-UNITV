import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/SEU_NUMERO";

const menuItems = [
  { label: "PLANOS", href: "#planos" },
  { label: "TUTORIAIS", href: "#tutoriais" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [vincularOpen, setVincularOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openVincular = () => {
    setMenuOpen(false);
    setVincularOpen(true);
  };

  const closeVincular = () => {
    setVincularOpen(false);
  };

  /* =========================================================
     CONTROLE DO MENU LATERAL + MODAL
  ========================================================= */
  useEffect(() => {
    if (!menuOpen && !vincularOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setVincularOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, vincularOpen]);

  return (
    <>
      {/* =========================================================
          HEADER
      ========================================================= */}
      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-[100]
          w-full
          border-b
          border-[#D4AF37]/70
          bg-black/95
          backdrop-blur-sm
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-[72px]
            w-full
            max-w-[1240px]
            items-center
            justify-between
            gap-6
            px-4
            sm:px-6
            lg:px-8
            xl:px-10
          "
        >
          {/* =====================================================
              LOGO
          ===================================================== */}
          <a
            href="#topo"
            onClick={closeMenu}
            className="
              shrink-0
              whitespace-nowrap
              text-base
              font-black
              tracking-wide
              text-white
              sm:text-lg
              md:text-xl
              md:tracking-wider
            "
          >
            EDU{" "}
            <span className="text-[#D4AF37]">
              UNITV
            </span>
          </a>

          {/* =====================================================
              MENU DESKTOP
          ===================================================== */}
          <nav
            className="
              hidden
              items-center
              gap-6
              lg:flex
              xl:gap-8
            "
          >
            {/* PLANOS + TUTORIAIS */}
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  whitespace-nowrap
                  text-[11px]
                  font-bold
                  tracking-[0.10em]
                  text-zinc-300
                  transition-colors
                  duration-200
                  hover:text-[#D4AF37]
                  xl:text-xs
                  xl:tracking-[0.14em]
                "
              >
                {item.label}
              </a>
            ))}

            {/* =================================================
                VINCULAR CONTA
            ================================================= */}
            <button
              type="button"
              onClick={openVincular}
              className="
                whitespace-nowrap
                rounded-md
                border
                border-[#D4AF37]
                bg-transparent
                px-4
                py-2.5
                text-[11px]
                font-black
                tracking-wider
                text-white
                transition-all
                duration-200
                hover:bg-[#D4AF37]
                hover:text-black
                xl:px-5
                xl:text-xs
              "
            >
              VINCULAR CONTA
            </button>

            {/* =================================================
                FAQ
            ================================================= */}
            <a
              href="#faq"
              className="
                whitespace-nowrap
                text-[11px]
                font-bold
                tracking-wider
                text-zinc-300
                transition-colors
                duration-200
                hover:text-[#D4AF37]
                xl:text-xs
              "
            >
              FAQ
            </a>

            {/* =================================================
                SUPORTE
            ================================================= */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                whitespace-nowrap
                text-[11px]
                font-black
                tracking-wider
                text-[#D4AF37]
                transition-colors
                duration-200
                hover:text-[#E8C95A]
                xl:text-xs
              "
            >
              SUPORTE
            </a>
          </nav>

          {/* =====================================================
              BOTÃO HAMBURGUER MOBILE
          ===================================================== */}
          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-md
              border
              border-[#D4AF37]
              bg-transparent
              text-[#D4AF37]
              transition-all
              duration-200
              hover:bg-[#D4AF37]
              hover:text-black
              lg:hidden
            "
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* =========================================================
          OVERLAY + MENU LATERAL MOBILE
      ========================================================= */}
      <div
        className={`
          fixed
          inset-0
          z-[150]
          lg:hidden
          ${
            menuOpen
              ? "pointer-events-auto visible"
              : "pointer-events-none invisible"
          }
        `}
      >
        {/* =======================================================
            FUNDO ESCURO
        ======================================================= */}
        <div
          className={`
            absolute
            inset-0
            bg-black/75
            transition-opacity
            duration-300
            ${
              menuOpen
                ? "opacity-100"
                : "opacity-0"
            }
          `}
          onClick={closeMenu}
        />

        {/* =======================================================
            PAINEL LATERAL
        ======================================================= */}
        <aside
          className={`
            absolute
            bottom-0
            right-0
            top-0
            flex
            w-[82%]
            max-w-[390px]
            flex-col
            border-l
            border-[#D4AF37]
            bg-[#080808]
            shadow-[-15px_0_45px_rgba(0,0,0,0.65)]
            transition-transform
            duration-300
            ease-out
            sm:w-[65%]
            sm:max-w-[430px]
            ${
              menuOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
          onClick={(event) => event.stopPropagation()}
        >
          {/* =====================================================
              TOPO DO MENU
          ===================================================== */}
          <div
            className="
              flex
              min-h-[72px]
              shrink-0
              items-center
              justify-between
              border-b
              border-[#D4AF37]/30
              px-5
              sm:px-6
            "
          >
            {/* LOGO */}
            <div
              className="
                text-sm
                font-black
                tracking-wide
                text-white
                sm:text-base
              "
            >
              EDU{" "}
              <span className="text-[#D4AF37]">
                UNITV
              </span>
            </div>

            {/* X */}
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={closeMenu}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-md
                text-[#D4AF37]
                transition-all
                duration-200
                hover:bg-[#D4AF37]
                hover:text-black
              "
            >
              <X size={24} />
            </button>
          </div>

          {/* =====================================================
              LINKS
          ===================================================== */}
          <nav
            className="
              flex
              flex-1
              flex-col
              overflow-y-auto
              px-5
              py-5
              sm:px-6
              sm:py-6
            "
          >
            {/* PLANOS */}
            <a
              href="#planos"
              onClick={closeMenu}
              className="
                flex
                min-h-[54px]
                items-center
                border-b
                border-[#D4AF37]/20
                text-[14px]
                font-bold
                tracking-wide
                text-white
                transition-colors
                duration-200
                hover:text-[#D4AF37]
                sm:text-[15px]
              "
            >
              PLANOS
            </a>

            {/* TUTORIAIS */}
            <a
              href="#tutoriais"
              onClick={closeMenu}
              className="
                flex
                min-h-[54px]
                items-center
                border-b
                border-[#D4AF37]/20
                text-[14px]
                font-bold
                tracking-wide
                text-white
                transition-colors
                duration-200
                hover:text-[#D4AF37]
                sm:text-[15px]
              "
            >
              TUTORIAIS
            </a>

            {/* VINCULAR CONTA */}
            <button
              type="button"
              onClick={openVincular}
              className="
                flex
                min-h-[54px]
                w-full
                items-center
                border-b
                border-[#D4AF37]/20
                text-left
                text-[14px]
                font-bold
                tracking-wide
                text-white
                transition-colors
                duration-200
                hover:text-[#D4AF37]
                sm:text-[15px]
              "
            >
              VINCULAR CONTA
            </button>

            {/* FAQ */}
            <a
              href="#faq"
              onClick={closeMenu}
              className="
                flex
                min-h-[54px]
                items-center
                border-b
                border-[#D4AF37]/20
                text-[14px]
                font-bold
                tracking-wide
                text-white
                transition-colors
                duration-200
                hover:text-[#D4AF37]
                sm:text-[15px]
              "
            >
              FAQ
            </a>

            {/* SUPORTE WHATSAPP */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                flex
                min-h-[54px]
                items-center
                border-b
                border-[#D4AF37]/20
                text-[14px]
                font-black
                tracking-wide
                text-[#D4AF37]
                transition-colors
                duration-200
                hover:text-[#E8C95A]
                sm:text-[15px]
              "
            >
              SUPORTE WHATSAPP
            </a>
          </nav>
        </aside>
      </div>

      {/* =========================================================
          MODAL — COMO VINCULAR CONTA
      ========================================================= */}
      {vincularOpen && (
        <div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/85
            px-4
            py-6
            backdrop-blur-sm
            sm:px-6
            sm:py-10
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeVincular();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="vincular-title"
            className="
              relative
              w-full
              max-w-[850px]
              overflow-hidden
              rounded-lg
              border
              border-[#D4AF37]
              bg-[#080808]
              shadow-[0_0_50px_rgba(212,175,55,0.10)]
            "
          >
            {/* =================================================
                BOTÃO X
            ================================================= */}
            <button
              type="button"
              aria-label="Fechar"
              onClick={closeVincular}
              className="
                absolute
                right-3
                top-3
                z-20
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-md
                border
                border-[#D4AF37]/60
                bg-black/80
                text-[#D4AF37]
                transition-all
                duration-200
                hover:bg-[#D4AF37]
                hover:text-black
                sm:right-4
                sm:top-4
              "
            >
              <X size={18} />
            </button>

            {/* =================================================
                CONTEÚDO DO MODAL
            ================================================= */}
            <div
              className="
                px-5
                pb-7
                pt-7
                sm:px-7
                sm:pb-8
                sm:pt-8
                md:px-8
              "
            >
              {/* TÍTULO */}
              <h2
                id="vincular-title"
                className="
                  pr-10
                  text-base
                  font-black
                  tracking-wide
                  text-white
                  sm:text-lg
                  md:text-xl
                "
              >
                COMO VINCULAR SUA CONTA{" "}
                <span className="text-[#D4AF37]">
                  UNITV
                </span>
              </h2>

              {/* LINHA DOURADA */}
              <div
                className="
                  mt-4
                  h-px
                  w-full
                  bg-[#D4AF37]
                "
              />

              {/* =================================================
                  VÍDEO
              ================================================= */}
              <div
                className="
                  mt-5
                  overflow-hidden
                  rounded-lg
                  border
                  border-[#D4AF37]
                  bg-black
                "
              >
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/SEU_VIDEO_VINCULAR"
                    title="Como vincular sua conta Unitv"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* =================================================
                  PASSOS
              ================================================= */}
              <div className="mt-5 space-y-3">
                <p
                  className="
                    text-xs
                    leading-relaxed
                    text-zinc-400
                    sm:text-sm
                  "
                >
                  <span className="text-[#D4AF37]">1.</span>{" "}
                  Abra o aplicativo e acesse o seu perfil.
                </p>

                <p
                  className="
                    text-xs
                    leading-relaxed
                    text-zinc-400
                    sm:text-sm
                  "
                >
                  <span className="text-[#D4AF37]">2.</span>{" "}
                  Procure pela opção de vincular conta.
                </p>

                <p
                  className="
                    text-xs
                    leading-relaxed
                    text-zinc-400
                    sm:text-sm
                  "
                >
                  <span className="text-[#D4AF37]">3.</span>{" "}
                  Vincule seu e-mail ou número de celular
                  para proteger seu acesso.
                </p>
              </div>

              {/* =================================================
                  FECHAR
              ================================================= */}
              <button
                type="button"
                onClick={closeVincular}
                className="
                  mt-7
                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  border
                  border-[#D4AF37]
                  bg-transparent
                  px-5
                  text-xs
                  font-black
                  tracking-[0.16em]
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#D4AF37]
                  hover:text-black
                  sm:text-sm
                "
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
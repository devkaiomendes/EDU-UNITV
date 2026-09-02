import { useEffect, useState } from "react";

interface Tutorial {
  image: string;
  title: string;
  description: string;
  videoId: string;
  steps: string[];
}

const tutorials: Tutorial[] = [
  {
    image: "/images/tv-box.png",
    title: "TV Box",
    description: "Navegador ou USB",
    videoId: "SEU_VIDEO_TV_BOX",
    steps: [
      "Abra o navegador da TV Box.",
      "Acesse o link: https://baixio.app/unitvbox",
      "Baixe, instale e ative com seu código.",
    ],
  },
  {
    image: "/images/smart-tv.png",
    title: "Smart TV Android",
    description: "App Downloader",
    videoId: "SEU_VIDEO_SMART_TV",
    steps: [
      "Abra a loja de aplicativos da sua Smart TV.",
      "Instale o aplicativo Downloader.",
      "Baixe, instale e ative com seu código.",
    ],
  },
  {
    image: "/images/celular-android.png",
    title: "Celular Android",
    description: "Download Direto",
    videoId: "SEU_VIDEO_CELULAR",
    steps: [
      "Acesse o link de download pelo celular.",
      "Baixe e instale o aplicativo.",
      "Abra e ative com seu código.",
    ],
  },
  {
    image: "/images/pc-mac.png",
    title: "PC ou Mac",
    description: "Emulador BlueStacks",
    videoId: "SEU_VIDEO_PC",
    steps: [
      "Baixe e instale o BlueStacks.",
      "Abra o emulador no computador.",
      "Baixe, instale e ative com seu código.",
    ],
  },
];

export function TutoriaisVip() {
  const [selectedTutorial, setSelectedTutorial] =
    useState<Tutorial | null>(null);

  useEffect(() => {
    if (!selectedTutorial) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedTutorial(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedTutorial]);

  return (
    <>
      {/* =====================================================
          SEÇÃO TUTORIAIS
      ===================================================== */}
      <section
        id="tutoriais"
        className="
          relative
          w-full
          overflow-hidden
          border-t
          border-[#D4AF37]/30
          bg-black
          px-4
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
          lg:py-28
        "
      >
        {/* GRADE SUPERIOR */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-0
            h-[250px]
            opacity-40
            sm:h-[280px]
            lg:h-[310px]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(212,175,55,0.20) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(212,175,55,0.20) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "50px 50px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />

        {/* CONTEÚDO */}
        <div className="relative z-10 mx-auto w-full max-w-[1215px]">
          {/* TÍTULO */}
          <div className="mb-10 text-center sm:mb-12 lg:mb-14">
            <h2
              className="
                text-[30px]
                font-black
                uppercase
                leading-none
                tracking-[0.04em]
                text-white
                sm:text-[34px]
                md:text-[38px]
                lg:text-[40px]
              "
            >
              TUTORIAIS{" "}
              <span className="text-[#D4AF37]">VIP</span>
            </h2>

            <p
              className="
                mt-4
                text-[13px]
                font-medium
                tracking-wide
                text-white/60
                sm:text-sm
              "
            >
              Instalação descomplicada para qualquer tela.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-[18px]
            "
          >
            {tutorials.map((tutorial) => (
              <button
                key={tutorial.title}
                type="button"
                onClick={() => setSelectedTutorial(tutorial)}
                className="
                  group
                  flex
                  h-[180px]
                  w-full
                  flex-col
                  items-center
                  justify-center
                  rounded-[22px]
                  border
                  border-white/[0.04]
                  bg-[#111111]
                  px-5
                  text-center
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/50
                  hover:bg-[#151515]
                  sm:h-[180px]
                  lg:h-[180px]
                "
              >
                {/* IMAGEM */}
                <div
                  className="
                    mb-3
                    flex
                    h-[68px]
                    w-[100px]
                    items-center
                    justify-center
                  "
                >
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="
                      max-h-[65px]
                      max-w-[90px]
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* NOME */}
                <h3
                  className="
                    text-[14px]
                    font-bold
                    leading-tight
                    text-white
                    sm:text-[15px]
                  "
                >
                  {tutorial.title}
                </h3>

                {/* DESCRIÇÃO */}
                <p
                  className="
                    mt-2
                    text-[11px]
                    font-medium
                    text-white/65
                    sm:text-xs
                  "
                >
                  {tutorial.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MODAL
      ===================================================== */}
      {selectedTutorial && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/80
            px-3
            py-4
            backdrop-blur-[2px]
            sm:px-5
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedTutorial(null);
            }
          }}
        >
          {/* CAIXA DO MODAL */}
          <div
            className="
              relative
              w-full
              max-w-[850px]
              overflow-hidden
              rounded-[9px]
              border
              border-[#D4AF37]
              bg-[#111111]
              shadow-[0_0_35px_rgba(212,175,55,0.08)]
            "
          >
            <div
              className="
                max-h-[calc(100vh-32px)]
                overflow-y-auto
                px-5
                py-7
                sm:px-7
                sm:py-8
                lg:px-[30px]
                lg:py-[30px]
              "
            >
              {/* TÍTULO DO MODAL */}
              <div className="pr-8">
                <h2
                  className="
                    text-[19px]
                    font-black
                    uppercase
                    leading-tight
                    tracking-wide
                    text-white
                    sm:text-[21px]
                    lg:text-[22px]
                  "
                >
                  INSTALAÇÃO EM {selectedTutorial.title.toUpperCase()}
                </h2>

                {/* LINHA */}
                <div className="mt-4 h-[2px] w-full bg-[#D4AF37]" />
              </div>

              {/* VÍDEO */}
              <div
                className="
                  mt-5
                  aspect-video
                  w-full
                  overflow-hidden
                  rounded-[8px]
                  border
                  border-[#D4AF37]
                  bg-black
                "
              >
                {selectedTutorial.videoId.startsWith("SEU_VIDEO_") ? (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <div
                        className="
                          mx-auto
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#D4AF37]
                          text-xl
                          text-[#D4AF37]
                        "
                      >
                        ▶
                      </div>

                      <p className="mt-4 text-xs text-white/60">
                        Vídeo do tutorial será exibido aqui.
                      </p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${selectedTutorial.videoId}`}
                    title={`Tutorial ${selectedTutorial.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>

              {/* PASSOS */}
              <div className="mt-5">
                <ol className="space-y-3">
                  {selectedTutorial.steps.map((step, index) => (
                    <li
                      key={`${selectedTutorial.title}-${index}`}
                      className="
                        flex
                        items-start
                        gap-2
                        text-[11px]
                        leading-5
                        text-white/60
                        sm:text-xs
                      "
                    >
                      <span className="shrink-0 text-[#D4AF37]">
                        {index + 1}.
                      </span>

                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* FECHAR */}
              <button
                type="button"
                onClick={() => setSelectedTutorial(null)}
                className="
                  mt-7
                  flex
                  h-[48px]
                  w-full
                  items-center
                  justify-center
                  border
                  border-[#D4AF37]
                  bg-transparent
                  text-[12px]
                  font-black
                  uppercase
                  tracking-wide
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#D4AF37]
                  hover:text-black
                "
              >
                FECHAR
              </button>
            </div>

            {/* X */}
            <button
              type="button"
              onClick={() => setSelectedTutorial(null)}
              aria-label="Fechar"
              className="
                absolute
                right-4
                top-3
                z-10
                text-2xl
                leading-none
                text-white/60
                transition-colors
                hover:text-[#D4AF37]
              "
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
const dicas = [
  {
    title: "Conexão via Cabo",
    description:
      "Sempre que possível, use cabo Ethernet no seu TV Box. O Wi-Fi pode sofrer oscilações que afetam a estabilidade dos canais.",
  },
  {
    title: "Vincular Conta",
    description:
      "Vincule um e-mail em Perfil > Vincular. Isso ajuda a preservar seu acesso caso troque de aparelho ou precise reinstalar.",
  },
];

export function DicasPerformance() {
  return (
    <section
      id="dicas"
      className="
        relative
        w-full
        overflow-hidden
        bg-transparent
        px-4
        py-14
        sm:px-6
        sm:py-16
        lg:px-8
        lg:py-20
      "
    >
      {/* ESCURECIMENTO NAS EXTREMIDADES */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_55%,#000_100%)]
        "
      />

      {/* CONTEÚDO */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1200px]
        "
      >
        {/* TÍTULO */}
        <div className="mb-10 text-center sm:mb-12">
          <h2
            className="
              text-3xl
              font-black
              uppercase
              tracking-[0.08em]
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-[42px]
            "
          >
            DICAS DE{" "}
            <span className="text-[#D4AF37]">
              PERFORMANCE
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            md:gap-6
          "
        >
          {dicas.map((dica) => (
            <article
              key={dica.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-[#D4AF37]/30
                border-l-4
                border-l-[#D4AF37]
                bg-[#0d0d0d]
                px-6
                py-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D4AF37]/60
                hover:bg-[#111111]
                sm:px-7
                sm:py-7
              "
            >
              {/* BRILHO INTERNO */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_0%_50%,rgba(212,175,55,0.10),transparent_55%)]
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* TÍTULO DO CARD */}
              <h3
                className="
                  relative
                  z-10
                  text-lg
                  font-bold
                  tracking-wide
                  text-[#D4AF37]
                  sm:text-xl
                "
              >
                {dica.title}
              </h3>

              {/* DESCRIÇÃO */}
              <p
                className="
                  relative
                  z-10
                  mt-3
                  max-w-[620px]
                  text-sm
                  font-medium
                  leading-relaxed
                  text-zinc-400
                  sm:text-base
                "
              >
                {dica.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
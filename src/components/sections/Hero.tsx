export function Hero() {
  return (
    <section
      id="topo"
      className="
        relative
        w-full
        overflow-hidden
        border-b
        border-[#D4AF37]/40
        pt-[72px]
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1240px]
          grid-cols-1
          items-center
          gap-7
          px-5
          py-9
          sm:px-6
          sm:py-12
          lg:min-h-[475px]
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-4
          lg:px-8
          lg:py-8
          xl:px-10
        "
      >
        {/* =========================================================
            TEXTO
        ========================================================= */}
        <div
          className="
            relative
            z-10
            flex
            min-w-0
            w-full
            flex-col
            justify-center
          "
        >
          {/* =======================================================
              TÍTULO
          ======================================================= */}
          <h1
            className="
              m-0
              block
              w-full
              max-w-full
              overflow-visible
              uppercase
              font-black
              leading-[0.94]
              tracking-[-0.045em]
              text-[clamp(2.35rem,10.2vw,3rem)]
              sm:text-[clamp(3rem,8vw,4.3rem)]
              md:text-[clamp(3.3rem,7vw,4.7rem)]
              lg:max-w-[680px]
              lg:text-[clamp(3.7rem,5vw,5.1rem)]
            "
          >
            <span className="block whitespace-nowrap text-white">
              RECARGA{" "}
              <span className="text-[#D4AF37]">
                VIP
              </span>
            </span>

            <span className="block whitespace-nowrap text-[#D4AF37]">
              UNITV
            </span>

            <span className="block whitespace-nowrap text-white">
              INSTANTÂNEA.
            </span>
          </h1>

          {/* =======================================================
              DESCRIÇÃO
          ======================================================= */}
          <div
            className="
              mt-6
              flex
              w-full
              max-w-[590px]
              gap-3
              sm:mt-7
              sm:gap-4
            "
          >
            <div
              className="
                w-[4px]
                shrink-0
                bg-[#D4AF37]
              "
            />

            <p
              className="
                m-0
                min-w-0
                text-[13px]
                leading-5
                text-zinc-400
                sm:text-sm
                sm:leading-6
                lg:text-[15px]
                lg:leading-6
              "
            >
              Ative seu entretenimento agora. Sistema automatizado
              com entrega imediata, tutoriais rápidos e suporte via
              WhatsApp.
            </p>
          </div>

          {/* =========================================================
              BOTÕES
          ========================================================= */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:mt-8
              sm:flex-row
              sm:items-center
              sm:gap-4
            "
          >
            {/* ATIVAR AGORA */}
            <a
              href="#planos"
              className="
                relative
                flex
                h-12
                min-w-[170px]
                items-center
                justify-center
                overflow-hidden
                bg-[#D4AF37]
                px-6
                text-center
                text-[11px]
                font-black
                tracking-[0.08em]
                text-black
                transition-all
                duration-200
                hover:bg-[#E8C95A]
                hover:shadow-[0_0_22px_rgba(212,175,55,0.25)]
                active:scale-[0.98]
                sm:w-auto
              "
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 78%, 91% 100%, 0 100%)",
              }}
            >
              ATIVAR AGORA
            </a>

            {/* COMO INSTALAR */}
            <a
              href="#tutoriais"
              className="
                flex
                h-12
                min-w-[170px]
                items-center
                justify-center
                border
                border-[#D4AF37]
                bg-transparent
                px-6
                text-center
                text-[11px]
                font-black
                tracking-[0.08em]
                text-white
                transition-all
                duration-200
                hover:bg-[#D4AF37]
                hover:text-black
                active:scale-[0.98]
                sm:w-auto
              "
            >
              COMO INSTALAR
            </a>
          </div>
        </div>

        {/* =========================================================
            IMAGEM DOS DISPOSITIVOS
        ========================================================= */}
        <div
          className="
            relative
            flex
            w-full
            min-w-0
            items-center
            justify-center
            lg:justify-end
          "
        >
          <div
            className="
              relative
              w-full
              max-w-[330px]
              sm:max-w-[400px]
              md:max-w-[460px]
              lg:-mr-2
              lg:max-w-[500px]
              xl:-mr-6
              xl:max-w-[530px]
            "
          >
            {/* BRILHO DOURADO */}
            <div
              className="
                pointer-events-none
                absolute
                inset-[15%]
                rounded-full
                bg-[#D4AF37]/10
                blur-3xl
              "
            />

            <img
              src="/images/unitv-devices.png"
              alt="Dispositivos com UniTV"
              className="
                tv-floating
                relative
                z-10
                mx-auto
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
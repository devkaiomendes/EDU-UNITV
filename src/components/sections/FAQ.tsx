import { useState } from "react";

const perguntas = [
  {
    question: "Como recebo o meu código?",
    answer:
      "O código é enviado automaticamente para o seu e-mail assim que o PIX é confirmado pelo sistema.",
  },
  {
    question: "Funciona em quantas telas?",
    answer:
      "Você pode assistir em até 2 telas simultâneas com a mesma conta VIP vinculada.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
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
      {/* ESCURECIMENTO */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.22)_55%,#000_100%)]
        "
      />

      {/* CONTEÚDO */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[800px]
        "
      >
        {/* TÍTULO */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
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
            DÚVIDAS{" "}
            <span className="text-[#D4AF37]">
              FREQUENTES
            </span>
          </h2>
        </div>

        {/* PERGUNTAS */}
        <div className="space-y-3 sm:space-y-4">
          {perguntas.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`
                  overflow-hidden
                  rounded-[10px]
                  border
                  bg-[#0d0d0d]
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-[#D4AF37]/70"
                      : "border-[#D4AF37]/30 hover:border-[#D4AF37]/70"
                  }
                `}
              >
                {/* PERGUNTA */}
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    min-h-[62px]
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    gap-4
                    px-4
                    py-4
                    text-left
                    transition-colors
                    duration-200
                    hover:bg-[#111111]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#D4AF37]/60
                    sm:min-h-[64px]
                    sm:px-5
                    sm:py-4
                    md:px-6
                  "
                >
                  <span
                    className="
                      text-sm
                      font-medium
                      tracking-wide
                      text-white
                      sm:text-base
                      md:text-[17px]
                    "
                  >
                    {item.question}
                  </span>

                  {/* + / - */}
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      min-w-5
                      items-center
                      justify-center
                      text-xl
                      font-light
                      leading-none
                      text-[#D4AF37]
                      sm:h-6
                      sm:w-6
                      sm:min-w-6
                    "
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* RESPOSTA */}
                <div
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="
                        border-t
                        border-[#D4AF37]/30
                        px-4
                        pb-5
                        pt-4
                        sm:px-5
                        sm:pb-6
                        md:px-6
                      "
                    >
                      <p
                        className="
                          text-xs
                          font-medium
                          leading-relaxed
                          text-zinc-400
                          sm:text-sm
                          md:text-base
                        "
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
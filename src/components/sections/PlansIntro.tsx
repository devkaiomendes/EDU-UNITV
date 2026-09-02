import { useEffect, useState } from "react";

type Plan = {
  name: string;
  price: string;
  cents: string;
  description: string;
  popular: boolean;
};

const plans: Plan[] = [
  {
    name: "Mensal",
    price: "24",
    cents: ",99",
    description: "",
    popular: false,
  },
  {
    name: "Trimestral",
    price: "69",
    cents: ",99",
    description: "ECONOMIA GARANTIDA",
    popular: true,
  },
  {
    name: "Semestral",
    price: "119",
    cents: ",99",
    description: "",
    popular: false,
  },
  {
    name: "Anual",
    price: "169",
    cents: ",99",
    description: "MELHOR CUSTO-BENEFÍCIO",
    popular: false,
  },
];

const benefits = [
  "2 telas conta vinculado",
  "Canais SD/HD/FHD",
  "Filmes e Séries atualizados",
  "Suporte técnico personalizado",
];

export function PlansIntro() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    if (!selectedPlan) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPlan(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedPlan]);

  return (
    <>
      <section
        id="planos"
        className="
          relative
          z-10
          w-full
          scroll-mt-20
          border-b
          border-[#D4AF37]/20
          py-14
          sm:py-16
          lg:py-20
          xl:py-24
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            px-4
            sm:px-6
            lg:px-8
            xl:px-10
          "
        >
          {/* TÍTULO */}
          <div className="mx-auto w-full max-w-2xl text-center">
            <h2
              className="
                uppercase
                text-[clamp(2.2rem,5vw,3.8rem)]
                font-black
                leading-none
                tracking-[-0.04em]
                text-white
              "
            >
              PLANOS{" "}
              <span className="text-[#D4AF37]">
                VIP
              </span>
            </h2>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-zinc-500
                sm:mt-4
                sm:text-base
              "
            >
              Ativação 24h via PIX automático
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              mt-9
              grid
              w-full
              grid-cols-1
              gap-5
              sm:mt-10
              sm:grid-cols-2
              sm:gap-5
              lg:mt-11
              lg:grid-cols-4
              lg:gap-4
              xl:gap-5
            "
          >
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`
                  relative
                  flex
                  min-h-[380px]
                  w-full
                  flex-col
                  overflow-visible
                  rounded-xl
                  border
                  bg-black/35
                  px-5
                  py-6
                  transition-all
                  duration-300
                  sm:min-h-[390px]
                  sm:px-5
                  sm:py-7
                  lg:min-h-[378px]
                  lg:px-5
                  lg:py-6
                  xl:min-h-[385px]
                  ${
                    plan.popular
                      ? `
                        border-[#D4AF37]
                        shadow-[0_0_30px_rgba(212,175,55,0.08)]
                      `
                      : `
                        border-zinc-800
                        hover:border-[#D4AF37]/60
                      `
                  }
                `}
              >
                {/* MAIS VENDIDO */}
                {plan.popular && (
                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      z-20
                      -translate-x-1/2
                      -translate-y-1/2
                      whitespace-nowrap
                      rounded-full
                      border
                      border-[#D4AF37]
                      bg-[#D4AF37]
                      px-4
                      py-1
                      text-[8px]
                      font-black
                      uppercase
                      tracking-wide
                      text-black
                      sm:text-[9px]
                    "
                  >
                    MAIS VENDIDO
                  </div>
                )}

                {/* NOME */}
                <h3
                  className="
                    text-[22px]
                    font-black
                    uppercase
                    leading-tight
                    tracking-tight
                    text-white
                    sm:text-[23px]
                    lg:text-[22px]
                  "
                >
                  {plan.name}
                </h3>

                {/* PREÇO */}
                <div
                  className="
                    mt-3
                    flex
                    items-end
                  "
                >
                  <span
                    className="
                      mb-1
                      mr-1.5
                      text-[10px]
                      font-black
                      text-[#D4AF37]
                      sm:text-xs
                    "
                  >
                    R$
                  </span>

                  <span
                    className="
                      text-[clamp(3.1rem,5vw,4rem)]
                      font-black
                      leading-[0.9]
                      tracking-[-0.06em]
                      text-[#D4AF37]
                    "
                  >
                    {plan.price}
                  </span>

                  <span
                    className="
                      mb-1
                      text-base
                      font-black
                      leading-none
                      text-zinc-200
                      sm:text-lg
                    "
                  >
                    {plan.cents}
                  </span>
                </div>

                {/* DESCRIÇÃO */}
                <div
                  className="
                    mt-3
                    min-h-[18px]
                    w-full
                  "
                >
                  {plan.description && (
                    <p
                      className="
                        text-[8px]
                        font-black
                        uppercase
                        leading-3
                        tracking-[0.08em]
                        text-[#D4AF37]
                        sm:text-[9px]
                      "
                    >
                      {plan.description}
                    </p>
                  )}
                </div>

                {/* BENEFÍCIOS */}
                <div
                  className="
                    mt-5
                    w-full
                    space-y-3.5
                  "
                >
                  {benefits.map((benefit, index) => (
                    <div
                      key={benefit}
                      className="w-full"
                    >
                      <div
                        className="
                          flex
                          w-full
                          items-start
                          gap-2
                        "
                      >
                        <span
                          className="
                            mt-[2px]
                            shrink-0
                            text-sm
                            font-black
                            leading-none
                            text-emerald-400
                          "
                        >
                          ✓
                        </span>

                        <span
                          className="
                            min-w-0
                            text-[12px]
                            leading-5
                            text-zinc-300
                            sm:text-[13px]
                          "
                        >
                          {benefit}
                        </span>
                      </div>

                      {index === 0 && (
                        <p
                          className="
                            ml-5
                            mt-1
                            text-[7px]
                            font-black
                            uppercase
                            leading-3
                            tracking-wide
                            text-[#D4AF37]
                            sm:text-[8px]
                          "
                        >
                          (OBRIGATÓRIO VINCULAR ANTES DO RESGATE)
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* EMPURRA O BOTÃO PARA BAIXO */}
                <div className="flex-1" />

                {/* BOTÃO */}
                <button
                  type="button"
                  onClick={() => setSelectedPlan(plan)}
                  className={`
                    mt-7
                    flex
                    min-h-[47px]
                    w-full
                    items-center
                    justify-center
                    px-4
                    py-3
                    text-center
                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.08em]
                    transition-all
                    duration-200
                    ${
                      plan.popular
                        ? `
                          bg-[#D4AF37]
                          text-black
                          shadow-[0_0_20px_rgba(212,175,55,0.12)]
                          hover:bg-[#E8C95A]
                        `
                        : `
                          border
                          border-[#D4AF37]/80
                          text-[#D4AF37]
                          hover:bg-[#D4AF37]
                          hover:text-black
                        `
                    }
                  `}
                >
                  {plan.popular ? "COMPRAR AGORA" : "COMPRAR"}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MODAL DE COMPRA */}
      {/* ========================================================= */}

      {selectedPlan && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/85
            px-4
            py-8
            backdrop-blur-sm
            sm:px-6
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedPlan(null);
            }
          }}
        >
          <div
            className="
              relative
              w-full
              max-w-[550px]
              overflow-hidden
              rounded-lg
              border
              border-[#D4AF37]
              bg-[#090909]
              shadow-[0_0_60px_rgba(212,175,55,0.10)]
            "
          >
            {/* GRID INTERNO */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-20
                [background-image:linear-gradient(rgba(212,175,55,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.35)_1px,transparent_1px)]
                [background-size:32px_32px]
              "
            />

            {/* CONTEÚDO */}
            <div
              className="
                relative
                z-10
                px-5
                py-6
                sm:px-7
                sm:py-7
              "
            >
              {/* CABEÇALHO */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                  border-b
                  border-[#D4AF37]
                  pb-4
                "
              >
                <div>
                  <h2
                    className="
                      text-xl
                      font-black
                      uppercase
                      leading-tight
                      tracking-tight
                      text-white
                      sm:text-2xl
                    "
                  >
                    DADOS DA RECARGA
                  </h2>

                  <p
                    className="
                      mt-2
                      text-xs
                      uppercase
                      tracking-wider
                      text-[#D4AF37]
                      sm:text-sm
                    "
                  >
                    Plano {selectedPlan.name}
                  </p>
                </div>

                {/* FECHAR */}
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  aria-label="Fechar"
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-[#D4AF37]/70
                    text-lg
                    text-[#D4AF37]
                    transition
                    hover:bg-[#D4AF37]
                    hover:text-black
                  "
                >
                  ×
                </button>
              </div>

              {/* PLANO ESCOLHIDO */}
              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  border
                  border-zinc-800
                  bg-black/50
                  px-4
                  py-4
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-wider
                      text-zinc-500
                    "
                  >
                    Plano selecionado
                  </p>

                  <p
                    className="
                      mt-1
                      text-base
                      font-black
                      uppercase
                      text-white
                    "
                  >
                    {selectedPlan.name}
                  </p>
                </div>

                <div className="text-right">
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      text-zinc-500
                    "
                  >
                    Valor
                  </p>

                  <p
                    className="
                      mt-1
                      text-2xl
                      font-black
                      leading-none
                      text-[#D4AF37]
                    "
                  >
                    R$ {selectedPlan.price}
                    <span className="text-sm">
                      {selectedPlan.cents}
                    </span>
                  </p>
                </div>
              </div>

              {/* FORMULÁRIO */}
              <div className="mt-5 space-y-4">
                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-black
                      uppercase
                      tracking-wider
                      text-[#D4AF37]
                    "
                  >
                    Nome completo
                  </label>

                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="
                      h-12
                      w-full
                      border
                      border-zinc-700
                      bg-zinc-900/70
                      px-4
                      text-sm
                      text-white
                      outline-none
                      transition
                      placeholder:text-zinc-600
                      focus:border-[#D4AF37]
                    "
                  />
                </div>

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-black
                      uppercase
                      tracking-wider
                      text-[#D4AF37]
                    "
                  >
                    CPF ou CNPJ
                  </label>

                  <input
                    type="text"
                    placeholder="000.000.000-00"
                    className="
                      h-12
                      w-full
                      border
                      border-zinc-700
                      bg-zinc-900/70
                      px-4
                      text-sm
                      text-white
                      outline-none
                      transition
                      placeholder:text-zinc-600
                      focus:border-[#D4AF37]
                    "
                  />
                </div>

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-black
                      uppercase
                      tracking-wider
                      text-[#D4AF37]
                    "
                  >
                    E-mail para recebimento
                  </label>

                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    className="
                      h-12
                      w-full
                      border
                      border-zinc-700
                      bg-zinc-900/70
                      px-4
                      text-sm
                      text-white
                      outline-none
                      transition
                      placeholder:text-zinc-600
                      focus:border-[#D4AF37]
                    "
                  />
                </div>

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-black
                      uppercase
                      tracking-wider
                      text-[#D4AF37]
                    "
                  >
                    WhatsApp para contato
                  </label>

                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="
                      h-12
                      w-full
                      border
                      border-zinc-700
                      bg-zinc-900/70
                      px-4
                      text-sm
                      text-white
                      outline-none
                      transition
                      placeholder:text-zinc-600
                      focus:border-[#D4AF37]
                    "
                  />

                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-4
                      text-zinc-500
                    "
                  >
                    Informe um WhatsApp válido para contato.
                  </p>
                </div>
              </div>

              {/* BOTÃO PIX */}
              <button
                type="button"
                className="
                  mt-7
                  flex
                  min-h-[49px]
                  w-full
                  items-center
                  justify-center
                  bg-[#D4AF37]
                  px-5
                  py-3
                  text-center
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.08em]
                  text-black
                  transition
                  hover:bg-[#E8C95A]
                "
              >
                GERAR PAGAMENTO PIX
              </button>

              {/* CANCELAR */}
              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                className="
                  mx-auto
                  mt-5
                  block
                  text-[10px]
                  font-black
                  uppercase
                  tracking-wider
                  text-zinc-500
                  transition
                  hover:text-white
                "
              >
                CANCELAR
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
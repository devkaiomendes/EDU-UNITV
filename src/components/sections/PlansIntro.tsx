import { useEffect, useState } from "react";

type Plan = {
  name: string;
  price: string;
  cents: string;
  description: string;
  popular: boolean;
  pixCode: string;
};

const plans: Plan[] = [
  {
    name: "Mensal",
    price: "24",
    cents: ",99",
    description: "",
    popular: false,
    pixCode:
      "00020101021226840014BR.GOV.BCB.PIX0136c2034448-a015-4d34-abbd-abe6aaf1a5310222Pagamento eduimportsev520400005303986540524.995802BR5925FABIO EDUARDO SOUSA DE OL6007FORMOSA62290525QRCCfloSw27UMsV9gx3DnshPg6304617F",
  },

  {
    name: "Trimestral",
    price: "69",
    cents: ",99",
    description: "ECONOMIA GARANTIDA",
    popular: true,
    pixCode:
      "00020101021226840014BR.GOV.BCB.PIX0136c2034448-a015-4d34-abbd-abe6aaf1a5310222Pagamento eduimportsev520400005303986540569.995802BR5925FABIO EDUARDO SOUSA DE OL6007FORMOSA62290525QRCCzAPC2uzWLUNmfq7VJeo0e6304770C",
  },

  {
    name: "Semestral",
    price: "119",
    cents: ",99",
    description: "",
    popular: false,
    pixCode:
      "00020101021226840014BR.GOV.BCB.PIX0136c2034448-a015-4d34-abbd-abe6aaf1a5310222Pagamento eduimportsev5204000053039865406119.995802BR5925FABIO EDUARDO SOUSA DE OL6007FORMOSA62290525QRCC9I4R8Fh1pQlWrBXfVoe2L6304E813",
  },

  {
    name: "Anual",
    price: "169",
    cents: ",99",
    description: "MELHOR CUSTO-BENEFÍCIO",
    popular: false,
    pixCode:
      "00020101021226840014BR.GOV.BCB.PIX0136c2034448-a015-4d34-abbd-abe6aaf1a5310222Pagamento eduimportsev5204000053039865406169.995802BR5925FABIO EDUARDO SOUSA DE OL6007FORMOSA62290525QRCCeTyZMmBLASAWk2YGNv21n6304D392",
  },
];

const benefits = [
  "2 telas conta vinculado",
  "Canais SD/HD/FHD",
  "Filmes e Séries atualizados",
  "Suporte técnico personalizado",
];

const WHATSAPP_NUMBER = "5561995827488";

function formatCPFOrCNPJ(value: string) {
  const numbers = value.replace(/\D/g, "");

  if (numbers.length <= 11) {
    return numbers
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  }

  return numbers
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2")
    .slice(0, 18);
}

function formatPhone(value: string) {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  if (numbers.length <= 2) {
    return numbers.length > 0 ? `(${numbers}` : "";
  }

  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }

  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
    7
  )}`;
}

export function PlansIntro() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [paymentOpen, setPaymentOpen] = useState(false);

  const [name, setName] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [phone, setPhone] = useState("");

  const [copied, setCopied] = useState(false);

  const closeAllModals = () => {
    setSelectedPlan(null);
    setPaymentOpen(false);
    setCopied(false);
  };

  const openPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setPaymentOpen(false);
    setCopied(false);
  };

  const cleanCpfCnpj = cpfCnpj.replace(/\D/g, "");
  const cleanPhone = phone.replace(/\D/g, "");

  const isFormValid =
    name.trim().length >= 2 &&
    (cleanCpfCnpj.length === 11 || cleanCpfCnpj.length === 14) &&
    (cleanPhone.length === 10 || cleanPhone.length === 11);

  const generatePix = () => {
    if (!selectedPlan || !isFormValid) {
      return;
    }

    setCopied(false);
    setPaymentOpen(true);
  };

  useEffect(() => {
    const modalOpen = selectedPlan !== null;

    if (!modalOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAllModals();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPlan]);

  /*
   * IMPORTANTE:
   *
   * O código PIX agora vem diretamente do plano selecionado.
   *
   * Portanto:
   *
   * Mensal     -> payload de R$ 24,99
   * Trimestral -> payload de R$ 69,99
   * Semestral  -> payload de R$ 119,99
   * Anual      -> payload de R$ 169,99
   *
   * O QR Code abaixo também usa exatamente este payload.
   */
  const pixCode = selectedPlan?.pixCode ?? "";

  /*
   * O QR Code é gerado a partir do PAYLOAD PIX REAL.
   *
   * Não estamos mais colocando um texto como:
   * "PIX EDU UNITV - Plano..."
   *
   * O conteúdo enviado ao gerador é o código PIX completo.
   */
  const qrCodeData = encodeURIComponent(pixCode);

  /*
   * Mensagem enviada automaticamente para o WhatsApp.
   */
  const whatsappMessage = selectedPlan
    ? `Olá, sou ${name.trim()}, CPF/CNPJ ${cpfCnpj}, Telefone ${phone}, fiz o pagamento e quero ativar meu plano.

Plano: ${selectedPlan.name}
Valor: R$ ${selectedPlan.price}${selectedPlan.cents}`
    : "";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  /*
   * Copiar o PAYLOAD PIX REAL.
   */
  const copyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      {/* =====================================================
          SEÇÃO DOS PLANOS
      ====================================================== */}

      <section
        id="planos"
        className="relative z-10 w-full scroll-mt-20 border-b border-[#D4AF37]/20 py-14 sm:py-16 lg:py-20 xl:py-24"
      >
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* TÍTULO */}

          <div className="mx-auto w-full max-w-2xl text-center">
            <h2 className="uppercase text-[clamp(2.2rem,5vw,3.8rem)] font-black leading-none tracking-[-0.04em] text-white">
              PLANOS <span className="text-[#D4AF37]">VIP</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-500 sm:mt-4 sm:text-base">
              Ativação 24h via PIX automático
            </p>
          </div>

          {/* CARDS */}

          <div className="mt-9 grid w-full grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-11 lg:grid-cols-4 lg:gap-4 xl:gap-5">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex min-h-[380px] w-full flex-col overflow-visible rounded-xl border bg-black/35 px-5 py-6 transition-all duration-300 sm:min-h-[390px] sm:px-5 sm:py-7 lg:min-h-[378px] lg:px-5 lg:py-6 xl:min-h-[385px] ${
                  plan.popular
                    ? "border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.08)]"
                    : "border-zinc-800 hover:border-[#D4AF37]/60"
                }`}
              >
                {/* MAIS VENDIDO */}

                {plan.popular && (
                  <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-[#D4AF37] bg-[#D4AF37] px-4 py-1 text-[8px] font-black uppercase tracking-wide text-black sm:text-[9px]">
                    MAIS VENDIDO
                  </div>
                )}

                {/* NOME */}

                <h3 className="text-[22px] font-black uppercase leading-tight tracking-tight text-white sm:text-[23px] lg:text-[22px]">
                  {plan.name}
                </h3>

                {/* PREÇO */}

                <div className="mt-3 flex items-end">
                  <span className="mb-1 mr-1.5 text-[10px] font-black text-[#D4AF37] sm:text-xs">
                    R$
                  </span>

                  <span className="text-[clamp(3.1rem,5vw,4rem)] font-black leading-[0.9] tracking-[-0.06em] text-[#D4AF37]">
                    {plan.price}
                  </span>

                  <span className="mb-1 text-base font-black leading-none text-zinc-200 sm:text-lg">
                    {plan.cents}
                  </span>
                </div>

                {/* DESCRIÇÃO */}

                <div className="mt-3 min-h-[18px] w-full">
                  {plan.description && (
                    <p className="text-[8px] font-black uppercase leading-3 tracking-[0.08em] text-[#D4AF37] sm:text-[9px]">
                      {plan.description}
                    </p>
                  )}
                </div>

                {/* BENEFÍCIOS */}

                <div className="mt-5 w-full space-y-3.5">
                  {benefits.map((benefit, index) => (
                    <div key={benefit} className="w-full">
                      <div className="flex w-full items-start gap-2">
                        <span className="mt-[2px] shrink-0 text-sm font-black leading-none text-emerald-400">
                          ✓
                        </span>

                        <span className="min-w-0 text-[12px] leading-5 text-zinc-300 sm:text-[13px]">
                          {benefit}
                        </span>
                      </div>

                      {index === 0 && (
                        <p className="ml-5 mt-1 text-[7px] font-black uppercase leading-3 tracking-wide text-[#D4AF37] sm:text-[8px]">
                          (OBRIGATÓRIO VINCULAR ANTES DO RESGATE)
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex-1" />

                {/* BOTÃO */}

                <button
                  type="button"
                  onClick={() => openPlan(plan)}
                  className={`mt-7 flex min-h-[47px] w-full items-center justify-center px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.08em] transition-all duration-200 ${
                    plan.popular
                      ? "bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.12)] hover:bg-[#E8C95A]"
                      : "border border-[#D4AF37]/80 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                  }`}
                >
                  {plan.popular ? "COMPRAR AGORA" : "COMPRAR"}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MODAL DOS DADOS
      ====================================================== */}

      {selectedPlan && !paymentOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/85 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeAllModals();
            }
          }}
        >
          <div className="relative w-full max-w-[550px] overflow-hidden rounded-lg border border-[#D4AF37] bg-[#090909] shadow-[0_0_60px_rgba(212,175,55,0.10)]">
            {/* GRID */}

            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(212,175,55,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.35)_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="relative z-10 px-5 py-5 sm:px-7 sm:py-6">
              {/* CABEÇALHO */}

              <div className="flex items-start justify-between gap-4 border-b border-[#D4AF37] pb-3">
                <div>
                  <h2 className="text-xl font-black uppercase leading-tight tracking-tight text-white sm:text-2xl">
                    DADOS DA RECARGA
                  </h2>

                  <p className="mt-1 text-xs uppercase tracking-wider text-[#D4AF37] sm:text-sm">
                    Plano {selectedPlan.name}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeAllModals}
                  aria-label="Fechar"
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D4AF37]/70 text-lg text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                >
                  ×
                </button>
              </div>

              {/* PLANO */}

              <div className="mt-4 flex items-center justify-between border border-zinc-800 bg-black/50 px-4 py-3">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-wider text-zinc-500">
                    Plano selecionado
                  </p>

                  <p className="mt-1 text-base font-black uppercase text-white">
                    {selectedPlan.name}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[9px] font-bold uppercase text-zinc-500">
                    Valor
                  </p>

                  <p className="mt-1 text-2xl font-black leading-none text-[#D4AF37]">
                    R$ {selectedPlan.price}
                    <span className="text-sm">{selectedPlan.cents}</span>
                  </p>
                </div>
              </div>

              {/* FORMULÁRIO */}

              <div className="mt-4 space-y-3">
                {/* NOME */}

                <div>
                  <label
                    htmlFor="nome-recarga"
                    className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-[#D4AF37]"
                  >
                    Nome completo *
                  </label>

                  <input
                    id="nome-recarga"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Seu nome completo"
                    autoComplete="name"
                    required
                    className="h-11 w-full border border-zinc-700 bg-zinc-900/70 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#D4AF37]"
                  />
                </div>

                {/* CPF / CNPJ */}

                <div>
                  <label
                    htmlFor="cpf-cnpj-recarga"
                    className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-[#D4AF37]"
                  >
                    CPF ou CNPJ *
                  </label>

                  <input
                    id="cpf-cnpj-recarga"
                    type="text"
                    value={cpfCnpj}
                    onChange={(event) =>
                      setCpfCnpj(formatCPFOrCNPJ(event.target.value))
                    }
                    placeholder="000.000.000-00"
                    inputMode="numeric"
                    autoComplete="off"
                    maxLength={18}
                    required
                    className="h-11 w-full border border-zinc-700 bg-zinc-900/70 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#D4AF37]"
                  />

                  {cpfCnpj.length > 0 &&
                    cleanCpfCnpj.length !== 11 &&
                    cleanCpfCnpj.length !== 14 && (
                      <p className="mt-1 text-[9px] text-[#D4AF37]">
                        Digite um CPF com 11 dígitos ou CNPJ com 14 dígitos.
                      </p>
                    )}
                </div>

                {/* WHATSAPP */}

                <div>
                  <label
                    htmlFor="whatsapp-recarga"
                    className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-[#D4AF37]"
                  >
                    WhatsApp para contato *
                  </label>

                  <input
                    id="whatsapp-recarga"
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(formatPhone(event.target.value))
                    }
                    placeholder="(99) 99999-9999"
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={15}
                    required
                    className="h-11 w-full border border-zinc-700 bg-zinc-900/70 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#D4AF37]"
                  />

                  {phone.length > 0 &&
                    cleanPhone.length !== 10 &&
                    cleanPhone.length !== 11 && (
                      <p className="mt-1 text-[9px] text-[#D4AF37]">
                        Digite um número de WhatsApp válido.
                      </p>
                    )}
                </div>
              </div>

              {/* BOTÃO PIX */}

              <button
                type="button"
                onClick={generatePix}
                disabled={!isFormValid}
                className={`mt-5 flex min-h-[46px] w-full items-center justify-center px-5 py-3 text-center text-[11px] font-black uppercase tracking-[0.08em] transition-all duration-200 ${
                  isFormValid
                    ? "cursor-pointer bg-[#D4AF37] text-black hover:bg-[#E8C95A]"
                    : "cursor-not-allowed bg-zinc-800 text-zinc-500"
                }`}
              >
                {isFormValid
                  ? "GERAR PAGAMENTO PIX"
                  : "PREENCHA TODOS OS DADOS"}
              </button>

              {/* CANCELAR */}

              <button
                type="button"
                onClick={closeAllModals}
                className="mx-auto mt-3 block text-[10px] font-black uppercase tracking-wider text-zinc-500 transition hover:text-white"
              >
                CANCELAR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          MODAL DO PIX
      ====================================================== */}

      {selectedPlan && paymentOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto bg-black/90 px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeAllModals();
            }
          }}
        >
          <div className="relative w-full max-w-[460px] overflow-hidden rounded-lg border border-[#D4AF37] bg-[#080808] shadow-[0_0_60px_rgba(212,175,55,0.14)]">
            {/* GRID */}

            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(212,175,55,0.30)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.30)_1px,transparent_1px)] [background-size:30px_30px]" />

            <div className="relative z-10 px-4 py-4 text-center sm:px-6 sm:py-5">
              {/* FECHAR */}

              <button
                type="button"
                onClick={closeAllModals}
                aria-label="Fechar"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-[#D4AF37]/70 bg-black/70 text-base text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black sm:right-4 sm:top-4"
              >
                ×
              </button>

              {/* TÍTULO */}

              <h2 className="pr-8 text-xl font-black uppercase leading-tight tracking-tight text-white sm:text-2xl">
                PAGAMENTO PIX
              </h2>

              <p className="mt-1 text-[11px] uppercase tracking-wider text-[#D4AF37] sm:text-xs">
                Plano {selectedPlan.name}
              </p>

              <div className="mx-auto mt-3 h-px w-full bg-[#D4AF37]" />

              {/* VALOR */}

              <p className="mt-3 text-[9px] font-black uppercase tracking-widest text-zinc-500">
                Valor da recarga
              </p>

              <p className="mt-1 text-2xl font-black leading-none text-[#D4AF37] sm:text-3xl">
                R$ {selectedPlan.price}
                <span className="text-base sm:text-lg">
                  {selectedPlan.cents}
                </span>
              </p>

              {/* =================================================
                  QR CODE
              ================================================== */}

              <div className="mx-auto mt-3 flex w-fit items-center justify-center rounded-lg border-4 border-white bg-white p-2">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrCodeData}`}
                  alt={`QR Code PIX do plano ${selectedPlan.name}`}
                  className="h-[175px] w-[175px] sm:h-[195px] sm:w-[195px]"
                />
              </div>

              <p className="mx-auto mt-2 max-w-[350px] text-[10px] leading-4 text-zinc-500 sm:text-[11px]">
                Aponte a câmera do seu celular para o QR Code e realize o
                pagamento.
              </p>

              {/* =================================================
                  CÓDIGO PIX COPIA E COLA
              ================================================== */}

              <div className="mt-3 text-left">
                <label
                  htmlFor="codigo-pix"
                  className="mb-1.5 block text-[9px] font-black uppercase tracking-widest text-[#D4AF37]"
                >
                  Código PIX
                </label>

                <div className="flex w-full overflow-hidden border border-zinc-700 bg-black/70">
                  <input
                    id="codigo-pix"
                    type="text"
                    value={pixCode}
                    readOnly
                    className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[9px] text-zinc-400 outline-none sm:text-[10px]"
                  />

                  <button
                    type="button"
                    onClick={copyPixCode}
                    className={`shrink-0 border-l border-[#D4AF37]/40 px-3 py-2.5 text-[9px] font-black uppercase tracking-wide transition sm:px-4 ${
                      copied
                        ? "bg-[#D4AF37] text-black"
                        : "text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                    }`}
                  >
                    {copied ? "COPIADO!" : "COPIAR"}
                  </button>
                </div>
              </div>

              {/* =================================================
                  CONFIRMAÇÃO
              ================================================== */}

              <div className="mt-4 border-t border-[#D4AF37]/30 pt-3">
                <h3 className="text-base font-black uppercase tracking-wide text-white sm:text-lg">
                  FEZ O PAGAMENTO?
                </h3>

                <p className="mx-auto mt-1.5 max-w-[360px] text-[10px] leading-4 text-zinc-500 sm:text-[11px]">
                  Depois de realizar o PIX, entre em contato para confirmar o
                  pagamento e ativar seu plano.
                </p>

                {/* WHATSAPP COM DADOS DO CLIENTE */}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex min-h-[44px] w-full items-center justify-center bg-[#D4AF37] px-4 py-2.5 text-center text-[9px] font-black uppercase leading-4 tracking-[0.04em] text-black transition hover:bg-[#E8C95A] sm:text-[10px]"
                >
                  ENTRE EM CONTATO PARA ATIVAR SEU PLANO
                </a>
              </div>

              {/* FECHAR */}

              <button
                type="button"
                onClick={closeAllModals}
                className="mx-auto mt-2 block text-[9px] font-black uppercase tracking-wider text-zinc-500 transition hover:text-white"
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
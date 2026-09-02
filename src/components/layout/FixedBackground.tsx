export function FixedBackground() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
        bg-black
      "
    >
      {/* 
        GRADE PRINCIPAL
        Fica concentrada na parte superior e vai desaparecendo
        gradualmente para baixo.
      */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[58vh]
          opacity-55

          [background-image:linear-gradient(rgba(212,175,55,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.22)_1px,transparent_1px)]

          [background-size:52px_52px]

          [mask-image:linear-gradient(to_bottom,black_0%,black_45%,rgba(0,0,0,0.75)_65%,transparent_100%)]

          [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_45%,rgba(0,0,0,0.75)_65%,transparent_100%)]

          sm:[background-size:54px_54px]
        "
      />

      {/*
        DEGRADÊ ESCURO SOBRE A GRADE.
        Mantém a parte inferior da página preta.
      */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[65vh]
          bg-[linear-gradient(to_bottom,transparent_0%,transparent_35%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0.75)_78%,#000_100%)]
        "
      />

      {/*
        ESCURECIMENTO LATERAL.
        A grade fica mais forte no centro/esquerda
        e mais discreta nas bordas.
      */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[60vh]
          bg-[radial-gradient(ellipse_at_top_center,transparent_0%,transparent_48%,rgba(0,0,0,0.45)_82%,#000_100%)]
        "
      />
    </div>
  );
}
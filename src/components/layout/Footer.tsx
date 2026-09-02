export function Footer() {
  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        border-t
        border-red-900/40
        bg-black
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
      "
    >
     

      {/* ESCURECIMENTO */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_55%,#000_100%)]
        "
      />

      {/* CONTEÚDO */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[40px]
          w-full
          max-w-[1200px]
          items-center
          justify-center
        "
      >
        <p
          className="
            text-center
            text-[9px]
            font-medium
            uppercase
            tracking-wide
            text-zinc-500
            sm:text-[10px]
            md:text-xs
          "
        >
          UNITV RECARGA VIP © 2026 - TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}
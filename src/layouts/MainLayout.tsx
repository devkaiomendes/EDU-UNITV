import type { ReactNode } from "react";

import { FixedBackground } from "../components/layout/FixedBackground";
import { Header } from "../components/layout/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-clip bg-black text-white">
      {/* Fundo global */}
      <FixedBackground />

      {/* Conteúdo acima do fundo */}
      <div className="relative z-10 w-full">
        {/* Header fixo */}
        <Header />

        {/* Espaço para o Header fixo */}
        <main className="relative w-full max-w-full pt-[72px]">
          {children}
        </main>
      </div>
    </div>
  );
}
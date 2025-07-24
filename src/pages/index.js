import Image from 'next/image';
import Link from 'next/link';
import { UserPlus, LogIn, Facebook, Instagram, Twitter } from 'lucide-react';
import HeroBanner from '@/components/Home/HeroBanner';

export default function IndexPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white">
      <header className="bg-[#78333E] text-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Logo.svg" alt="Logo EasyMeet" width={60} height={60} />
            <span className="font-bold text-lg text-white">EasyMeet</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="flex items-center gap-2 text-white font-semibold text-sm p-2 rounded-full hover:bg-white/10 transition-colors">
              <LogIn size={18} />
              <span className="hidden sm:inline">Entrar</span>
            </Link>
            <Link href="/register" className="bg-white text-red-700 font-bold text-sm py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
              Criar Conta
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section
          className="relative min-h-[calc(100vh-76px)] flex items-center justify-center text-center p-4
                     bg-slate-900/70 bg-[url('/landingPage.svg')] bg-cover bg-center bg-blend-multiply"
        >
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              A praticidade que você queria, na hora que você precisa.
            </h1>
            <p className="text-lg md:text-xl mt-4 text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
              Conectamos produtores e açougues aos seus clientes. Venda mais, gerencie melhor.
            </p>
            <div className="mt-8">
              <Link href="/home" className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-transform hover:scale-105">
                Explorar Produtos
              </Link>
            </div>
          </div>
        </section>

        <HeroBanner/>

        <section className="bg-[#78333E] text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Nossos Parceiros</h2>
            <div className="flex justify-center items-center gap-8 sm:gap-12 flex-wrap opacity-70">
              <p className="text-xl font-semibold italic">Açougue do Zé</p>
              <p className="text-xl font-semibold italic">Fazenda Sol</p>
              <p className="text-xl font-semibold italic">Frango & Cia</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#78333E] ">
        <div className="container mx-auto py-6 px-6 text-center text-gray-200">
          <p>&copy; {currentYear} EasyMeet. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
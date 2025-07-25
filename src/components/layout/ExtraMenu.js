"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { LayoutGrid, Compass, User, Store, Beef, ChefHat, CookingPot, BookOpen, Star, Heart, Ticket, LifeBuoy, Info, Phone, ChevronDown } from 'lucide-react';

const mobileOnlyLinks = [
  { name: 'Minha Conta', href: '/account', icon: User },
  { name: 'Meus Favoritos', href: '/favorites', icon: Heart },
  { name: 'INFORMAÇÕES', href: '/info', icon: Info },
  { name: 'CUPONS', href: '/coupons', icon: Ticket },
  { name: 'CATEGORIA', href: '/categories', icon: Beef },
  { name: 'SUPORTE', href: '/support', icon: LifeBuoy },
  { name: 'CONTATO', href: '/contact', icon: Phone },
];

const mainSections = [
  { name: 'Para você', href: '/home/para-voce', icon: User },
  { name: 'Criar açougue', href: '/store/create', icon: Store },
  { name: 'Tipos de carnes', href: '/home/tipos-de-carnes', icon: Beef },
  { name: 'Dicas de preparo', href: '/home/dicas', icon: ChefHat },
  { name: 'Cortes', href: '/home/cortes', icon: CookingPot },
  { name: 'Receitas', href: '/home/receitas', icon: BookOpen },
  { name: 'Recomendações', href: '/home/recomendacoes', icon: Star },
];

export default function ExtraMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsSupportOpen(false); 
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex p-2 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Abrir menu de seções"
      >
        <LayoutGrid size={24} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl z-50">
          <div className="p-2">
            <div className="md:hidden">
              {mobileOnlyLinks.map((link) => (
                <Link key={link.name} href={link.href} className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </Link>
              ))}
              <hr className="my-2 border-gray-200" />
            </div>

            {mainSections.map((link) => (
              <Link key={link.name} href={link.href} className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                <link.icon size={20} />
                <span>{link.name}</span>
              </Link>
            ))}
            
            <div className="md:hidden"> 
                <hr className="my-2 border-gray-200" />
                <button
                    onClick={() => setIsSupportOpen(!isSupportOpen)}
                    className="flex items-center justify-between w-full gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                    <div className="flex items-center gap-3">
                        <LifeBuoy size={20} />
                        <span>Suporte ao Cliente</span>
                    </div>
                    <ChevronDown size={16} className={`transition-transform ${isSupportOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSupportOpen && (
                    <div className="pl-6">
                        <Link href="/info" className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Informações</Link>
                        <Link href="/support" className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Suporte</Link>
                        <Link href="/contact" className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contato</Link>
                    </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
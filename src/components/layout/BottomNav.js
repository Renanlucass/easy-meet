// src/components/layout/BottomNav.js
import Link from 'next/link';
import { Home, Search, Store, User } from 'lucide-react';

const navItems = [
  { name: 'Início', href: '/home', icon: Home },
  { name: 'Buscar', href: '/search', icon: Search },
  { name: 'Meu Açougue', href: '/store/my', icon: Store },
  { name: 'Perfil', href: '/account', icon: User },
];

export default function BottomNav() {
  return (
    // Fixo na base e visível apenas em mobile (md:hidden)
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#78333E] text-white border-t border-white/10 shadow-lg">
      <div className="flex justify-around h-16">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center justify-center w-full text-xs hover:bg-white/10 transition-colors"
          >
            <item.icon size={24} />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
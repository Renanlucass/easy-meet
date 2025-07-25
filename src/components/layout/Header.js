"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';
import ExtraMenu from './ExtraMenu';

const navLinks = [
  { name: 'INFORMAÇÕES', href: '/info' },
  { name: 'CUPONS', href: '/coupons' },
  { name: 'CATEGORIA', href: '/categories' },
  { name: 'SUPORTE', href: '/support' },
  { name: 'CONTATO', href: '/contact' },
];

export default function Header() {
  return (
    <header className="bg-[#78333E] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Logo.svg" alt="Logo EasyMeet" width={80} height={80}/>
              <span className="hidden sm:block font-bold text-xl text-white">
                Easy<span className="opacity-80">Meet</span>
              </span>
            </Link>
          </div>

          <div className="flex justify-center px-2 sm:px-6 flex-1 sm:flex-auto">
            <form className="w-full max-w-sm">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-gray-300" size={20} />
                </div>
                <input type="text" placeholder="Pesquisar..." className="w-full bg-white/20 text-white placeholder:text-gray-300 border border-transparent rounded-md py-2 pl-10 pr-3 focus:outline-none focus:bg-white/30 focus:ring-2 focus:ring-white" />
              </div>
            </form>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/favorites" className="hidden md:flex p-2 rounded-full hover:bg-white/20 transition-colors">
              <Heart size={24} />
            </Link>
            <Link href="/cart" className="flex p-2 rounded-full hover:bg-white/20 transition-colors">
              <ShoppingCart size={24} />
            </Link>
            <Link href="/account" className="hidden md:flex p-2 rounded-full hover:bg-white/20 transition-colors">
              <User size={24} />
            </Link>
            <ExtraMenu />
          </div>
        </div>

        <nav className="hidden md:flex items-center justify-center h-10 border-t border-white/10">
          <ul className="flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
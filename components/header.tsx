"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Menu, X, Phone, Heart } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Каталог", href: "/catalog" },
    { name: "О нас", href: "/about" },
    { name: "Доставка", href: "/delivery" },
    { name: "Контакты", href: "/contacts" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-light tracking-wider text-white">JASMIN</div>
            <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-light"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Phone */}
            <div className="hidden md:flex items-center space-x-2 text-blue-200">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-light">+7 (3532) 123-456</span>
            </div>

            {/* Favorites */}
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-slate-800">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-slate-800 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-light py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 text-blue-200 py-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-light">+7 (3532) 123-456</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

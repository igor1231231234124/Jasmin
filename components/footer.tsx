"use client"

import Link from "next/link"
import { Phone, MapPin, Clock, Mail, Instagram, MessageCircle, Send, Heart } from "lucide-react"

export default function Footer() {
  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Каталог", href: "/catalog" },
    { name: "О нас", href: "/about" },
    { name: "Доставка", href: "/delivery" },
    { name: "Контакты", href: "/contacts" },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-400",
    },
    {
      icon: MessageCircle,
      name: "VK",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: Send,
      name: "Telegram",
      url: "#",
      color: "hover:text-blue-300",
    },
  ]

  return (
    <footer className="bg-gradient-to-r from-black via-slate-900 to-black border-t border-slate-700">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="text-3xl font-light tracking-wider text-white">JASMIN</div>
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600"></div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Премиальная флористика в Оренбурге. Создаём моменты безупречной красоты с 2025 года.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`bg-slate-800/50 p-3 rounded-full border border-slate-700 hover:border-blue-500 transition-all duration-300 text-gray-400 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Навигация</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-200 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+7 (3532) 123-456</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">ул. Транспортная, 8/1</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">info@jasmin-orenburg.ru</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Работаем 24/7</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Услуги</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>• Букеты на заказ</li>
              <li>• Доставка по городу</li>
              <li>• Свадебное оформление</li>
              <li>• Корпоративные заказы</li>
              <li>• Подписка на цветы</li>
              <li>• Флористические мастер-классы</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© 2025 JASMIN. Все права защищены.</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>Создано с любовью</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-200 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-200 transition-colors">
                Условия доставки
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

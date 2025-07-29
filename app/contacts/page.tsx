"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Mail, Instagram, MessageCircle, Send } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  useEffect(() => {
    setIsVisible(true);

    // Динамически загружаем скрипт Яндекс.Карт
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac347d5d4774c52b84d9ab5d0ad252be097f971b744637bdc045da1e9a73c9fb1&width=100%&height=553&lang=ru_RU&scroll=true";
    script.async = true;

    document.getElementById("yandex-map-container")?.appendChild(script);

    return () => {
      // Очистка скрипта при размонтировании
      document.getElementById("yandex-map-container")?.removeChild(script);
    };
  }, []);

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", phone: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (3532) 123-456",
      description: "Круглосуточно, без выходных",
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "г. Оренбург, ул. Транспортная, 8/1",
      description: "Наша мастерская и магазин",
    },
    {
      icon: Clock,
      title: "Режим работы",
      value: "24 часа в сутки",
      description: "7 дней в неделю",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@jasmin-orenburg.ru",
      description: "Ответим в течение часа",
    },
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
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Subtle floral background pattern */}
      <div className="relative inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 border border-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-blue-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 border border-blue-200 rounded-full animate-pulse delay-700"></div>
      </div>

      <Header />

      <div className="pt-24 pb-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-light mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent">
                Контакты
              </h1>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Свяжитесь с нами любым удобным способом. Мы всегда рады помочь вам создать идеальный букет
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl font-light mb-8 text-white">Магазин цветов «Jasmin»</h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-slate-800/40 to-black/40 border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-600/20 p-3 rounded-full">
                          <info.icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-white mb-1">{info.title}</h3>
                          <p className="text-blue-200 font-medium mb-1">{info.value}</p>
                          <p className="text-gray-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Delivery Info */}
              <Card className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-4">Доставка</h3>
                  <div className="space-y-2 text-blue-200">
                    <p>• По всему Оренбургу — 350₽</p>
                    <p>• Время доставки: от 1 часа</p>
                    <p>• Возможность выбрать точное время</p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-medium text-white mb-4">Мы в социальных сетях</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`bg-slate-800/50 p-3 rounded-full border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-110 text-gray-400 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-black/50 border-slate-700">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-light mb-6 text-white">Обратная связь</h2>
                  <p className="text-gray-300 mb-8">Оставьте сообщение, и мы свяжемся с вами в ближайшее время</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Ваше имя *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Введите ваше имя"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Телефон *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Сообщение *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 resize-none"
                        placeholder="Расскажите, чем мы можем помочь..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Отправить сообщение
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div
      className={`transition-all duration-1000 delay-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Card className="bg-gradient-to-br from-slate-800/40 to-black/40 border-slate-700">
        <CardContent className="p-8">
          <h2 className="text-3xl font-light mb-6 text-white text-center">Как нас найти</h2>
          <div className="relative h-96 rounded-lg overflow-hidden bg-slate-800">
            {/* Здесь контейнер для карты */}
            <div id="yandex-map-container" className="w-full h-full"></div>

            {/* Map overlay with address */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-slate-600">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">Магазин цветов «Jasmin»</p>
                  <p className="text-gray-300 text-sm">ул. Транспортная, 8/1</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">Готовы сделать заказ?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Позвоните нам или оформите заказ онлайн — мы создадим для вас идеальный букет
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Позвонить сейчас
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                Перейти в каталог
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

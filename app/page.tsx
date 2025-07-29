"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, ArrowRight, Heart, Gift, Award, Truck, Shield } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function JasminFlowerShop() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const popularBouquets = [
    {
      id: 1,
      name: "Элегантная классика",
      price: "3,500₽",
      description: "Изысканные белые розы с эвкалиптом",
      image: "/luxury-white-roses.png",
    },
    {
      id: 2,
      name: "Королевский шарм",
      price: "4,200₽",
      description: "Премиальные пионы в бархатной упаковке",
      image: "/luxury-peonies-royal-packaging.png",
    },
    {
      id: 3,
      name: "Ночная магия",
      price: "3,800₽",
      description: "Темные розы с золотыми акцентами",
      image: "/dark-roses-gold-bouquet.png",
    },
    {
      id: 4,
      name: "Утренняя свежесть",
      price: "2,900₽",
      description: "Нежные тюльпаны с зеленью",
      image: "/fresh-tulips-greenery-morning-bouquet.png",
    },
  ]

  const advantages = [
    {
      icon: Award,
      title: "Премиальное качество",
      description: "Только свежие цветы от лучших поставщиков",
    },
    {
      icon: Clock,
      title: "Работаем 24/7",
      description: "Круглосуточный прием заказов без выходных",
    },
    {
      icon: Truck,
      title: "Быстрая доставка",
      description: "От 1 часа по всему Оренбургу за 350₽",
    },
    {
      icon: Shield,
      title: "Гарантия свежести",
      description: "Заменим букет, если он не соответствует ожиданиям",
    },
  ]

  const occasions = [
    {
      title: "День рождения",
      description: "Яркие и праздничные композиции",
      image: "/birthday-bouquet.png",
    },
    {
      title: "Свадьба",
      description: "Элегантные букеты для особенного дня",
      image: "/wedding-bouquet.png",
    },
    {
      title: "Романтика",
      description: "Нежные композиции для выражения чувств",
      image: "/romantic-bouquet.png",
    },
    {
      title: "Корпоративные подарки",
      description: "Стильные букеты для деловых мероприятий",
      image: "/corporate-bouquet.png",
    },
  ]

  const stats = [
    { number: "4+", label: "года работы" },
    { number: "5000+", label: "довольных клиентов" },
    { number: "24/7", label: "часов в сутки" },
    { number: "350₽", label: "стоимость доставки" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-20 w-32 h-32 border border-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 border border-blue-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-500 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div
            className={`transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-7xl md:text-8xl font-light tracking-wider mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                JASMIN
              </h1>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl font-light text-blue-100 tracking-wide">
                Премиальная флористика в Оренбурге
              </p>
            </div>

            {/* Hero Content */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                Создаём моменты
                <span className="block text-blue-200 italic">безупречной красоты</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Каждый букет — это произведение искусства, созданное с любовью и вниманием к деталям
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
              >
                <Gift className="mr-2 h-5 w-5" />
                Заказать букет
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Обратная связь
              </Button>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-blue-200">
                <Clock className="h-6 w-6" />
                <span className="text-lg">Работаем 24/7</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-blue-200">
                <MapPin className="h-6 w-6" />
                <span className="text-lg">ул. Транспортная, 8/1</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-blue-200">
                <ArrowRight className="h-6 w-6" />
                <span className="text-lg">Доставка 350₽</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-slate-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl md:text-5xl font-light text-blue-200 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Почему выбирают нас
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-slate-800/30 to-black/30 border-slate-700 hover:border-blue-500 transition-all duration-700 transform hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <advantage.icon className="h-12 w-12 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-xl font-medium mb-4 text-white">{advantage.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Bouquets Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Популярные букеты
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Наши мастера создают уникальные композиции, которые покоряют сердца
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularBouquets.map((bouquet, index) => (
              <Card
                key={bouquet.id}
                className={`bg-gradient-to-br from-slate-800/50 to-blue-900/30 border-slate-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveCard(bouquet.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={bouquet.image || "/placeholder.svg"}
                      alt={bouquet.name}
                      width={300}
                      height={400}
                      className={`w-full h-64 object-cover transition-transform duration-700 ${
                        activeCard === bouquet.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Heart
                        className={`h-6 w-6 transition-colors duration-300 ${
                          activeCard === bouquet.id ? "text-red-400 fill-current" : "text-white"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-white">{bouquet.name}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{bouquet.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-light text-blue-200">{bouquet.price}</span>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 transition-all duration-300"
                      >
                        Заказать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">Букеты для любого повода</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              От романтических свиданий до корпоративных мероприятий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-slate-800/40 to-black/40 border-slate-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={occasion.image || "/placeholder.svg?height=200&width=300&query=" + occasion.title}
                      alt={occasion.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2 text-white">{occasion.title}</h3>
                    <p className="text-gray-400 text-sm">{occasion.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-black/90 to-slate-900/90 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">Свяжитесь с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 text-blue-200">
                <Phone className="h-5 w-5" />
                <span>+7 (3532) 123-456</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-blue-200">
                <MapPin className="h-5 w-5" />
                <span>г. Оренбург, ул. Транспортная, 8/1</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 text-blue-200">
                <Clock className="h-5 w-5" />
                <span>Работаем круглосуточно</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-blue-200">
                <ArrowRight className="h-5 w-5" />
                <span>Доставка по Оренбургу — 350₽</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

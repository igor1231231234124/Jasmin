"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Clock, Award, Flower, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: "Анна Петрова",
      role: "Главный флорист",
      experience: "8 лет опыта",
      image: "/team-anna-florist.png",
    },
    {
      name: "Мария Сидорова",
      role: "Дизайнер букетов",
      experience: "5 лет опыта",
      image: "/team-maria-designer.png",
    },
    {
      name: "Елена Козлова",
      role: "Менеджер по работе с клиентами",
      experience: "3 года опыта",
      image: "/team-elena-manager.png",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Цветы с душой",
      description: "Каждый букет создается с любовью и вниманием к деталям",
    },
    {
      icon: Award,
      title: "Доступная премиальность",
      description: "Высокое качество по разумным ценам для каждого клиента",
    },
    {
      icon: Clock,
      title: "Всегда рядом",
      description: "Работаем круглосуточно, чтобы быть с вами в важные моменты",
    },
    {
      icon: Flower,
      title: "Свежесть гарантирована",
      description: "Только свежие цветы от проверенных поставщиков",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 pt-32">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent">
              О нас
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              История о том, как мы создаём моменты красоты и радости в Оренбурге
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1500 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h2 className="text-4xl font-light mb-8 text-white">Наша история</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Цветочный магазин <span className="text-blue-200 font-medium">JASMIN</span> открылся в 2020 году с
                  простой, но важной миссией — делать каждый день особенным через красоту живых цветов.
                </p>
                <p>
                  Мы верим, что премиальная флористика должна быть доступной каждому. Наша команда профессиональных
                  флористов создаёт уникальные композиции, которые передают ваши чувства и эмоции.
                </p>
                <p>
                  За четыре года работы мы стали частью важных моментов в жизни тысяч оренбуржцев — от первых свиданий
                  до золотых свадеб, от рождения детей до юбилеев.
                </p>
              </div>
            </div>
            <div
              className={`transition-all duration-1500 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <Image
                src="/florist-workshop-premium.png"
                alt="Мастерская флориста"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">Наши ценности</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-slate-800/30 to-black/30 border-slate-700 hover:border-blue-500 transition-all duration-700 transform hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <value.icon className="h-12 w-12 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-xl font-medium mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">Наша команда</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Профессиональные флористы с многолетним опытом и безграничной любовью к своему делу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-slate-800/40 to-black/40 border-slate-700 hover:border-blue-500 transition-all duration-700 transform hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 300}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={member.image || "/placeholder.svg?height=300&width=300&query=professional florist portrait"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium mb-2 text-white">{member.name}</h3>
                    <p className="text-blue-200 mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-black/80 to-slate-900/80">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1500 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <Image
                src="/flower-workshop-process.png"
                alt="Процесс создания букета"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div
              className={`transition-all duration-1500 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <h2 className="text-4xl font-light mb-8 text-white">Наша мастерская</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  В нашей мастерской на улице Транспортная, 8/1 каждый день рождаются уникальные цветочные композиции.
                  Мы работаем только со свежими цветами от проверенных поставщиков.
                </p>
                <p>
                  Современное оборудование и профессиональные инструменты позволяют нам создавать букеты любой сложности
                  — от классических роз до авторских композиций.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center space-x-2 text-blue-200">
                    <MapPin className="h-5 w-5" />
                    <span>ул. Транспортная, 8/1</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-200">
                    <Clock className="h-5 w-5" />
                    <span>24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">Готовы создать что-то прекрасное?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы поможем выбрать идеальный букет для вашего особенного момента
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Заказать букет
            </Button>
            <Link href="/delivery">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                Узнать о доставке
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Truck, Phone, Calendar, CheckCircle, Timer } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DeliveryPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const deliveryFeatures = [
    {
      icon: Clock,
      title: "Круглосуточно",
      description: "Принимаем заказы 24/7, без выходных и праздников",
      highlight: "24/7",
    },
    {
      icon: Timer,
      title: "Быстрая доставка",
      description: "От 1 часа с момента оформления заказа",
      highlight: "от 1 часа",
    },
    {
      icon: MapPin,
      title: "Вся территория города",
      description: "Доставляем по всему Оренбургу без исключений",
      highlight: "весь город",
    },
    {
      icon: Calendar,
      title: "Точное время",
      description: "Возможность выбрать удобное время доставки",
      highlight: "к нужному времени",
    },
  ]

  const deliverySteps = [
    {
      step: "01",
      title: "Оформление заказа",
      description: "Выберите букет и укажите адрес доставки",
    },
    {
      step: "02",
      title: "Подтверждение",
      description: "Мы свяжемся с вами для уточнения деталей",
    },
    {
      step: "03",
      title: "Создание букета",
      description: "Наши флористы создают ваш букет с любовью",
    },
    {
      step: "04",
      title: "Доставка",
      description: "Курьер доставит букет точно в срок",
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
              Доставка
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Быстро, надёжно и с заботой доставляем красоту прямо к вашей двери
            </p>
          </div>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div
              className={`transition-all duration-1500 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-8 border border-blue-500/30">
                <Truck className="h-16 w-16 text-blue-400 mb-6" />
                <h2 className="text-4xl font-light mb-6 text-white">Стоимость доставки</h2>
                <div className="text-6xl font-light text-blue-200 mb-4">350₽</div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Фиксированная стоимость доставки по всему Оренбургу. Никаких доплат за удалённые районы или время
                  доставки.
                </p>
              </div>
            </div>
            <div
              className={`transition-all duration-1500 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-8 w-8 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Вся территория Оренбурга</h3>
                    <p className="text-gray-300">Доставляем во все районы города без исключений</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-8 w-8 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Работаем круглосуточно</h3>
                    <p className="text-gray-300">Принимаем и выполняем заказы 24 часа в сутки, 7 дней в неделю</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-8 w-8 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Быстрая доставка</h3>
                    <p className="text-gray-300">От 1 часа с момента оформления заказа</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">Преимущества нашей доставки</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-slate-800/30 to-black/30 border-slate-700 hover:border-blue-500 transition-all duration-700 transform hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <feature.icon className="h-12 w-12 text-blue-400 mx-auto mb-6" />
                  <div className="text-2xl font-light text-blue-200 mb-2">{feature.highlight}</div>
                  <h3 className="text-xl font-medium mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">Как происходит доставка</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Простой и понятный процесс от заказа до получения букета
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySteps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <span className="text-2xl font-light text-white">{step.step}</span>
                  </div>
                  {index < deliverySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-blue-400 to-transparent transform translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-black/80 to-slate-900/80">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-6 text-white">Остались вопросы?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом, и мы ответим на все ваши вопросы о доставке
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/40 to-black/40 border-slate-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2 text-white">Телефон</h3>
                <p className="text-blue-200 text-lg">+7 (3532) 123-456</p>
                <p className="text-gray-400 text-sm mt-2">Круглосуточно</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/40 to-black/40 border-slate-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2 text-white">Адрес</h3>
                <p className="text-blue-200">ул. Транспортная, 8/1</p>
                <p className="text-gray-400 text-sm mt-2">г. Оренбург</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/40 to-black/40 border-slate-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2 text-white">Режим работы</h3>
                <p className="text-blue-200">24 часа в сутки</p>
                <p className="text-gray-400 text-sm mt-2">7 дней в неделю</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">Готовы оформить заказ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Выберите букет и мы доставим его быстро и с заботой
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/catalog">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Выбрать букет
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                Узнать о нас больше
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

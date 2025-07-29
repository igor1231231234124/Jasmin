"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Truck, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  description: string
}

export default function CartPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Элегантная классика",
      price: 3500,
      quantity: 1,
      image: "/luxury-white-roses.png",
      description: "Изысканные белые розы с эвкалиптом",
    },
    {
      id: 2,
      name: "Королевский шарм",
      price: 4200,
      quantity: 2,
      image: "/luxury-peonies-royal-packaging.png",
      description: "Премиальные пионы в бархатной упаковке",
    },
  ])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = 350
  const total = subtotal + deliveryFee

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + "₽"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white">
      <Header />

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-light mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Корзина
                </h1>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>
              <Link href="/catalog">
                <Button
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-full transition-all duration-300 bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Назад в каталог
                </Button>
              </Link>
            </div>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div
              className={`text-center py-20 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <ShoppingBag className="h-24 w-24 text-gray-600 mx-auto mb-6" />
              <h2 className="text-3xl font-light mb-4 text-gray-400">Корзина пуста</h2>
              <p className="text-xl text-gray-500 mb-8">Добавьте букеты, чтобы оформить заказ</p>
              <Link href="/catalog">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Перейти в каталог
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className={`bg-gradient-to-br from-slate-800/40 to-black/40 border-slate-700 hover:border-blue-500 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Image */}
                        <div className="relative w-full md:w-32 h-48 md:h-32 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="text-xl font-medium text-white mb-2">{item.name}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-3">
                              <span className="text-gray-400 text-sm">Количество:</span>
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 w-8 p-0 border-slate-600 text-gray-300 hover:bg-slate-700 bg-transparent"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center text-white font-medium">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 w-8 p-0 border-slate-600 text-gray-300 hover:bg-slate-700 bg-transparent"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            {/* Price and Remove */}
                            <div className="flex items-center justify-between sm:justify-end space-x-4">
                              <div className="text-right">
                                <div className="text-2xl font-light text-blue-200">
                                  {formatPrice(item.price * item.quantity)}
                                </div>
                                <div className="text-sm text-gray-400">{formatPrice(item.price)} за шт.</div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-400 hover:text-red-300 hover:bg-red-900/20 p-2"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-5 w-5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card
                  className={`bg-gradient-to-br from-slate-800/50 to-black/50 border-slate-700 sticky top-28 transition-all duration-1000 delay-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                >
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-light mb-6 text-white">Итого</h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">
                          Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} шт.)
                        </span>
                        <span className="text-white font-medium">{formatPrice(subtotal)}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Truck className="h-4 w-4 text-blue-400" />
                          <span className="text-gray-400">Доставка по Оренбургу</span>
                        </div>
                        <span className="text-white font-medium">{formatPrice(deliveryFee)}</span>
                      </div>

                      <div className="border-t border-slate-600 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-medium text-white">К оплате</span>
                          <span className="text-2xl font-light text-blue-200">{formatPrice(total)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-lg p-4 mb-6 border border-blue-500/30">
                      <div className="flex items-center space-x-2 mb-3">
                        <Clock className="h-5 w-5 text-blue-400" />
                        <span className="text-blue-200 font-medium">Информация о доставке</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>Доставка от 1 часа</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>Работаем круглосуточно</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span>Вся территория города</span>
                        </div>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                    >
                      Оформить заказ
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      Нажимая кнопку, вы соглашаетесь с условиями доставки
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

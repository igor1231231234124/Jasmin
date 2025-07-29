"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingCart, Filter, Star } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Product {
  id: number
  name: string
  price: number
  description: string
  composition: string[]
  type: string
  occasion: string[]
  image: string
  rating: number
  inStock: boolean
}

export default function CatalogPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([1000, 10000])
  const [selectedComposition, setSelectedComposition] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState<string>("")
  const [selectedOccasion, setSelectedOccasion] = useState<string>("")
  const [sortBy, setSortBy] = useState<string>("popular")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products: Product[] = [
    {
      id: 1,
      name: "Элегантная классика",
      price: 3500,
      description: "Изысканные белые розы с эвкалиптом в стильной упаковке",
      composition: ["розы", "эвкалипт"],
      type: "монобукет",
      occasion: ["день рождения", "благодарность"],
      image: "/luxury-white-roses.png",
      rating: 5,
      inStock: true,
    },
    {
      id: 2,
      name: "Королевский шарм",
      price: 4200,
      description: "Премиальные пионы в бархатной упаковке с золотыми акцентами",
      composition: ["пионы"],
      type: "композиция",
      occasion: ["свадьба", "романтика"],
      image: "/luxury-peonies-royal-packaging.png",
      rating: 5,
      inStock: true,
    },
    {
      id: 3,
      name: "Ночная магия",
      price: 3800,
      description: "Темные розы с золотыми акцентами для особенных моментов",
      composition: ["розы"],
      type: "монобукет",
      occasion: ["романтика", "извинения"],
      image: "/dark-roses-gold-bouquet.png",
      rating: 5,
      inStock: true,
    },
    {
      id: 4,
      name: "Утренняя свежесть",
      price: 2900,
      description: "Нежные тюльпаны с зеленью в весенней композиции",
      composition: ["тюльпаны", "зелень"],
      type: "композиция",
      occasion: ["день рождения", "благодарность"],
      image: "/fresh-tulips-greenery-morning-bouquet.png",
      rating: 4,
      inStock: true,
    },
    {
      id: 5,
      name: "Солнечное настроение",
      price: 3200,
      description: "Яркие подсолнухи с хризантемами в радостной композиции",
      composition: ["подсолнухи", "хризантемы"],
      type: "композиция",
      occasion: ["день рождения", "благодарность"],
      image: "/sunflower-chrysanthemum-bouquet.png",
      rating: 5,
      inStock: true,
    },
    {
      id: 6,
      name: "Нежность в коробке",
      price: 4800,
      description: "Розовые розы в премиальной коробке с атласной лентой",
      composition: ["розы"],
      type: "коробка",
      occasion: ["романтика", "свадьба"],
      image: "/pink-roses-luxury-box.png",
      rating: 5,
      inStock: true,
    },
    {
      id: 7,
      name: "Осенняя палитра",
      price: 3600,
      description: "Сухоцветы в теплых тонах с декоративными элементами",
      composition: ["сухоцветы"],
      type: "сухоцветы",
      occasion: ["благодарность", "день рождения"],
      image: "/autumn-dried-flowers.png",
      rating: 4,
      inStock: true,
    },
    {
      id: 8,
      name: "Фиолетовая мечта",
      price: 4100,
      description: "Лавандовые розы с фиолетовыми акцентами",
      composition: ["розы", "лаванда"],
      type: "композиция",
      occasion: ["романтика", "благодарность"],
      image: "/purple-lavender-roses.png",
      rating: 5,
      inStock: true,
    },
  ]

  const compositions = [
    "розы",
    "пионы",
    "тюльпаны",
    "хризантемы",
    "подсолнухи",
    "эвкалипт",
    "зелень",
    "лаванда",
    "сухоцветы",
  ]
  const types = ["монобукет", "композиция", "коробка", "сухоцветы"]
  const occasions = ["день рождения", "свадьба", "романтика", "извинения", "благодарность"]

  const filteredProducts = products.filter((product) => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    const compositionMatch =
      selectedComposition.length === 0 || selectedComposition.some((comp) => product.composition.includes(comp))
    const typeMatch = !selectedType || selectedType === "all" || product.type === selectedType
    const occasionMatch = !selectedOccasion || selectedOccasion === "all" || product.occasion.includes(selectedOccasion)

    return priceMatch && compositionMatch && typeMatch && occasionMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return b.rating - a.rating
    }
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + "₽"
  }

  const handleCompositionChange = (composition: string, checked: boolean) => {
    if (checked) {
      setSelectedComposition([...selectedComposition, composition])
    } else {
      setSelectedComposition(selectedComposition.filter((c) => c !== composition))
    }
  }

  const clearFilters = () => {
    setPriceRange([1000, 10000])
    setSelectedComposition([])
    setSelectedType("")
    setSelectedOccasion("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white">
      <Header />

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-light mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent">
                Каталог
              </h1>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Выберите идеальный букет из нашей коллекции премиальных композиций
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-black bg-transparent md:hidden"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Фильтры
                </Button>
                <span className="text-gray-400">
                  Найдено: {sortedProducts.length} из {products.length}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Сортировка:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-slate-800 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem
                      value="popular"
                      className="text-gray-300 hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                    >
                      По популярности
                    </SelectItem>
                    <SelectItem
                      value="price-low"
                      className="text-gray-300 hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                    >
                      Цена: по возрастанию
                    </SelectItem>
                    <SelectItem
                      value="price-high"
                      className="text-gray-300 hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                    >
                      Цена: по убыванию
                    </SelectItem>
                    <SelectItem
                      value="name"
                      className="text-gray-300 hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                    >
                      По названию
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}>
              <Card className="bg-gradient-to-br from-slate-800/40 to-black/40 border-slate-700 sticky top-28">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-medium text-white">Фильтры</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Очистить
                    </Button>
                  </div>

                  <div className="space-y-8">
                    {/* Price Range */}
                    <div>
                      <h4 className="text-lg font-medium text-white mb-4">Цена</h4>
                      <div className="px-2">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={10000}
                          min={1000}
                          step={100}
                          className="mb-4"
                        />
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>{formatPrice(priceRange[0])}</span>
                          <span>{formatPrice(priceRange[1])}</span>
                        </div>
                      </div>
                    </div>

                    {/* Composition */}
                    <div>
                      <h4 className="text-lg font-medium text-white mb-4">Состав</h4>
                      <div className="space-y-3 max-h-48 overflow-y-auto">
                        {compositions.map((composition) => (
                          <div key={composition} className="flex items-center space-x-2">
                            <Checkbox
                              id={composition}
                              checked={selectedComposition.includes(composition)}
                              onCheckedChange={(checked) => handleCompositionChange(composition, checked as boolean)}
                              className="border-slate-600 data-[state=checked]:bg-blue-600"
                            />
                            <label htmlFor={composition} className="text-sm text-gray-300 capitalize cursor-pointer">
                              {composition}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Type */}
                    <div>
                      <h4 className="text-lg font-medium text-white mb-4">Тип</h4>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem
                            value="all"
                            className="text-gray-300 hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                          >
                            Все типы
                          </SelectItem>
                          {types.map((type) => (
                            <SelectItem
                              key={type}
                              value={type}
                              className="capitalize text-gray-300 hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                            >
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Occasion */}
                    <div>
                      <h4 className="text-lg font-medium text-white mb-4">Повод</h4>
                      <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                          <SelectValue placeholder="Выберите повод" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem
                            value="all"
                            className="text-gray-300 hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                          >
                            Все поводы
                          </SelectItem>
                          {occasions.map((occasion) => (
                            <SelectItem
                              key={occasion}
                              value={occasion}
                              className="capitalize text-gray-300 hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white"
                            >
                              {occasion}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {sortedProducts.map((product, index) => (
                  <Card
                    key={product.id}
                    className={`bg-gradient-to-br from-slate-800/50 to-blue-900/30 border-slate-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Favorite Button */}
                        <div className="absolute top-4 right-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:text-red-400 hover:bg-black/20 p-2"
                          >
                            <Heart className="h-5 w-5" />
                          </Button>
                        </div>

                        {/* Stock Status */}
                        {!product.inStock && (
                          <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-xs">
                            Нет в наличии
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        {/* Rating */}
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < product.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                              }`}
                            />
                          ))}
                          <span className="text-gray-400 text-sm ml-2">({product.rating})</span>
                        </div>

                        <h3 className="text-xl font-medium mb-2 text-white">{product.name}</h3>
                        <p className="text-gray-400 mb-3 text-sm leading-relaxed">{product.description}</p>

                        {/* Composition Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {product.composition.slice(0, 3).map((comp) => (
                            <span
                              key={comp}
                              className="bg-blue-900/30 text-blue-200 px-2 py-1 rounded-full text-xs capitalize"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-light text-blue-200">{formatPrice(product.price)}</span>
                          <Button
                            size="sm"
                            disabled={!product.inStock}
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />В корзину
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🌸</div>
                  <h3 className="text-2xl font-light mb-4 text-gray-400">Ничего не найдено</h3>
                  <p className="text-gray-500 mb-6">Попробуйте изменить параметры фильтрации</p>
                  <Button
                    onClick={clearFilters}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

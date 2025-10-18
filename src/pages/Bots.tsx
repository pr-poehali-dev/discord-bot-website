import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Bots = () => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const addons = [
    { id: 'threads', name: 'Управление тредами', price: 300 },
    { id: 'notifications', name: 'Система уведомлений', price: 200 },
    { id: 'stats', name: 'Статистика активности', price: 250 },
    { id: 'api', name: 'Интеграция с API', price: 500 },
  ];

  const basePrice = 1000;
  const totalPrice = basePrice + selectedAddons.reduce((sum, addonId) => {
    const addon = addons.find(a => a.id === addonId);
    return sum + (addon?.price || 0);
  }, 0);

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(prev => prev.filter(id => id !== addonId));
    } else {
      setSelectedAddons(prev => [...prev, addonId]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A1F] text-white">
      {/* Header */}
      <header className="border-b border-cyan-500/20 backdrop-blur-sm sticky top-0 z-50 bg-[#0A0A1F]/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
            Majestic-bot
          </Link>
          <nav className="hidden md:flex gap-6 font-rajdhani">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Главная</Link>
            <Link to="/bots" className="text-cyan-400">Боты</Link>
            <Link to="/changelog" className="hover:text-cyan-400 transition-colors">Обновления</Link>
            <Link to="/contacts" className="hover:text-cyan-400 transition-colors">Контакты</Link>
          </nav>
          <Link to="/dashboard">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-rajdhani">
              Кабинет
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold font-orbitron mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-center animate-fade-in">
          НАШИ РЕШЕНИЯ
        </h1>
        <p className="text-xl text-gray-300 mb-12 font-rajdhani text-center max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
          Выберите готовое решение или закажите кастомную разработку
        </p>

        <Tabs defaultValue="family" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-[#1A1A2E] border border-cyan-500/30 font-rajdhani">
            <TabsTrigger value="family" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
              Семейный бот
            </TabsTrigger>
            <TabsTrigger value="tournament" className="data-[state=active]:bg-magenta-500 data-[state=active]:text-white">
              Турнирный бот
            </TabsTrigger>
            <TabsTrigger value="custom" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              Кастомное решение
            </TabsTrigger>
          </TabsList>

          {/* Family Bot */}
          <TabsContent value="family" className="mt-8 animate-fade-in">
            <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-white" size={32} />
                </div>
                <CardTitle className="text-3xl font-orbitron text-cyan-400">Семейный бот</CardTitle>
                <CardDescription className="text-gray-400 font-rajdhani text-lg">
                  Комплексное решение для управления семейным сообществом Discord
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Base Features */}
                <div>
                  <h3 className="text-xl font-bold font-orbitron text-cyan-400 mb-4">Базовые функции</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                      <Icon name="Check" className="text-cyan-400 mt-1" size={20} />
                      <span>Списки участников семьи</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                      <Icon name="Check" className="text-cyan-400 mt-1" size={20} />
                      <span>Система балов и магазин</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                      <Icon name="Check" className="text-cyan-400 mt-1" size={20} />
                      <span>Обработка заявок</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                      <Icon name="Check" className="text-cyan-400 mt-1" size={20} />
                      <span>Базовая статистика</span>
                    </div>
                  </div>
                </div>

                {/* Base Price */}
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-rajdhani text-lg">Базовый тариф:</span>
                    <span className="text-3xl font-bold font-orbitron text-cyan-400">{basePrice}₽/мес</span>
                  </div>
                </div>

                {/* Additional Features */}
                <div>
                  <h3 className="text-xl font-bold font-orbitron text-cyan-400 mb-4">Дополнительные функции</h3>
                  <div className="space-y-3">
                    {addons.map(addon => (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedAddons.includes(addon.id)
                            ? 'border-cyan-500 bg-cyan-500/10'
                            : 'border-cyan-500/30 bg-[#0A0A1F] hover:border-cyan-500/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            checked={selectedAddons.includes(addon.id)}
                            onCheckedChange={() => toggleAddon(addon.id)}
                          />
                          <span className="font-rajdhani text-gray-300">{addon.name}</span>
                        </div>
                        <span className="font-bold font-rajdhani text-cyan-400">+{addon.price}₽</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-rajdhani">Итоговая стоимость:</span>
                    <span className="text-4xl font-bold font-orbitron text-cyan-400">{totalPrice}₽/мес</span>
                  </div>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold text-lg font-rajdhani">
                    Арендовать бота
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tournament Bot */}
          <TabsContent value="tournament" className="mt-8 animate-fade-in">
            <Card className="bg-[#1A1A2E]/60 border-magenta-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-magenta-500 to-purple-600 flex items-center justify-center mb-4">
                  <Icon name="Trophy" className="text-white" size={32} />
                </div>
                <CardTitle className="text-3xl font-orbitron text-magenta-400">Турнирный бот</CardTitle>
                <CardDescription className="text-gray-400 font-rajdhani text-lg">
                  Автоматизация регистрации на турниры MCL, VZM, Pack
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Начальный */}
                  <Card className="bg-[#0A0A1F] border-magenta-500/30">
                    <CardHeader>
                      <CardTitle className="text-xl font-orbitron text-magenta-400">Начальный</CardTitle>
                      <div className="text-3xl font-bold font-orbitron text-magenta-400">1500₽<span className="text-base text-gray-400">/мес</span></div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-magenta-400 mt-1" size={18} />
                        <span>1 аккаунт для регистрации</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-magenta-400 mt-1" size={18} />
                        <span>4 сервера</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-magenta-400 mt-1" size={18} />
                        <span>0.5мм к/д проверки прав</span>
                      </div>
                      <Button className="w-full mt-4 bg-magenta-500 hover:bg-magenta-600 text-white font-rajdhani">
                        Выбрать
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Стандарт */}
                  <Card className="bg-[#0A0A1F] border-magenta-500 relative">
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-magenta-500 text-white font-rajdhani">
                      Популярный
                    </Badge>
                    <CardHeader>
                      <CardTitle className="text-xl font-orbitron text-magenta-400">Стандарт</CardTitle>
                      <div className="text-3xl font-bold font-orbitron text-magenta-400">2500₽<span className="text-base text-gray-400">/мес</span></div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-magenta-400 mt-1" size={18} />
                        <span>1 аккаунт для регистрации</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-magenta-400 mt-1" size={18} />
                        <span>8 серверов</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-magenta-400 mt-1" size={18} />
                        <span>0.3мм к/д проверки прав</span>
                      </div>
                      <Button className="w-full mt-4 bg-magenta-500 hover:bg-magenta-600 text-white font-rajdhani">
                        Выбрать
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Максимум */}
                  <Card className="bg-[#0A0A1F] border-magenta-500/30">
                    <CardHeader>
                      <CardTitle className="text-xl font-orbitron text-magenta-400">Максимум</CardTitle>
                      <div className="text-3xl font-bold font-orbitron text-magenta-400">4000₽<span className="text-base text-gray-400">/мес</span></div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-magenta-400 mt-1" size={18} />
                        <span>2 аккаунта для регистрации</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-magenta-400 mt-1" size={18} />
                        <span>15 серверов</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-magenta-400 mt-1" size={18} />
                        <span>0.1мм к/д проверки прав</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-magenta-400 mt-1" size={18} />
                        <span>Функция "Ждать замену"</span>
                      </div>
                      <Button className="w-full mt-4 bg-magenta-500 hover:bg-magenta-600 text-white font-rajdhani">
                        Выбрать
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Features */}
                <div className="mt-8 bg-magenta-500/10 border border-magenta-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold font-orbitron text-magenta-400 mb-4">Все тарифы включают:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                      <Icon name="Check" className="text-magenta-400 mt-1" size={20} />
                      <span>Поддержка MCL, VZM, Pack</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                      <Icon name="Check" className="text-magenta-400 mt-1" size={20} />
                      <span>Управление цветами</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                      <Icon name="Check" className="text-magenta-400 mt-1" size={20} />
                      <span>Планировщик задач</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                      <Icon name="Check" className="text-magenta-400 mt-1" size={20} />
                      <span>Статистика регистраций</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Custom Bot */}
          <TabsContent value="custom" className="mt-8 animate-fade-in">
            <Card className="bg-[#1A1A2E]/60 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-white" size={32} />
                </div>
                <CardTitle className="text-3xl font-orbitron text-purple-400">Кастомное решение</CardTitle>
                <CardDescription className="text-gray-400 font-rajdhani text-lg">
                  Разработка бота под ваши уникальные требования
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-orbitron text-purple-400">Что мы предлагаем:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-purple-400 mt-1" size={20} />
                        <span>Любая функциональность на заказ</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-purple-400 mt-1" size={20} />
                        <span>Полная кастомизация интерфейса</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-purple-400 mt-1" size={20} />
                        <span>Интеграция с внешними API</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-purple-400 mt-1" size={20} />
                        <span>Техническая поддержка 24/7</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-purple-400 mt-1" size={20} />
                        <span>Обновления и доработки</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 font-rajdhani">
                        <Icon name="Check" className="text-purple-400 mt-1" size={20} />
                        <span>Документация и обучение</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-orbitron text-purple-400">Примеры проектов:</h3>
                    <div className="space-y-3">
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="font-bold font-rajdhani text-purple-300 mb-2">Бот для ивентов</h4>
                        <p className="text-sm text-gray-400 font-rajdhani">Организация и управление внутриигровыми мероприятиями</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="font-bold font-rajdhani text-purple-300 mb-2">Система модерации</h4>
                        <p className="text-sm text-gray-400 font-rajdhani">Автоматическая модерация с AI и антиспам</p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                        <h4 className="font-bold font-rajdhani text-purple-300 mb-2">Игровая экономика</h4>
                        <p className="text-sm text-gray-400 font-rajdhani">Валюта, магазин, аукционы, торговля</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500 rounded-lg p-6 text-center">
                  <p className="text-lg text-gray-300 mb-4 font-rajdhani">
                    Стоимость и сроки определяются индивидуально после обсуждения требований
                  </p>
                  <Link to="/contacts">
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg px-8 font-rajdhani">
                      Обсудить проект
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-2">
                Majestic-bot
              </h3>
              <p className="text-gray-400 font-rajdhani">Мощные Discord боты для вашего сервера</p>
            </div>
            <nav className="flex gap-6 font-rajdhani">
              <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Главная</Link>
              <Link to="/bots" className="text-gray-400 hover:text-cyan-400 transition-colors">Боты</Link>
              <Link to="/changelog" className="text-gray-400 hover:text-cyan-400 transition-colors">Обновления</Link>
              <Link to="/contacts" className="text-gray-400 hover:text-cyan-400 transition-colors">Контакты</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bots;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
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
            <Link to="/bots" className="hover:text-cyan-400 transition-colors">Боты</Link>
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 animate-fade-in">
          МОЩНЫЕ DISCORD БОТЫ
          <br />
          ДЛЯ ВАШЕГО СЕРВЕРА
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-rajdhani max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          Разработка и аренда кастомных Discord ботов под ваши задачи
        </p>
        <div className="flex gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Link to="/bots">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold font-rajdhani text-lg px-8">
              Посмотреть ботов
            </Button>
          </Link>
          <Link to="/contacts">
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 font-rajdhani text-lg px-8">
              Связаться
            </Button>
          </Link>
        </div>
      </section>

      {/* Bots Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          ГОТОВЫЕ РЕШЕНИЯ
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Family Bot */}
          <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300 animate-fade-in">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Icon name="Users" className="text-white" size={24} />
              </div>
              <CardTitle className="text-2xl font-orbitron text-cyan-400">Семейный бот</CardTitle>
              <CardDescription className="text-gray-400 font-rajdhani">
                Управление семейным сообществом Discord
              </CardDescription>
            </CardHeader>
            <CardContent className="font-rajdhani text-gray-300">
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-cyan-400 mt-1" size={16} />
                  <span>Списки участников семьи</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-cyan-400 mt-1" size={16} />
                  <span>Система баллов и магазин</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-cyan-400 mt-1" size={16} />
                  <span>Обработка заявок</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-cyan-400 mt-1" size={16} />
                  <span>Управление тредами</span>
                </li>
              </ul>
              <Link to="/bots">
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold">
                  Подробнее
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Tournament Bot */}
          <Card className="bg-[#1A1A2E]/60 border-magenta-500/30 backdrop-blur-sm hover:border-magenta-500 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-magenta-500 to-purple-600 flex items-center justify-center mb-4">
                <Icon name="Trophy" className="text-white" size={24} />
              </div>
              <CardTitle className="text-2xl font-orbitron text-magenta-400">Турнирный бот</CardTitle>
              <CardDescription className="text-gray-400 font-rajdhani">
                Автоматизация регистрации на турниры
              </CardDescription>
            </CardHeader>
            <CardContent className="font-rajdhani text-gray-300">
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-magenta-400 mt-1" size={16} />
                  <span>Поддержка MCL, VZM, Pack</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-magenta-400 mt-1" size={16} />
                  <span>Автоматическая регистрация</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-magenta-400 mt-1" size={16} />
                  <span>Управление цветами</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-magenta-400 mt-1" size={16} />
                  <span>Планирование задач</span>
                </li>
              </ul>
              <Link to="/bots">
                <Button className="w-full bg-magenta-500 hover:bg-magenta-600 text-white font-bold">
                  Подробнее
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Custom Bot */}
          <Card className="bg-[#1A1A2E]/60 border-purple-500/30 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <CardTitle className="text-2xl font-orbitron text-purple-400">Кастомное решение</CardTitle>
              <CardDescription className="text-gray-400 font-rajdhani">
                Разработка бота под ваши задачи
              </CardDescription>
            </CardHeader>
            <CardContent className="font-rajdhani text-gray-300">
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-purple-400 mt-1" size={16} />
                  <span>Любая функциональность</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-purple-400 mt-1" size={16} />
                  <span>Полная кастомизация</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-purple-400 mt-1" size={16} />
                  <span>Техническая поддержка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-purple-400 mt-1" size={16} />
                  <span>Обновления и доработки</span>
                </li>
              </ul>
              <Link to="/contacts">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold">
                  Заказать
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

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

export default Index;
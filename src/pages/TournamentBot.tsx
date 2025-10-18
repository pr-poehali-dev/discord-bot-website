import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TournamentBot = () => {
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

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-rajdhani">
            <Link to="/dashboard" className="hover:text-cyan-400 transition-colors">Кабинет</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-cyan-400">Турнирный бот</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold font-orbitron mb-2 text-transparent bg-clip-text bg-gradient-to-r from-magenta-400 to-purple-500">
            ТУРНИРНЫЙ БОТ
          </h1>
          <p className="text-gray-400 mb-8 font-rajdhani">
            Управление турнирными регистрациями и серверами
          </p>

          {/* Management Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Accounts Card */}
            <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="User" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-orbitron text-cyan-400">Аккаунты</CardTitle>
                <CardDescription className="text-gray-400 font-rajdhani">
                  Управление игровыми аккаунтами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-rajdhani mb-4">
                  Добавляйте и настраивайте аккаунты для автоматической регистрации на турниры.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-400 font-rajdhani">
                    <Icon name="Check" className="text-cyan-400 mt-0.5" size={16} />
                    <span>Авторизация через логин/пароль</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400 font-rajdhani">
                    <Icon name="Check" className="text-cyan-400 mt-0.5" size={16} />
                    <span>Поддержка token-авторизации</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400 font-rajdhani">
                    <Icon name="Check" className="text-cyan-400 mt-0.5" size={16} />
                    <span>Безопасное хранение данных</span>
                  </li>
                </ul>
                <Link to="/tournament-accounts">
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold font-rajdhani">
                    Управление
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Servers Card */}
            <Card className="bg-[#1A1A2E]/60 border-magenta-500/30 backdrop-blur-sm hover:border-magenta-500 transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-magenta-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Server" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-orbitron text-magenta-400">Сервера</CardTitle>
                <CardDescription className="text-gray-400 font-rajdhani">
                  Выбор серверов для регистрации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-rajdhani mb-4">
                  Выберите сервера, на которые будет происходить автоматическая регистрация.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-400 font-rajdhani">
                    <Icon name="Check" className="text-magenta-400 mt-0.5" size={16} />
                    <span>До 15 серверов на выбор</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400 font-rajdhani">
                    <Icon name="Check" className="text-magenta-400 mt-0.5" size={16} />
                    <span>Лимит зависит от тарифа</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400 font-rajdhani">
                    <Icon name="Check" className="text-magenta-400 mt-0.5" size={16} />
                    <span>Привязка к аккаунтам</span>
                  </li>
                </ul>
                <Link to="/tournament-servers">
                  <Button className="w-full bg-magenta-500 hover:bg-magenta-600 text-white font-bold font-rajdhani">
                    Управление
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Tasks Card */}
            <Card className="bg-[#1A1A2E]/60 border-purple-500/30 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="CalendarCheck" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-orbitron text-purple-400">Задачи</CardTitle>
                <CardDescription className="text-gray-400 font-rajdhani">
                  Планирование турнирных задач
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 font-rajdhani mb-4">
                  Создавайте задачи для автоматической регистрации на турниры.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-gray-400 font-rajdhani">
                    <Icon name="Check" className="text-purple-400 mt-0.5" size={16} />
                    <span>Поддержка MCL, VZM, Pack</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400 font-rajdhani">
                    <Icon name="Check" className="text-purple-400 mt-0.5" size={16} />
                    <span>Управление цветами</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-400 font-rajdhani">
                    <Icon name="Check" className="text-purple-400 mt-0.5" size={16} />
                    <span>Расписание задач</span>
                  </li>
                </ul>
                <Link to="/tournament-tasks">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold font-rajdhani">
                    Управление
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Info Card */}
          <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm mt-8">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron text-cyan-400 flex items-center gap-2">
                <Icon name="Info" size={24} />
                Как это работает
              </CardTitle>
            </CardHeader>
            <CardContent className="font-rajdhani text-gray-300 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">1</span>
                </div>
                <p>Добавьте игровые аккаунты с данными для авторизации (логин/пароль или токен)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-magenta-500/20 border border-magenta-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-magenta-400 font-bold">2</span>
                </div>
                <p>Выберите сервера для каждого аккаунта (количество зависит от вашего тарифа)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <p>Создайте задачу с указанием типа турнира, времени и параметров регистрации</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">4</span>
                </div>
                <p>Бот автоматически зарегистрирует ваши аккаунты в указанное время</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400 font-rajdhani">
            <p>&copy; 2024 Majestic-bot. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TournamentBot;

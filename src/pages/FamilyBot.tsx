import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FamilyBot = () => {
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
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-rajdhani">
            <Link to="/dashboard" className="hover:text-cyan-400 transition-colors">Кабинет</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-cyan-400">Семейный бот</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold font-orbitron mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            СЕМЕЙНЫЙ БОТ
          </h1>

          {/* Under Development Card */}
          <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Icon name="Construction" className="text-white" size={48} />
                </div>
              </div>
              <CardTitle className="text-3xl font-orbitron text-center text-cyan-400">
                В РАЗРАБОТКЕ
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-xl text-gray-300 font-rajdhani">
                Страница управления семейным ботом находится в разработке.
              </p>
              <p className="text-gray-400 font-rajdhani">
                Мы работаем над созданием удобного интерфейса для управления вашим семейным сообществом.
                Скоро здесь появятся все необходимые функции.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 pt-6">
                <div className="bg-[#0A0A1F] border border-cyan-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Users" className="text-cyan-400" size={20} />
                    <h3 className="font-orbitron text-cyan-400">Управление семьёй</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-rajdhani">
                    Списки участников и статистика
                  </p>
                </div>
                
                <div className="bg-[#0A0A1F] border border-cyan-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="ShoppingBag" className="text-cyan-400" size={20} />
                    <h3 className="font-orbitron text-cyan-400">Магазин баллов</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-rajdhani">
                    Система баллов и покупок
                  </p>
                </div>
                
                <div className="bg-[#0A0A1F] border border-cyan-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="FileText" className="text-cyan-400" size={20} />
                    <h3 className="font-orbitron text-cyan-400">Заявки</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-rajdhani">
                    Обработка входящих заявок
                  </p>
                </div>
                
                <div className="bg-[#0A0A1F] border border-cyan-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="MessageSquare" className="text-cyan-400" size={20} />
                    <h3 className="font-orbitron text-cyan-400">Треды</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-rajdhani">
                    Управление тредами сообщества
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/dashboard">
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-rajdhani">
                    <Icon name="ArrowLeft" size={16} className="mr-2" />
                    Вернуться в кабинет
                  </Button>
                </Link>
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

export default FamilyBot;

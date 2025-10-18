import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const changelogData = [
  {
    version: '2.1.0',
    date: '2024-01-15',
    bot: 'Турнирный бот',
    changes: [
      { type: 'feature', text: 'Добавлена поддержка Pack турниров' },
      { type: 'feature', text: 'Новый режим "Ждать замену"' },
      { type: 'improvement', text: 'Улучшена скорость проверки прав до 0.1мм к/д' },
    ]
  },
  {
    version: '2.0.5',
    date: '2024-01-10',
    bot: 'Семейный бот',
    changes: [
      { type: 'bugfix', text: 'Исправлена ошибка в системе балов' },
      { type: 'improvement', text: 'Оптимизирована загрузка списков участников' },
    ]
  },
  {
    version: '2.0.0',
    date: '2024-01-01',
    bot: 'Турнирный бот',
    changes: [
      { type: 'feature', text: 'Добавлена система управления цветами' },
      { type: 'feature', text: 'Поддержка нескольких аккаунтов для регистрации' },
      { type: 'feature', text: 'Новые тарифные планы' },
      { type: 'improvement', text: 'Переработан интерфейс создания задач' },
    ]
  },
  {
    version: '1.8.2',
    date: '2023-12-20',
    bot: 'Семейный бот',
    changes: [
      { type: 'feature', text: 'Добавлена система уведомлений' },
      { type: 'bugfix', text: 'Исправлены ошибки в управлении тредами' },
    ]
  },
  {
    version: '1.8.0',
    date: '2023-12-15',
    bot: 'Турнирный бот',
    changes: [
      { type: 'feature', text: 'Добавлен планировщик задач' },
      { type: 'improvement', text: 'Улучшена стабильность регистрации' },
    ]
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'feature': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
    case 'improvement': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'bugfix': return 'bg-magenta-500/20 text-magenta-400 border-magenta-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'feature': return 'Новое';
    case 'improvement': return 'Улучшение';
    case 'bugfix': return 'Исправление';
    default: return type;
  }
};

const getBotColor = (bot: string) => {
  if (bot.includes('Турнирный')) return 'text-magenta-400';
  if (bot.includes('Семейный')) return 'text-cyan-400';
  return 'text-purple-400';
};

const Changelog = () => {
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
            <Link to="/changelog" className="text-cyan-400">Обновления</Link>
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold font-orbitron mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-fade-in">
            СПИСОК ИЗМЕНЕНИЙ
          </h1>
          <p className="text-xl text-gray-300 mb-12 font-rajdhani animate-fade-in" style={{animationDelay: '0.1s'}}>
            История обновлений и улучшений наших ботов
          </p>

          <div className="space-y-6">
            {changelogData.map((release, idx) => (
              <Card 
                key={release.version} 
                className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm animate-fade-in"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl font-orbitron text-cyan-400">
                          Версия {release.version}
                        </CardTitle>
                        <Badge className={`${getBotColor(release.bot)} border font-rajdhani`}>
                          {release.bot}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-400 font-rajdhani">
                        {new Date(release.date).toLocaleDateString('ru-RU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {release.changes.map((change, changeIdx) => (
                      <li key={changeIdx} className="flex items-start gap-3">
                        <Badge className={`${getTypeColor(change.type)} border font-rajdhani mt-0.5`}>
                          {getTypeLabel(change.type)}
                        </Badge>
                        <span className="text-gray-300 font-rajdhani flex-1">{change.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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

export default Changelog;

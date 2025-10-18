import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const SERVER_NAMES = [
  'Основной EU',
  'Дополнительный EU',
  'Основной NA',
  'Дополнительный NA',
  'Турнирный #1',
  'Турнирный #2',
  'Резервный #1',
  'Резервный #2',
  'VIP Сервер',
  'Тестовый #1',
  'Тестовый #2',
  'Специальный #1',
  'Специальный #2',
  'Запасной #1',
  'Запасной #2',
];

interface AccountServer {
  accountId: string;
  accountName: string;
  servers: number[];
}

const TournamentServers = () => {
  const navigate = useNavigate();
  const [selectedAccount, setSelectedAccount] = useState<string>('');
  const [accountServers, setAccountServers] = useState<AccountServer[]>([
    {
      accountId: '1',
      accountName: 'Семья Драконов',
      servers: [1, 3, 5],
    },
  ]);

  // Тариф для примера (Стандарт)
  const maxServers = 8;

  const accounts = [
    { id: '1', name: 'Семья Драконов' },
    { id: '2', name: 'Кланические Воины' },
  ];

  const toggleServer = (serverId: number) => {
    if (!selectedAccount) {
      toast.error('Выберите аккаунт');
      return;
    }

    setAccountServers(prev => {
      const accountData = prev.find(a => a.accountId === selectedAccount);
      const currentServers = accountData?.servers || [];

      // Проверка лимита
      if (!currentServers.includes(serverId) && currentServers.length >= maxServers) {
        toast.error(`Достигнут лимит серверов (${maxServers})`);
        return prev;
      }

      // Обновление списка серверов
      const updatedServers = currentServers.includes(serverId)
        ? currentServers.filter(s => s !== serverId)
        : [...currentServers, serverId];

      // Обновление или создание записи для аккаунта
      const existingIndex = prev.findIndex(a => a.accountId === selectedAccount);
      const accountName = accounts.find(a => a.id === selectedAccount)?.name || '';

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          servers: updatedServers,
        };
        return updated;
      } else {
        return [...prev, {
          accountId: selectedAccount,
          accountName,
          servers: updatedServers,
        }];
      }
    });
  };

  const currentAccountServers = accountServers.find(a => a.accountId === selectedAccount)?.servers || [];

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
            <Link to="/tournament-bot" className="hover:text-cyan-400 transition-colors">Турнирный бот</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-cyan-400">Сервера</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold font-orbitron mb-2 text-transparent bg-clip-text bg-gradient-to-r from-magenta-400 to-purple-500">
            УПРАВЛЕНИЕ СЕРВЕРАМИ
          </h1>
          <p className="text-gray-400 mb-8 font-rajdhani">
            Выберите сервера для аккаунта (лимит: {maxServers} серверов)
          </p>

          {/* Account Selection */}
          <Card className="bg-[#1A1A2E]/60 border-magenta-500/30 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron text-magenta-400">Выбор аккаунта</CardTitle>
              <CardDescription className="text-gray-400 font-rajdhani">
                Выберите аккаунт для управления серверами
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedAccount} onValueChange={setSelectedAccount}>
                <SelectTrigger className="bg-[#0A0A1F] border-magenta-500/30 text-white font-rajdhani">
                  <SelectValue placeholder="Выберите аккаунт" />
                </SelectTrigger>
                <SelectContent className="bg-[#1A1A2E] border-magenta-500/30 text-white">
                  {accounts.map(account => (
                    <SelectItem key={account.id} value={account.id} className="font-rajdhani">
                      {account.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Server Grid */}
          {selectedAccount && (
            <Card className="bg-[#1A1A2E]/60 border-magenta-500/30 backdrop-blur-sm mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-orbitron text-magenta-400">Доступные сервера</CardTitle>
                <CardDescription className="text-gray-400 font-rajdhani">
                  Выбрано: {currentAccountServers.length} / {maxServers}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {[...Array(15)].map((_, idx) => {
                    const serverId = idx + 1;
                    const isSelected = currentAccountServers.includes(serverId);
                    return (
                      <Button
                        key={serverId}
                        onClick={() => toggleServer(serverId)}
                        className={`h-20 flex flex-col items-center justify-center gap-1 font-rajdhani transition-all ${
                          isSelected
                            ? 'bg-magenta-500 hover:bg-magenta-600 text-white border-2 border-magenta-400'
                            : 'bg-[#0A0A1F] hover:bg-[#1A1A2E] text-gray-400 border border-magenta-500/30'
                        }`}
                      >
                        <span className="text-2xl font-bold">{serverId}</span>
                        <span className="text-xs">{SERVER_NAMES[idx]}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Added Servers Summary */}
          {accountServers.length > 0 && (
            <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-orbitron text-cyan-400">Добавленные сервера</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accountServers.map(account => (
                    <div key={account.accountId} className="border border-cyan-500/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="User" className="text-cyan-400" size={16} />
                        <span className="font-bold font-rajdhani text-cyan-400">{account.accountName}</span>
                        <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                          {account.servers.length} серверов
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {account.servers.map(serverId => (
                          <Badge key={serverId} className="bg-magenta-500/20 text-magenta-400 border-magenta-500/30 font-rajdhani">
                            Сервер {serverId} ({SERVER_NAMES[serverId - 1]})
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              onClick={() => navigate('/tournament-accounts')}
              variant="outline"
              className="border-magenta-500/30 text-magenta-400 hover:bg-magenta-500/10 font-rajdhani"
            >
              <Icon name="ArrowLeft" className="mr-2" size={16} />
              Назад к аккаунтам
            </Button>
            <Button
              onClick={() => navigate('/tournament-tasks')}
              className="bg-magenta-500 hover:bg-magenta-600 text-white font-rajdhani"
            >
              Далее: Создание задачи
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
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

export default TournamentServers;
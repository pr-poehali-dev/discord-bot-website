import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Dashboard = () => {
  const [balance, setBalance] = useState(1250);
  const [addAmount, setAddAmount] = useState('');

  const subscriptions = [
    {
      id: '1',
      botName: 'Семейный бот',
      plan: 'Стандарт',
      price: 1200,
      status: 'active',
      nextPayment: '2024-02-15',
      color: 'cyan',
    },
    {
      id: '2',
      botName: 'Турнирный бот',
      plan: 'Премиум',
      price: 2500,
      status: 'active',
      nextPayment: '2024-02-20',
      color: 'magenta',
    },
  ];

  const handleAddBalance = () => {
    const amount = parseInt(addAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('Введите корректную сумму');
      return;
    }
    setBalance(prev => prev + amount);
    setAddAmount('');
    toast.success(`Баланс пополнен на ${amount}₽`);
  };

  const handleCancelSubscription = (id: string) => {
    toast.success('Подписка отменена');
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
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-bold font-orbitron mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            ЛИЧНЫЙ КАБИНЕТ
          </h1>

          {/* Balance Card */}
          <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-gray-400 font-rajdhani mb-2">Текущий баланс</p>
                  <p className="text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    {balance}₽
                  </p>
                </div>
                <Link to="/bots">
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-rajdhani">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Арендовать бота
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="subscriptions" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#1A1A2E] border border-cyan-500/30 font-rajdhani">
              <TabsTrigger value="subscriptions" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
                Подписки
              </TabsTrigger>
              <TabsTrigger value="balance" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                Баланс
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-magenta-500 data-[state=active]:text-white">
                Настройки
              </TabsTrigger>
            </TabsList>

            {/* Subscriptions Tab */}
            <TabsContent value="subscriptions" className="mt-6">
              <div className="space-y-4">
                {subscriptions.map(sub => (
                  <Card key={sub.id} className={`bg-[#1A1A2E]/60 border-${sub.color}-500/30 backdrop-blur-sm`}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className={`text-2xl font-orbitron text-${sub.color}-400`}>
                            {sub.botName}
                          </CardTitle>
                          <CardDescription className="text-gray-400 font-rajdhani">
                            Тариф: {sub.plan}
                          </CardDescription>
                        </div>
                        <Badge className={`bg-${sub.color}-500/20 text-${sub.color}-400 border-${sub.color}-500/30`}>
                          Активна
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-gray-400 text-sm font-rajdhani mb-1">Стоимость</p>
                          <p className="text-xl font-bold font-orbitron text-white">{sub.price}₽/мес</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-rajdhani mb-1">Следующий платеж</p>
                          <p className="text-lg font-rajdhani text-white">{sub.nextPayment}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-rajdhani mb-1">Статус</p>
                          <p className={`text-lg font-rajdhani text-${sub.color}-400`}>Оплачена</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Link to={sub.botName === 'Турнирный бот' ? '/tournament-bot' : '/family-bot'} className="flex-1">
                          <Button className={`w-full bg-${sub.color}-500 hover:bg-${sub.color}-600 text-white font-rajdhani`}>
                            Управление
                          </Button>
                        </Link>
                        <Button
                          onClick={() => handleCancelSubscription(sub.id)}
                          variant="outline"
                          className="border-red-500 text-red-400 hover:bg-red-500/10 font-rajdhani"
                        >
                          Отменить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Balance Tab */}
            <TabsContent value="balance" className="mt-6">
              <Card className="bg-[#1A1A2E]/60 border-purple-500/30 backdrop-blur-sm mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-orbitron text-purple-400">Пополнение баланса</CardTitle>
                  <CardDescription className="text-gray-400 font-rajdhani">
                    Добавьте средства для оплаты подписок
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300 font-rajdhani">Сумма пополнения</Label>
                    <Input
                      type="number"
                      value={addAmount}
                      onChange={(e) => setAddAmount(e.target.value)}
                      placeholder="Введите сумму"
                      className="bg-[#0A0A1F] border-purple-500/30 text-white font-rajdhani"
                    />
                  </div>
                  <div className="flex gap-2">
                    {[500, 1000, 2500, 5000].map(amount => (
                      <Button
                        key={amount}
                        onClick={() => setAddAmount(amount.toString())}
                        variant="outline"
                        className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 font-rajdhani"
                      >
                        {amount}₽
                      </Button>
                    ))}
                  </div>
                  <Button
                    onClick={handleAddBalance}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-rajdhani"
                  >
                    Пополнить баланс
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1A2E]/60 border-purple-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-orbitron text-purple-400">История операций</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-[#0A0A1F] border border-purple-500/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Plus" className="text-green-400" />
                        <div>
                          <p className="font-rajdhani text-white">Пополнение</p>
                          <p className="text-sm text-gray-400 font-rajdhani">15.01.2024</p>
                        </div>
                      </div>
                      <p className="font-bold font-orbitron text-green-400">+2000₽</p>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#0A0A1F] border border-purple-500/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Minus" className="text-red-400" />
                        <div>
                          <p className="font-rajdhani text-white">Оплата подписки</p>
                          <p className="text-sm text-gray-400 font-rajdhani">15.01.2024</p>
                        </div>
                      </div>
                      <p className="font-bold font-orbitron text-red-400">-1200₽</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="mt-6">
              <Card className="bg-[#1A1A2E]/60 border-magenta-500/30 backdrop-blur-sm mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-orbitron text-magenta-400">Настройки аккаунта</CardTitle>
                  <CardDescription className="text-gray-400 font-rajdhani">
                    Управление данными профиля
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300 font-rajdhani">Discord ID</Label>
                    <Input
                      value="123456789012345678"
                      disabled
                      className="bg-[#0A0A1F] border-magenta-500/30 text-gray-400 font-rajdhani"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300 font-rajdhani">Email</Label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-[#0A0A1F] border-magenta-500/30 text-white font-rajdhani"
                    />
                  </div>
                  <Button className="w-full bg-magenta-500 hover:bg-magenta-600 text-white font-rajdhani">
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1A2E]/60 border-red-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-orbitron text-red-400">Опасная зона</CardTitle>
                  <CardDescription className="text-gray-400 font-rajdhani">
                    Необратимые действия
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-red-500 text-red-400 hover:bg-red-500/10 font-rajdhani">
                    Удалить аккаунт
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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

export default Dashboard;

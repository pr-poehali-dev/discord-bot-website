import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface Account {
  id: string;
  name: string;
  authType: 'login' | 'token';
  createdAt: string;
}

const TournamentAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([
    {
      id: '1',
      name: 'Семья Драконов',
      authType: 'login',
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      name: 'Кланические Воины',
      authType: 'token',
      createdAt: '2024-01-18',
    },
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'token'>('login');
  const [accountName, setAccountName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleAddAccount = () => {
    if (!accountName) {
      toast.error('Введите название аккаунта');
      return;
    }

    if (authType === 'login' && (!login || !password)) {
      toast.error('Введите логин и пароль');
      return;
    }

    if (authType === 'token' && !token) {
      toast.error('Введите токен');
      return;
    }

    const newAccount: Account = {
      id: Date.now().toString(),
      name: accountName,
      authType: authType,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setAccounts([...accounts, newAccount]);
    setIsAddDialogOpen(false);
    setAccountName('');
    setLogin('');
    setPassword('');
    setToken('');
    toast.success('Аккаунт добавлен успешно');
  };

  const handleDeleteAccount = (id: string) => {
    setAccounts(accounts.filter(acc => acc.id !== id));
    toast.success('Аккаунт удалён');
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
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-rajdhani">
            <Link to="/dashboard" className="hover:text-cyan-400 transition-colors">Кабинет</Link>
            <Icon name="ChevronRight" size={16} />
            <Link to="/tournament-bot" className="hover:text-cyan-400 transition-colors">Турнирный бот</Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-cyan-400">Аккаунты</span>
          </div>

          {/* Title and Add Button */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold font-orbitron mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                УПРАВЛЕНИЕ АККАУНТАМИ
              </h1>
              <p className="text-gray-400 font-rajdhani">
                Добавьте игровые аккаунты для автоматической регистрации
              </p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-rajdhani">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить аккаунт
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#1A1A2E] border-cyan-500/30 text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-orbitron text-cyan-400">Новый аккаунт</DialogTitle>
                  <DialogDescription className="text-gray-400 font-rajdhani">
                    Добавьте данные для авторизации аккаунта
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  {/* Account Name */}
                  <div className="space-y-2">
                    <Label className="text-gray-300 font-rajdhani">Название аккаунта</Label>
                    <Input
                      value={accountName}
                      onChange={(e) => setAccountName(e.target.value)}
                      placeholder="Например: Семья Драконов"
                      className="bg-[#0A0A1F] border-cyan-500/30 text-white font-rajdhani"
                    />
                  </div>

                  {/* Auth Type Selection */}
                  <div className="space-y-2">
                    <Label className="text-gray-300 font-rajdhani">Тип авторизации</Label>
                    <RadioGroup value={authType} onValueChange={(value) => setAuthType(value as 'login' | 'token')}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="login" id="login" className="border-cyan-500/30 text-cyan-400" />
                        <Label htmlFor="login" className="font-rajdhani cursor-pointer">Логин и пароль</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="token" id="token" className="border-cyan-500/30 text-cyan-400" />
                        <Label htmlFor="token" className="font-rajdhani cursor-pointer">Токен авторизации</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Login/Password Fields */}
                  {authType === 'login' && (
                    <>
                      <div className="space-y-2">
                        <Label className="text-gray-300 font-rajdhani">Логин</Label>
                        <Input
                          value={login}
                          onChange={(e) => setLogin(e.target.value)}
                          placeholder="Введите логин"
                          className="bg-[#0A0A1F] border-cyan-500/30 text-white font-rajdhani"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-300 font-rajdhani">Пароль</Label>
                        <Input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Введите пароль"
                          className="bg-[#0A0A1F] border-cyan-500/30 text-white font-rajdhani"
                        />
                      </div>
                    </>
                  )}

                  {/* Token Field */}
                  {authType === 'token' && (
                    <div className="space-y-2">
                      <Label className="text-gray-300 font-rajdhani">Токен авторизации</Label>
                      <Input
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        placeholder="Введите токен"
                        className="bg-[#0A0A1F] border-cyan-500/30 text-white font-rajdhani"
                      />
                      <p className="text-xs text-gray-400 font-rajdhani">
                        Токен должен начинаться с "Bearer " или будет добавлен автоматически
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={handleAddAccount}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold font-rajdhani"
                  >
                    Добавить аккаунт
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Accounts List */}
          {accounts.length === 0 ? (
            <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="py-12 text-center">
                <Icon name="Users" className="mx-auto mb-4 text-gray-500" size={64} />
                <h3 className="text-xl font-orbitron text-gray-400 mb-2">Нет добавленных аккаунтов</h3>
                <p className="text-gray-500 font-rajdhani mb-6">
                  Добавьте первый аккаунт для начала работы
                </p>
                <Button
                  onClick={() => setIsAddDialogOpen(true)}
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-rajdhani"
                >
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить аккаунт
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {accounts.map((account) => (
                <Card key={account.id} className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500 transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                          <Icon name="User" className="text-white" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-orbitron text-cyan-400">{account.name}</CardTitle>
                          <CardDescription className="text-gray-400 font-rajdhani">
                            Добавлен: {account.createdAt}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={`${
                        account.authType === 'login'
                          ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                          : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                      } font-rajdhani`}>
                        {account.authType === 'login' ? 'Логин/Пароль' : 'Токен'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-rajdhani"
                      >
                        <Icon name="Edit" size={16} className="mr-2" />
                        Редактировать
                      </Button>
                      <Button
                        onClick={() => handleDeleteAccount(account.id)}
                        variant="outline"
                        className="border-red-500 text-red-400 hover:bg-red-500/10 font-rajdhani"
                      >
                        <Icon name="Trash2" size={16} className="mr-2" />
                        Удалить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Info Card */}
          <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm mt-8">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron text-cyan-400 flex items-center gap-2">
                <Icon name="Info" size={24} />
                Важная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="font-rajdhani text-gray-300 space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="Lock" className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <p>Все данные авторизации хранятся в зашифрованном виде и используются только для регистрации на турниры</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Key" className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                <p>Для токен-авторизации используйте токен, полученный из игрового клиента</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="AlertCircle" className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                <p>После добавления аккаунта не забудьте выбрать для него сервера в разделе "Сервера"</p>
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

export default TournamentAccounts;

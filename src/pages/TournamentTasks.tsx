import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const COLORS = [
  { id: 'red', name: 'Красный', hex: '#FF0000' },
  { id: 'blue', name: 'Синий', hex: '#0000FF' },
  { id: 'green', name: 'Зелёный', hex: '#00FF00' },
  { id: 'yellow', name: 'Жёлтый', hex: '#FFFF00' },
  { id: 'purple', name: 'Фиолетовый', hex: '#9B59B6' },
  { id: 'orange', name: 'Оранжевый', hex: '#FF8800' },
  { id: 'pink', name: 'Розовый', hex: '#FF69B4' },
  { id: 'cyan', name: 'Голубой', hex: '#00FFFF' },
  { id: 'white', name: 'Белый', hex: '#FFFFFF' },
  { id: 'black', name: 'Чёрный', hex: '#000000' },
];

const TournamentTasks = () => {
  const navigate = useNavigate();
  
  const [eventType, setEventType] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [server, setServer] = useState('');
  const [colorMode, setColorMode] = useState<'single' | 'all' | 'custom'>('all');
  const [selectedColor, setSelectedColor] = useState('');
  const [customColorOrder, setCustomColorOrder] = useState<string[]>([]);
  const [blockedColors, setBlockedColors] = useState<string[]>([]);
  const [waitReplacement, setWaitReplacement] = useState(false);
  const [showColorStatus, setShowColorStatus] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: '1',
      eventType: 'MCL',
      server: 'Сервер 1 (Основной EU)',
      dateTime: '2024-01-20 18:00',
      colorMode: 'all',
      status: 'active',
    },
  ]);

  const [colorStatuses] = useState([
    { colorId: 'red', sent: true },
    { colorId: 'blue', sent: true },
    { colorId: 'green', sent: false },
    { colorId: 'yellow', sent: true },
    { colorId: 'purple', sent: false },
    { colorId: 'orange', sent: false },
    { colorId: 'cyan', sent: true },
    { colorId: 'pink', sent: false },
    { colorId: 'white', sent: false },
    { colorId: 'black', sent: false },
  ]);

  const toggleCustomColor = (colorId: string) => {
    if (customColorOrder.includes(colorId)) {
      setCustomColorOrder(prev => prev.filter(c => c !== colorId));
    } else {
      setCustomColorOrder(prev => [...prev, colorId]);
    }
  };

  const toggleBlockedColor = (colorId: string) => {
    if (blockedColors.includes(colorId)) {
      setBlockedColors(prev => prev.filter(c => c !== colorId));
    } else {
      setBlockedColors(prev => [...prev, colorId]);
    }
  };

  const handleSubmit = () => {
    if (!eventType || !dateTime || !server) {
      toast.error('Заполните все обязательные поля');
      return;
    }

    if (colorMode === 'single' && !selectedColor) {
      toast.error('Выберите цвет');
      return;
    }

    if (colorMode === 'custom' && customColorOrder.length === 0) {
      toast.error('Выберите хотя бы один цвет');
      return;
    }

    toast.success('Задача создана успешно');
    // Здесь можно добавить логику сохранения
  };

  // Получить выбранный цвет для кнопок
  const getButtonColor = () => {
    if (colorMode === 'single' && selectedColor) {
      const color = COLORS.find(c => c.id === selectedColor);
      return color?.hex || '#9B59B6';
    }
    return '#9B59B6'; // magenta по умолчанию
  };

  const buttonColor = getButtonColor();

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
            <span className="text-cyan-400">Создание задачи</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold font-orbitron mb-2 text-transparent bg-clip-text bg-gradient-to-r from-magenta-400 to-purple-500">
            СОЗДАНИЕ ЗАДАЧИ
          </h1>
          <p className="text-gray-400 mb-8 font-rajdhani">
            Настройте параметры турнирной задачи
          </p>

          {/* Create Task Form */}
          <Card className="bg-[#1A1A2E]/60 border-magenta-500/30 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron text-magenta-400">Параметры задачи</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Event Type */}
              <div className="space-y-2">
                <Label className="text-gray-300 font-rajdhani">Тип события *</Label>
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger className="bg-[#0A0A1F] border-magenta-500/30 text-white font-rajdhani">
                    <SelectValue placeholder="Выберите тип события" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A2E] border-magenta-500/30 text-white">
                    <SelectItem value="mcl" className="font-rajdhani">MCL</SelectItem>
                    <SelectItem value="vzm" className="font-rajdhani">VZM</SelectItem>
                    <SelectItem value="pack" className="font-rajdhani">Pack</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date & Time */}
              <div className="space-y-2">
                <Label className="text-gray-300 font-rajdhani">Дата и время открытия регистрации *</Label>
                <Input
                  type="datetime-local"
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="bg-[#0A0A1F] border-magenta-500/30 text-white font-rajdhani"
                />
              </div>

              {/* Server */}
              <div className="space-y-2">
                <Label className="text-gray-300 font-rajdhani">Выбор сервера *</Label>
                <Select value={server} onValueChange={setServer}>
                  <SelectTrigger className="bg-[#0A0A1F] border-magenta-500/30 text-white font-rajdhani">
                    <SelectValue placeholder="Выберите сервер" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A2E] border-magenta-500/30 text-white">
                    <SelectItem value="1" className="font-rajdhani">Сервер 1 (Основной EU)</SelectItem>
                    <SelectItem value="3" className="font-rajdhani">Сервер 3 (Основной NA)</SelectItem>
                    <SelectItem value="5" className="font-rajdhani">Сервер 5 (Турнирный #1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Color Priority */}
              <div className="space-y-4">
                <Label className="text-gray-300 font-rajdhani">Приоритет цветов *</Label>
                <RadioGroup value={colorMode} onValueChange={(value) => setColorMode(value as any)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="single" id="single" />
                    <Label htmlFor="single" className="text-gray-300 font-rajdhani cursor-pointer">
                      Один цвет (отправляется только выбранный цвет)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all" className="text-gray-300 font-rajdhani cursor-pointer">
                      Все цвета (случайный порядок)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="custom" />
                    <Label htmlFor="custom" className="text-gray-300 font-rajdhani cursor-pointer">
                      Кастомный порядок (выберите последовательность ниже)
                    </Label>
                  </div>
                </RadioGroup>

                {/* Single Color Selection */}
                {colorMode === 'single' && (
                  <div className="space-y-2 pl-6">
                    <Label className="text-gray-300 font-rajdhani">Выбор цвета</Label>
                    <Select value={selectedColor} onValueChange={setSelectedColor}>
                      <SelectTrigger className="bg-[#0A0A1F] border-magenta-500/30 text-white font-rajdhani">
                        <SelectValue placeholder="Выберите цвет" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A2E] border-magenta-500/30 text-white">
                        {COLORS.map(color => (
                          <SelectItem key={color.id} value={color.id} className="font-rajdhani">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded" style={{ backgroundColor: color.hex }} />
                              {color.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Custom Color Order */}
                {colorMode === 'custom' && (
                  <div className="space-y-2 pl-6">
                    <Label className="text-gray-300 font-rajdhani">Выберите цвета в нужном порядке</Label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      {COLORS.map(color => {
                        const isSelected = customColorOrder.includes(color.id);
                        const order = customColorOrder.indexOf(color.id) + 1;
                        return (
                          <button
                            key={color.id}
                            onClick={() => toggleCustomColor(color.id)}
                            className={`p-3 rounded-lg border-2 transition-all font-rajdhani ${
                              isSelected
                                ? 'border-magenta-400 bg-magenta-500/20'
                                : 'border-magenta-500/30 bg-[#0A0A1F] hover:border-magenta-500/50'
                            }`}
                          >
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-8 h-8 rounded" style={{ backgroundColor: color.hex }} />
                              <span className="text-xs">{color.name}</span>
                              {isSelected && (
                                <Badge className="bg-magenta-500 text-white text-xs">#{order}</Badge>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Blocked Colors */}
                {colorMode !== 'single' && (
                  <div className="space-y-2">
                    <Label className="text-gray-300 font-rajdhani">Блокировка цветов (необязательно)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      {COLORS.map(color => {
                        const isBlocked = blockedColors.includes(color.id);
                        return (
                          <button
                            key={color.id}
                            onClick={() => toggleBlockedColor(color.id)}
                            className={`p-2 rounded-lg border transition-all font-rajdhani ${
                              isBlocked
                                ? 'border-red-500 bg-red-500/20'
                                : 'border-gray-700 bg-[#0A0A1F] hover:border-gray-600'
                            }`}
                          >
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-6 h-6 rounded relative" style={{ backgroundColor: color.hex }}>
                                {isBlocked && (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <Icon name="X" className="text-red-500" size={20} />
                                  </div>
                                )}
                              </div>
                              <span className="text-xs">{color.name}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Wait Replacement */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="waitReplacement"
                  checked={waitReplacement}
                  onCheckedChange={(checked) => setWaitReplacement(checked as boolean)}
                />
                <Label htmlFor="waitReplacement" className="text-gray-300 font-rajdhani cursor-pointer">
                  Ждать замену? (доступно в вашем тарифе)
                </Label>
              </div>

              {/* Submit */}
              <Button
                onClick={handleSubmit}
                className="w-full text-white font-bold font-rajdhani"
                style={{
                  backgroundColor: buttonColor,
                }}
              >
                Создать задачу
              </Button>
            </CardContent>
          </Card>

          {/* Active Tasks */}
          <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="text-xl font-orbitron text-cyan-400">Активные задачи</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map(task => (
                  <div key={task.id} className="border border-cyan-500/20 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-magenta-500/20 text-magenta-400 border-magenta-500/30">
                            {task.eventType}
                          </Badge>
                          <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                            {task.status === 'active' ? 'Активна' : 'Завершена'}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-400 font-rajdhani">
                          {task.server} • {task.dateTime}
                        </p>
                      </div>
                      <Dialog open={showColorStatus} onOpenChange={setShowColorStatus}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="border-magenta-500/30 text-magenta-400 hover:bg-magenta-500/10 font-rajdhani">
                            Цвета
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#1A1A2E] border-magenta-500/30 text-white">
                          <DialogHeader>
                            <DialogTitle className="font-orbitron text-magenta-400">Статус цветов</DialogTitle>
                            <DialogDescription className="text-gray-400 font-rajdhani">
                              Просмотр статуса отправки цветов
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid grid-cols-2 gap-3">
                            {colorStatuses.map(status => {
                              const color = COLORS.find(c => c.id === status.colorId);
                              return (
                                <div
                                  key={status.colorId}
                                  className={`p-3 rounded-lg border ${
                                    status.sent
                                      ? 'border-green-500/50 bg-green-500/10'
                                      : 'border-gray-700 bg-gray-800/50'
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded" style={{ backgroundColor: color?.hex }} />
                                    <div className="flex-1">
                                      <p className="font-rajdhani font-bold text-sm">{color?.name}</p>
                                      <p className={`text-xs font-rajdhani ${
                                        status.sent ? 'text-green-400' : 'text-gray-500'
                                      }`}>
                                        {status.sent ? 'Отправлен' : 'Не отправлен'}
                                      </p>
                                    </div>
                                    {status.sent ? (
                                      <Icon name="Check" className="text-green-400" size={16} />
                                    ) : (
                                      <Icon name="Clock" className="text-gray-500" size={16} />
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              onClick={() => navigate('/tournament-servers')}
              variant="outline"
              className="border-magenta-500/30 text-magenta-400 hover:bg-magenta-500/10 font-rajdhani"
            >
              <Icon name="ArrowLeft" className="mr-2" size={16} />
              Назад к серверам
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

export default TournamentTasks;
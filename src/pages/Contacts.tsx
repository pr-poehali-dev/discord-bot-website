import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Заполните все поля');
      return;
    }
    toast.success('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setName('');
    setEmail('');
    setMessage('');
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
            <Link to="/contacts" className="text-cyan-400">Контакты</Link>
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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold font-orbitron mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-center animate-fade-in">
            НАШИ КОНТАКТЫ
          </h1>
          <p className="text-xl text-gray-300 mb-12 font-rajdhani text-center max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
            Свяжитесь с нами любым удобным способом
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron text-cyan-400">Написать нам</CardTitle>
                <CardDescription className="text-gray-400 font-rajdhani">
                  Заполните форму и мы ответим в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300 font-rajdhani">Ваше имя</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Введите ваше имя"
                      className="bg-[#0A0A1F] border-cyan-500/30 text-white font-rajdhani"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300 font-rajdhani">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="bg-[#0A0A1F] border-cyan-500/30 text-white font-rajdhani"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300 font-rajdhani">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Опишите ваш запрос..."
                      className="bg-[#0A0A1F] border-cyan-500/30 text-white font-rajdhani min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold font-rajdhani">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
              {/* Discord */}
              <Card className="bg-[#1A1A2E]/60 border-purple-500/30 backdrop-blur-sm hover:border-purple-500 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-orbitron text-purple-400 mb-2">Discord</h3>
                      <p className="text-gray-400 font-rajdhani mb-3">Присоединяйтесь к нашему серверу поддержки</p>
                      <a href="https://discord.gg/majestic-bot" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 font-rajdhani">
                          Перейти в Discord
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-orbitron text-cyan-400 mb-2">Email</h3>
                      <p className="text-gray-400 font-rajdhani mb-3">Напишите нам на почту</p>
                      <a href="mailto:support@majestic-bot.com" className="text-cyan-400 font-rajdhani hover:underline">
                        support@majestic-bot.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Telegram */}
              <Card className="bg-[#1A1A2E]/60 border-magenta-500/30 backdrop-blur-sm hover:border-magenta-500 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-magenta-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Send" className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-orbitron text-magenta-400 mb-2">Telegram</h3>
                      <p className="text-gray-400 font-rajdhani mb-3">Быстрая связь через мессенджер</p>
                      <a href="https://t.me/majestic_bot_support" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-magenta-500/30 text-magenta-400 hover:bg-magenta-500/10 font-rajdhani">
                          Написать в Telegram
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="bg-[#1A1A2E]/60 border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-orbitron text-cyan-400 mb-2">Время работы</h3>
                      <div className="space-y-1 text-gray-400 font-rajdhani">
                        <p>Понедельник - Пятница: 10:00 - 22:00</p>
                        <p>Суббота - Воскресенье: 12:00 - 20:00</p>
                        <p className="text-purple-400 mt-2">Техническая поддержка 24/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

export default Contacts;

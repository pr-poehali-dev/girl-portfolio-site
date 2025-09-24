import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false); // Закрываем мобильное меню после клика
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bright-white via-bright-rose to-bright-purple">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-bright-gray/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-bright-purple to-bright-pink bg-clip-text text-transparent">
              Анастасия
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'services', label: 'Услуги' },
                { id: 'reviews', label: 'Отзывы' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-bright-purple font-medium ${
                    activeSection === item.id 
                      ? 'text-bright-purple border-b-2 border-bright-purple' 
                      : 'text-bright-gray'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-bright-purple/10 transition-colors duration-300"
            >
              <Icon 
                name={mobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                className="text-bright-gray hover:text-bright-purple transition-colors duration-300"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-64 opacity-100 mt-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-bright-gray/20">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'services', label: 'Услуги' },
                { id: 'reviews', label: 'Отзывы' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-bright-purple to-bright-pink text-white' 
                      : 'text-bright-gray hover:bg-bright-purple/10 hover:text-bright-purple'
                  } ${index !== 0 ? 'mt-2' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img
                src="/img/88868e0a-595d-44c1-ba33-7e0a1ac3a359.jpg"
                alt="Анастасия"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-2xl animate-scale-in"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-bright-purple via-bright-pink to-bright-emerald bg-clip-text text-transparent animate-slide-up">
              Анастасия
            </h1>
            <p className="text-xl md:text-2xl text-bright-gray mb-8 max-w-2xl mx-auto animate-slide-up">
              Создаю незабываемые моменты и особенные встречи для утонченных мужчин
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-bright-purple to-bright-pink hover:from-bright-pink hover:to-bright-purple text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Мои услуги
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="border-2 border-bright-purple text-bright-purple hover:bg-bright-purple hover:text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
              >
                <Icon name="Heart" className="mr-2" size={20} />
                Обо мне
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-bright-purple to-bright-emerald bg-clip-text text-transparent">
              Обо мне
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
                <CardContent className="pt-0">
                  <p className="text-lg text-bright-gray leading-relaxed">
                    Я - элегантная и образованная девушка, которая ценит качественное время и искренние эмоции. 
                    Моя цель - подарить вам незабываемые моменты, наполненные теплотой и взаимопониманием.
                  </p>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-4 bg-gradient-to-br from-bright-purple/10 to-bright-pink/10 border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="text-center pt-0">
                    <Icon name="GraduationCap" className="mx-auto mb-2 text-bright-purple" size={32} />
                    <h3 className="font-semibold text-bright-gray">Образование</h3>
                    <p className="text-sm text-bright-gray/80">Высшее экономическое</p>
                  </CardContent>
                </Card>
                
                <Card className="p-4 bg-gradient-to-br from-bright-emerald/10 to-bright-purple/10 border-0 hover:shadow-lg transition-all duration-300">
                  <CardContent className="text-center pt-0">
                    <Icon name="Languages" className="mx-auto mb-2 text-bright-emerald" size={32} />
                    <h3 className="font-semibold text-bright-gray">Языки</h3>
                    <p className="text-sm text-bright-gray/80">Русский, Английский</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: "Smile", text: "Позитивный настрой" },
                { icon: "Shield", text: "Конфиденциальность" },
                { icon: "Crown", text: "Индивидуальный подход" },
                { icon: "Clock", text: "Пунктуальность" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/80 rounded-lg backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
                  <div className="p-3 bg-gradient-to-r from-bright-purple to-bright-pink rounded-full">
                    <Icon name={item.icon as any} className="text-white" size={20} />
                  </div>
                  <span className="text-lg font-medium text-bright-gray">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-bright-pink to-bright-purple bg-clip-text text-transparent">
              Услуги
            </h2>
            <p className="text-xl text-bright-gray max-w-3xl mx-auto">
              Каждая встреча - это уникальная история, созданная специально для вас
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Вечерние встречи",
                description: "Элегантные ужины в ресторанах премиум-класса, светские мероприятия и культурные события",
                icon: "Wine",
                gradient: "from-bright-purple to-bright-pink"
              },
              {
                title: "Деловое сопровождение",
                description: "Презентации, бизнес-встречи, корпоративные мероприятия с безупречным стилем",
                icon: "Briefcase",
                gradient: "from-bright-pink to-bright-emerald"
              },
              {
                title: "Путешествия",
                description: "Незабываемые поездки и отдых в самых красивых местах мира",
                icon: "Plane",
                gradient: "from-bright-emerald to-bright-purple"
              }
            ].map((service, index) => (
              <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-scale-in">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-bright-gray group-hover:text-bright-purple transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-bright-gray/80 leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-bright-emerald to-bright-purple bg-clip-text text-transparent">
              Отзывы
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Александр",
                text: "Анастасия превзошла все мои ожидания. Вечер прошёл идеально!",
                rating: 5
              },
              {
                name: "Михаил",
                text: "Профессионализм на высшем уровне. Рекомендую всем друзьям.",
                rating: 5
              },
              {
                name: "Дмитрий",
                text: "Незабываемое путешествие с прекрасной компанией.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-bright-gray/80 italic mb-4">"{review.text}"</p>
                  <p className="font-semibold text-bright-purple">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-bright-purple to-bright-pink">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Готова ответить на ваши вопросы и обсудить детали встречи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-bright-purple font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (XXX) XXX-XX-XX
            </Button>
            <Button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-bright-purple font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Telegram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
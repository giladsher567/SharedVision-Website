
import { MessageSquare, Bot, Users, TrendingUp, Calendar, Zap, Sparkles, Rocket, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Services() {
  const introAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const services = [
    {
      icon: MessageSquare,
      title: "צ'אטבוטים לווצאפ",
      subtitle: "מענה אוטומטי 24/7 שחוסך זמן ומכסות לקוחות",
      description: "צ'אטבוט חכם שמטפל בפניות לקוחות, קובע פגישות ומספק מידע על מוצרים ושירותים. הפתרון הזה מושלם לעסקים שמקבלים הרבה הודעות בווצאפ ורוצים לשפר את השירות מבלי להוסיף עובדים.",
      benefits: [
        "חסכון של 5-10 שעות עבודה בשבוע",
        "מענה מיידי לכל לקוח, גם בלילה",
        "מידע עדכני על מוצרים ומחירים",
        "קביעת פגישות אוטומטית"
      ],
      perfectFor: "מתאים לחנויות, קליניקות, שירותים ועסקים עם תקשורת לקוחות רבה",
      gradient: "from-green-500 to-turquoise-tech"
    },
    {
      icon: Users,
      title: "מערכות CRM מותאמות",
      subtitle: "ניהול לקוחות חכם שמגדיל מכירות",
      description: "מערכת ניהול לקוחות שמאחדת את כל המידע - פרטי לקוחות, היסטוריית קניות, תזכורות למעקב ודוחות מכירות. הכל במקום אחד, עם התראות אוטומטיות שעוזרות לא לאבד לקוחות.",
      benefits: [
        "עלייה של 25% ברווחיות לקוח",
        "תזכורות אוטומטיות למעקב",
        "דוחות מכירות מתקדמים",
        "מעקב אחר כל אינטראקציה עם הלקוח"
      ],
      perfectFor: "מתאים לעסקי שירותים, סוכנויות, יועצים ועסקים עם לקוחות חוזרים",
      gradient: "from-purple-future to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "פרסום אוטומטי ברשתות",
      subtitle: "תוכן שוטף שמביא לקוחות חדשים",
      description: "מערכת שיוצרת ומפרסמת תוכן באינסטגרם, פייסבוק ולינקדאין באופן אוטומטי. כוללת יצירת פוסטים, סטוריז ותמונות מותאמות לעסק שלכם, בלי שתצטרכו לחשוב על זה כל יום.",
      benefits: [
        "פרסום יומי ללא מאמץ",
        "עלייה של 40% בחשיפה ברשתות",
        "תוכן מותאם לקהל היעד",
        "חסכון של 10 שעות עבודה בשבוע"
      ],
      perfectFor: "מתאים לכל עסק שרוצה נוכחות חזקה ברשתות חברתיות",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      icon: Calendar,
      title: "קביעת פגישות אוטומטית",
      subtitle: "לוח זמנים שמנהל את עצמו",
      description: "מערכת שמאפשרת ללקוחות לקבוע פגישות ישירות דרך האתר או הווצאפ, עם סנכרון אוטומטי ללוח הזמנים שלכם. כוללת תזכורות אוטומטיות ללקוחות והכנה לפגישות.",
      benefits: [
        "הפחתה של 70% בזמן תיאום פגישות",
        "פחות ביטולים בזמן האחרון",
        "תזכורות אוטומטיות ללקוחות",
        "סנכרון עם כל לוחות הזמנים"
      ],
      perfectFor: "מתאים ליועצים, קליניקות, מעצבים ומכירות",
      gradient: "from-turquoise-tech to-blue-600"
    },
    {
      icon: Bot,
      title: "אוטומציה מותאמת",
      subtitle: "פתרונות ייחודיים לעסק שלכם",
      description: "פתרונות אוטומציה מותאמים במיוחד לתהליכים הייחודיים של העסק שלכם. מניהול מלאי ועד עיבוד הזמנות, אנחנו בונים פתרונות שחוסכים זמן במקומות שאתם הכי צריכים.",
      benefits: [
        "פתרון מותאם בדיוק לצרכים שלכם",
        "חסכון משמעותי בזמן ובכסף",
        "הפחתה דרמטית בטעויות אנוש",
        "שיפור תהליכים קיימים"
      ],
      perfectFor: "מתאים לכל עסק עם תהליכים חוזרים ומורכבים",
      gradient: "from-purple-600 to-indigo-600"
    }
  ];

  return (
    <div>
      {/* Intro Section */}
      <section className="py-20 md:py-32 text-center px-4">
        <div className="container">
          <div ref={introAnimation} className="mx-auto animate-on-scroll">
            <h1 className="font-heebo text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            פתרונות טכנולוגיים <br className="md:hidden" />
            <span className="gradient-text">שמשנים את העסק שלכם</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-light-gray mb-8">
            אל תבזבזו זמן יקר על משימות חוזרות. הפתרונות שלנו יעשו את העבודה בשבילכם, <br className="hidden md:block" />
            כך שתוכלו להתמקד בגדילה ובלקוחות החדשים.
          </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 md:pb-32">
        <div ref={servicesAnimation} className="container mx-auto px-4 animate-on-scroll">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Service Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-4 shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heebo text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                      <p className="text-turquoise-tech font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-light-gray text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-heebo text-lg font-bold text-white mb-3">מה זה נותן לכם:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-turquoise-tech mt-0.5 flex-shrink-0" />
                          <span className="text-light-gray">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 border border-turquoise-tech/30 rounded-lg">
                    <p className="text-sm">
                      <span className="font-bold text-turquoise-tech">מושלם עבור: </span>
                      <span className="text-light-gray">{service.perfectFor}</span>
                    </p>
                  </div>
                </div>

                {/* Service Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`p-8 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-2xl`}>
                    <div className="text-center text-white">
                      <service.icon className="w-24 h-24 mx-auto mb-6 opacity-90" />
                      <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
                      <p className="text-lg opacity-90">{service.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 text-center px-4">
        <div ref={ctaAnimation} className="container mx-auto animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-future to-turquoise-tech p-5 shadow-lg">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="font-heebo text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              מוכנים להתחיל לחסוך זמן?
            </h2>
            <p className="text-lg md:text-xl text-light-gray mb-8 max-w-2xl mx-auto">
              בפגישת ייעוץ קצרה של 30 דקות, נבחן יחד איך הפתרונות שלנו יכולים לשפר את העסק שלכם.
              <span className="block font-semibold text-white mt-2">ללא עלות, ללא התחייבות.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+972508522528" 
                className="btn btn-primary text-lg px-8 py-4"
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  חייגו עכשיו: 050-852-2528
                </span>
              </a>
              <a 
                href="https://wa.me/972508522528?text=שלום, אני מעוניין לשמוע על הפתרונות שלכם" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  שלחו הודעה בווצאפ
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { Calendar, FileText, CheckCircle, Zap, RefreshCw, Timer, BarChart3, AlertTriangle, Brain, Settings, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "wouter";

export default function Home() {
  const heroRef = useScrollAnimation();
  const painPointsRef = useScrollAnimation();
  const solutionsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden px-4">
        <div className="container">
          <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto animate-on-scroll mt-24">
          <h1 className="font-heebo text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            תפסיקו לבזבז זמן על עבודה ידנית.<br className="hidden md:block" /> 
            <span className="gradient-text">תתחילו לצמוח עם פתרונות חכמים.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-light-gray">
            SharedVision בונה מערכות AI ואוטומציה מותאמות אישית לעסק שלך, שחוסכות לך זמן יקר, כסף וטעויות אנוש. 
            אנחנו הופכים אתגרים תפעוליים להזדמנויות צמיחה.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link href="/contact" className="btn btn-primary text-lg px-8 py-4 hover-lift">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                קבע ייעוץ חינם (30 דקות)
              </span>
            </Link>
            <Link href="/case-studies" className="btn btn-secondary text-lg hover-lift">
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                סיפורי הצלחה
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm glass-card py-3 px-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-turquoise-tech" />
              <span>ללא התחייבות</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-turquoise-tech" />
              <span>פתרונות מותאמים אישית</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-turquoise-tech" />
              <span>ROI מוכח</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-12">
            <div className="glass-card text-turquoise-tech font-bold py-2 px-6 rounded-full border border-purple-future/30 pulse max-w-xs text-center">
              <span className="flex items-center justify-center gap-2 text-sm">
                <Zap className="w-4 h-4" />
                חוסכים ללקוחות שלנו בממוצע 12+ שעות עבודה בשבוע
              </span>
            </div>
          </div>
          
          <div ref={painPointsRef} className="animate-on-scroll">
            <h2 className="font-heebo text-3xl md:text-5xl font-bold text-white mb-4">נשמע מוכר?</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-light-gray">
              בעלי עסקים רבים מרגישים שהם עובדים <span className="font-semibold text-white">בתוך</span> העסק 
              במקום לעבוד <span className="font-semibold text-white">על</span> העסק. אנחנו מבינים את האתגרים שמונעים מכם לצמוח.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
            <div className="glass-card hover-lift stagger-item p-6">
              <div className="w-16 h-16 rounded-full bg-purple-future/20 flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heebo text-xl font-bold text-white mb-2">תהליכים ידניים ומסורבלים</h3>
              <p>משימות שחוזרות על עצמן, גוזלות זמן יקר מהצוות ופותחות פתח לטעויות.</p>
            </div>
            <div className="glass-card hover-lift stagger-item p-6">
              <div className="w-16 h-16 rounded-full bg-purple-future/20 flex items-center justify-center mx-auto mb-4">
                <Timer className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heebo text-xl font-bold text-white mb-2">בזבוז זמן יקר</h3>
              <p>שעות עבודה שהולכות לאיבוד על תיאומים, הזנת נתונים והפקת דוחות.</p>
            </div>
            <div className="glass-card hover-lift stagger-item p-6">
              <div className="w-16 h-16 rounded-full bg-purple-future/20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heebo text-xl font-bold text-white mb-2">חוסר בנתונים לקבלת החלטות</h3>
              <p>החלטות שמבוססות על תחושת בטן במקום על מידע מדויק ומהימן.</p>
            </div>
            <div className="glass-card hover-lift stagger-item p-6">
              <div className="w-16 h-16 rounded-full bg-purple-future/20 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heebo text-xl font-bold text-white mb-2">טעויות אנוש יקרות</h3>
              <p>שגיאות קטנות שמובילות לאובדן הכנסה, פגיעה במוניטין ובחוויית הלקוח.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 md:py-32">
        <div ref={solutionsRef} className="container mx-auto px-4 animate-on-scroll">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block glass-card px-4 py-1 rounded-full mb-4">
              <span className="text-turquoise-tech font-bold text-sm">פתרונות מותאמים אישית</span>
            </div>
            <h2 className="font-heebo text-3xl md:text-5xl font-bold text-white mb-4">הפתרונות שלנו לעסק שלך</h2>
            <p className="text-lg md:text-xl text-light-gray">
              אנחנו לא מוכרים מוצר מדף. אנחנו מפתחים פתרון מדויק שנבנה סביב הצרכים, התהליכים והמטרות של העסק שלך.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card hover-lift stagger-item p-6 h-full border-r-4 border-purple-future">
              <div className="w-16 h-16 rounded-full bg-purple-future/20 flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heebo text-2xl font-bold text-white mb-3">הטמעת AI חכמה</h3>
              <p>הפכו את הדאטה שלכם לנכס אסטרטגי. אנו בונים מערכות שמספקות תובנות עסקיות, מזהות הזדמנויות ומשפרות את קבלת ההחלטות.</p>
            </div>
            <div className="glass-card hover-lift stagger-item p-6 h-full border-r-4 border-turquoise-tech">
              <div className="w-16 h-16 rounded-full bg-turquoise-tech/20 flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heebo text-2xl font-bold text-white mb-3">אוטומציה של תהליכים</h3>
              <p>שחררו את הצוות שלכם לעבודה החשובה באמת. אנו ממפים וממכנים תהליכים עסקיים, מניהול לידים ועד שירות לקוחות.</p>
            </div>
            <div className="glass-card hover-lift stagger-item p-6 h-full border-r-4 border-purple-future">
              <div className="w-16 h-16 rounded-full bg-purple-future/20 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heebo text-2xl font-bold text-white mb-3">ייעוץ טכנולוגי</h3>
              <p>מהטרנדים החמים ועד הפתרונות המתאימים לכם. אנו מלווים אתכם בבחירת הטכנולוגיות הנכונות להשגת המטרות העסקיות.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 text-center">
        <div ref={ctaRef} className="container mx-auto px-4 animate-on-scroll">
          <h2 className="font-heebo text-3xl md:text-5xl font-bold text-white mb-6">מוכנים לראות איך זה עובד?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-light-gray">
            קבעו פגישת ייעוץ ללא עלות ובואו נגלה יחד איזה פתרונות יכולים לשנות את העסק שלכם.
          </p>
          <Link href="/contact" className="btn btn-primary text-lg px-8 py-4 hover-lift">
            קבע פגישה עכשיו
          </Link>
        </div>
      </section>
    </div>
  );
}

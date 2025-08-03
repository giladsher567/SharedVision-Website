import { Target, Eye, Heart, Star, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "wouter";

export default function About() {
  const introRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const teamRef = useScrollAnimation();

  return (
    <div>
      {/* Intro Section */}
      <section className="py-20 md:py-32 text-center px-4">
        <div className="container">
          <div ref={introRef} className="mx-auto animate-on-scroll">
            <h1 className="font-heebo text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            מי אנחנו?<br />
            <span className="gradient-text">הסיפור שלנו</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-light-gray mb-12">
            SharedVision נוסדה מתוך הבנה פשוטה: כל עסק ראוי לטכנולוגיה שמתאימה לו באמת. 
            אנחנו מאמינים שפתרונות טכנולוגיים צריכים להיות נגישים, מותאמים אישית, ומתמקדים בתוצאות מדידות.
          </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div ref={missionRef} className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="glass-card p-8">
                <div className="w-16 h-16 rounded-full bg-purple-future/20 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-heebo text-3xl font-bold text-white mb-4">המטרה שלנו</h2>
                <p className="text-light-gray text-lg leading-relaxed">
                  לעזור לעסקים לצמוח ולהתפתח באמצעות טכנולוגיה חכמה ומותאמת אישית. 
                  אנחנו מאמינים שכל עסק יכול להפוך לחכם יותר, יעיל יותר ורווחי יותר עם הכלים הנכונים.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="glass-card p-8">
                <div className="w-16 h-16 rounded-full bg-turquoise-tech/20 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-heebo text-3xl font-bold text-white mb-4">החזון שלנו</h2>
                <p className="text-light-gray text-lg leading-relaxed">
                  עולם שבו כל בעל עסק יכול להתמקד במה שהוא אהוב ומיטיב לעשות, בזמן שהטכנולוגיה דואגת לשאר. 
                  אנחנו רוצים להיות השותפים שלכם במסע הזה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32">
        <div ref={valuesRef} className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heebo text-3xl md:text-5xl font-bold text-white mb-4">הערכים שלנו</h2>
            <p className="text-lg md:text-xl text-light-gray max-w-2xl mx-auto">
              הערכים האלה מנחים כל החלטה שאנחנו מקבלים ואת כל פתרון שאנחנו בונים
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center hover-lift animate-on-scroll">
              <div className="w-16 h-16 rounded-full bg-purple-future/20 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heebo text-xl font-bold text-white mb-3">שקיפות מלאה</h3>
              <p className="text-light-gray">אנחנו מאמינים בעבודה פתוחה ובתקשורת ברורה. אתם תמיד תדעו מה קורה ולמה.</p>
            </div>
            <div className="glass-card p-6 text-center hover-lift animate-on-scroll">
              <div className="w-16 h-16 rounded-full bg-turquoise-tech/20 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heebo text-xl font-bold text-white mb-3">איכות ללא פשרות</h3>
              <p className="text-light-gray">אנחנו לא מתפשרים על איכות. כל פתרון שאנחנו בונים עובר בדיקות קפדניות ומותאם בדיוק לצרכים שלכם.</p>
            </div>
            <div className="glass-card p-6 text-center hover-lift animate-on-scroll">
              <div className="w-16 h-16 rounded-full bg-purple-future/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heebo text-xl font-bold text-white mb-3">תוצאות מדידות</h3>
              <p className="text-light-gray">אנחנו מאמינים בנתונים. כל פתרון שלנו מתוכנן להביא תוצאות ברורות ומדידות לעסק שלכם.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div ref={teamRef} className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heebo text-3xl md:text-5xl font-bold text-white mb-4">הצוות שלנו</h2>
            <p className="text-lg md:text-xl text-light-gray max-w-2xl mx-auto">
              צוות של מומחי טכנולוגיה, יועצי עסקים ובעלי חזון שמחויבים להצלחה שלכם
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center hover-lift animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="מנהל פרויקטים" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-heebo text-xl font-bold text-white mb-2">דוד כהן</h3>
              <p className="text-purple-future font-semibold mb-2">מנהל טכנולוגיות</p>
              <p className="text-light-gray text-sm">15 שנות ניסיון בפיתוח פתרונות AI ואוטומציה לעסקים</p>
            </div>
            <div className="glass-card p-6 text-center hover-lift animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="יועצת עסקית" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-heebo text-xl font-bold text-white mb-2">שרה לוי</h3>
              <p className="text-purple-future font-semibold mb-2">יועצת אסטרטגיה עסקית</p>
              <p className="text-light-gray text-sm">מומחית לאפיון תהליכים עסקיים ובניית מפות דרכים טכנולוגיות</p>
            </div>
            <div className="glass-card p-6 text-center hover-lift animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="מפתח ראשי" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-heebo text-xl font-bold text-white mb-2">מיכאל רוזן</h3>
              <p className="text-purple-future font-semibold mb-2">מפתח ראשי</p>
              <p className="text-light-gray text-sm">מומחה בפיתוח מערכות מורכבות ושילוב טכנולוגיות מתקדמות</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

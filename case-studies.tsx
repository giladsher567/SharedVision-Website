import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "wouter";

export default function CaseStudies() {
  const introRef = useScrollAnimation();
  const caseStudiesRef = useScrollAnimation();

  return (
    <div>
      {/* Intro Section */}
      <section className="py-20 md:py-32 text-center px-4">
        <div className="container">
          <div ref={introRef} className="mx-auto animate-on-scroll">
            <h1 className="font-heebo text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            הצלחה היא לא סיסמה,<br /> 
            <span className="gradient-text">היא תוצאה מוכחת.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-light-gray">
            אנחנו גאים לעבוד עם עסקים מדהימים במגוון תחומים ולעזור להם לצמוח. כאן תוכלו לקרוא על אתגרים אמיתיים 
            ועל הפתרונות המותאמים אישית שבנינו עבורם, ובעיקר – על התוצאות.
          </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32">
        <div ref={caseStudiesRef} className="container mx-auto px-4 space-y-16 lg:space-y-24 max-w-5xl">
          
          {/* Case Study 1: Talent Agency */}
          <div className="p-8 md:p-12 animate-on-scroll">
            <h2 className="font-heebo text-2xl md:text-4xl font-bold text-white mb-2">
              סיפור לקוח #1: סוכנות לייצוג שחקנים
            </h2>
            <p className="gradient-text font-heebo font-bold text-lg md:text-xl mb-8">
              איך חסכנו 15 שעות עבודה שבועיות עם מערכת CRM חכמה
            </p>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <strong className="font-semibold text-white">האתגר:</strong> סוכנות שחקנים מובילה ניהלה מאות שחקנים, 
                אודישנים ופרויקטים באמצעות אימיילים וגיליונות אקסל מרובים. התהליך היה איטי, מסורבל, ומלא בטעויות ידניות. 
                סוכנים בזבזו זמן יקר על תיאומים במקום על פיתוח קשרים, והיה קשה לקבל תמונת מצב כוללת על הפעילות.
              </p>
              <p>
                <strong className="font-semibold text-white">הפתרון של SharedVision:</strong> לאחר תהליך אפיון מעמיק, 
                בנינו מערכת CRM מותאמת אישית על תשתית גמישה. המערכת ריכזה את כל נתוני השחקנים, האודישנים והפרויקטים במקום אחד. 
                פיתחנו מודולים אוטומטיים לשליחת הצעות לאודישנים, תזכורות, וניהול חוזים.
              </p>
              <div>
                <strong className="font-semibold text-white">התוצאות:</strong>
                <ul className="list-disc list-inside space-y-2 mt-2 text-turquoise-tech">
                  <li><strong>חיסכון של 15 שעות עבודה</strong> בממוצע בשבוע על משימות אדמיניסטרציה.</li>
                  <li><strong>ירידה של 80%</strong> בטעויות שיבוץ ותיאום.</li>
                  <li><strong>עלייה של 30%</strong> בכמות האודישנים שהסוכנות הצליחה לנהל מדי חודש.</li>
                  <li>דשבורד ניהולי סיפק תמונת מצב בזמן אמת והקל על קבלת החלטות.</li>
                </ul>
              </div>
            </div>
            <blockquote className="mt-8 pt-6 border-t border-gray-700/50 text-xl italic text-white leading-relaxed">
              "המערכת ש-SharedVision בנו לנו היא לא פחות ממדהימה. היא שינתה את כל צורת העבודה שלנו והחזירה לנו את היכולת 
              להתמקד במה שחשוב באמת – הלקוחות שלנו."
              <cite className="block not-italic text-base font-semibold text-light-gray mt-4">- מנכ"לית הסוכנות</cite>
            </blockquote>
          </div>

          {/* Case Study 2: Investment Firm */}
          <div className="p-8 md:p-12 animate-on-scroll">
            <h2 className="font-heebo text-2xl md:text-4xl font-bold text-white mb-2">
              סיפור לקוח #2: משרד לייעוץ השקעות
            </h2>
            <p className="gradient-text font-heebo font-bold text-lg md:text-xl mb-8">
              ייעול תהליכי דיווח והגברת אמון הלקוחות
            </p>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <strong className="font-semibold text-white">האתגר:</strong> משרד בוטיק לייעוץ השקעות התמודד עם תהליך מורכב 
                וידני של הפקת דוחות רבעוניים ללקוחות. התהליך כלל איסוף נתונים ממספר מקורות, חישובים ידניים באקסל ועיצוב מסמכים, 
                ונמשך ימים ארוכים. התוצאה הייתה לא אחידה, חשופה לטעויות, וגרמה לעיכובים בהפצה.
              </p>
              <p>
                <strong className="font-semibold text-white">הפתרון של SharedVision:</strong> פיתחנו מערכת אוטומטית שמתממשקת 
                למקורות הנתונים של המשרד. המערכת שואבת את המידע העדכני, מבצעת את החישובים הנדרשים, ומפיקה דוחות PDF 
                מותאמים אישית ומעוצבים לכל לקוח בלחיצת כפתור.
              </p>
              <div>
                <strong className="font-semibold text-white">התוצאות:</strong>
                <ul className="list-disc list-inside space-y-2 mt-2 text-turquoise-tech">
                  <li><strong>צמצום זמן הפקת הדוחות מ-4 ימים ל-3 שעות.</strong></li>
                  <li><strong>הפחתה של 100%</strong> בטעויות הנובעות מהזנת נתונים ידנית.</li>
                  <li>שיפור דרמטי באחידות ובמקצועיות של הדוחות.</li>
                  <li>עלייה משמעותית בשביעות רצון ואמון הלקוחות בזכות דיווחים מהירים ומדויקים.</li>
                </ul>
              </div>
            </div>
            <blockquote className="mt-8 pt-6 border-t border-gray-700/50 text-xl italic text-white leading-relaxed">
              "הפתרון של SharedVision לא רק חסך לנו המון כסף וזמן, הוא שדרג את רמת השירות שאנחנו נותנים ללקוחות שלנו. 
              זה נכס אסטרטגי עבורנו."
              <cite className="block not-italic text-base font-semibold text-light-gray mt-4">- שותף מנהל במשרד</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

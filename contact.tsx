import { useState } from "react";
import { Calendar, CheckCircle, Shield, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const introRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  const processRef = useScrollAnimation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    businessField: '',
    challenge: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "טופס נשלח בהצלחה!",
      description: "נחזור אליכם תוך יום עסקים אחד.",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      businessField: '',
      challenge: ''
    });
  };

  return (
    <div>
      {/* Intro Section */}
      <section className="py-20 md:py-32 text-center px-4">
        <div className="container">
          <div ref={introRef} className="mx-auto animate-on-scroll">
            <h1 className="font-heebo text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            קבע פגישת ייעוץ <span className="gradient-text">וגלה כמה זמן וכסף תוכל לחסוך</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-light-gray mb-8">
            בפגישה קצרה של 30 דקות, נבחן יחד את האתגרים התפעוליים של העסק שלך ונציע פתרונות AI ואוטומציה שיכולים לחסוך לך{' '}
            <span className="font-semibold text-white">עשרות שעות עבודה בחודש</span> ולמנוע טעויות יקרות.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-turquoise-tech" />
              <span>ייעוץ ללא עלות</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-turquoise-tech" />
              <span>ללא התחייבות</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-turquoise-tech" />
              <span>30 דקות בלבד</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 md:pb-32">
        <div ref={contactRef} className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side: Contact Form */}
            <div className="p-8 md:p-12 animate-on-scroll">
              <h2 className="font-heebo text-3xl font-bold text-white text-center mb-8">השאירו פרטים לייעוץ ראשוני</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="block text-sm font-medium text-light-gray mb-2">שם מלא</Label>
                    <Input
                      type="text"
                      name="fullName"
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyName" className="block text-sm font-medium text-light-gray mb-2">שם החברה</Label>
                    <Input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-light-gray mb-2">דוא"ל</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-light-gray mb-2">טלפון</Label>
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="businessField" className="block text-sm font-medium text-light-gray mb-2">תחום פעילות העסק</Label>
                  <Input
                    type="text"
                    name="businessField"
                    id="businessField"
                    value={formData.businessField}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <Label htmlFor="challenge" className="block text-sm font-medium text-light-gray mb-2">
                    מהו האתגר המרכזי שאתם מחפשים לו פתרון?
                  </Label>
                  <Textarea
                    name="challenge"
                    id="challenge"
                    rows={4}
                    value={formData.challenge}
                    onChange={handleInputChange}
                    placeholder="אנא תארו בקצרה את הבעיה או התהליך שאתם רוצים לשפר..."
                    className="form-input"
                  />
                </div>
                <div className="text-center pt-4">
                  <Button type="submit" className="btn btn-primary w-full">שלח פרטים</Button>
                </div>
                <p className="text-center text-sm text-light-gray/70 mt-4">אנו מתחייבים לחזור אליכם תוך יום עסקים אחד</p>
              </form>
            </div>
            
            {/* Right side: Direct Scheduling */}
            <div className="p-8 md:p-12 animate-on-scroll">
              <h2 className="font-heebo text-3xl font-bold text-white text-center mb-8">קבע פגישה ישירות ביומן</h2>
              <p className="text-center mb-6">אין צורך לחכות - בחר מועד פנוי ביומן וקבע פגישת ייעוץ ללא עלות (30 דקות)</p>
              
              {/* Calendar scheduling placeholder */}
              <div className="p-8 text-center min-h-[400px] flex flex-col justify-center items-center">
                <Calendar className="w-16 h-16 text-turquoise-tech mb-4" />
                <h3 className="font-heebo text-xl font-bold text-white mb-4">לוח זמנים אינטראקטיבי</h3>
                <p className="text-light-gray mb-6">כאן יופיע לוח זמנים אינטראקטיבי לקביעת פגישה</p>
                <Button className="btn btn-primary">קבע פגישה עכשיו</Button>
              </div>
              
              <div className="flex items-center justify-center mt-6 gap-2">
                <ShieldCheck className="w-5 h-5 text-turquoise-tech" />
                <p className="text-sm text-light-gray/70">הפגישה אינה מחייבת המשך התקשרות</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next & Testimonials */}
      <section className="pb-20 md:pb-32">
        <div ref={processRef} className="container mx-auto px-4 max-w-5xl animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side: What Happens Next */}
            <div>
              <h3 className="font-heebo text-2xl md:text-3xl font-bold text-white mb-8 text-center lg:text-right">
                מה קורה בפגישת הייעוץ?
              </h3>
              <div className="process-timeline">
                <div className="process-step flex items-start gap-4">
                  <div className="process-step-number flex-shrink-0">1</div>
                  <div className="process-step-content">
                    <h4 className="font-bold text-white text-lg">הבנת האתגרים</h4>
                    <p>נקשיב ונלמד על העסק שלך והאתגרים התפעוליים שאתם מתמודדים איתם.</p>
                  </div>
                </div>
                <div className="process-step flex items-start gap-4">
                  <div className="process-step-number flex-shrink-0">2</div>
                  <div className="process-step-content">
                    <h4 className="font-bold text-white text-lg">זיהוי הזדמנויות</h4>
                    <p>נזהה תהליכים שניתן לייעל באמצעות אוטומציה ו-AI ונעריך את החיסכון הפוטנציאלי.</p>
                  </div>
                </div>
                <div className="process-step flex items-start gap-4">
                  <div className="process-step-number flex-shrink-0">3</div>
                  <div className="process-step-content">
                    <h4 className="font-bold text-white text-lg">הצעת פתרונות</h4>
                    <p>נציע פתרונות מותאמים אישית שיכולים לחסוך לכם זמן, כסף וטעויות אנוש.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-3 bg-space-deep p-4 rounded-lg">
                  <Shield className="w-6 h-6 text-turquoise-tech" />
                  <p className="text-sm">אנחנו מכבדים את הפרטיות שלכם. המידע שתמסרו ישמש אך ורק ליצירת קשר בנוגע לפנייתכם.</p>
                </div>
                
                {/* Direct Contact Options */}
                <div className="p-4">
                  <h4 className="font-heebo font-bold text-white mb-3 text-center lg:text-right">צרו קשר ישירות</h4>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start lg:mr-[12.5%]">
                    <a 
                      href="tel:+972508522528" 
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-turquoise-tech text-space-deep rounded-lg font-medium hover:bg-turquoise-tech/90 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5h-2C7.492 18 2 12.508 2 5.5V3.5z" clipRule="evenodd" />
                      </svg>
                      חייגו: 050-852-2528
                    </a>
                    <a 
                      href="https://wa.me/972508522528?text=שלום, אני מעוניין לקבל מידע על פתרונות AI ואוטומציה לעסק שלי" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
                      </svg>
                      שלחו הודעה בווצאפ
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side: Testimonials */}
            <div>
              <h3 className="font-heebo text-2xl md:text-3xl font-bold text-white mb-8 text-center lg:text-right">מה לקוחות אומרים</h3>
              <div className="space-y-6">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-future/30 flex items-center justify-center text-white font-bold">מ.ש</div>
                    <div>
                      <h4 className="font-bold text-white">מנכ"ל סוכנות שחקנים</h4>
                      <p className="text-light-gray text-sm">תל אביב</p>
                    </div>
                  </div>
                  <p className="text-light-gray italic">
                    "הייעוץ הראשוני היה מדויק ומקצועי. הם הבינו מיד איפה הבעיות והציעו פתרונות מעשיים שחסכו לנו זמן ופיתחו את העסק."
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-turquoise-tech/30 flex items-center justify-center text-white font-bold">ד.כ</div>
                    <div>
                      <h4 className="font-bold text-white">שותף במשרד ייעוץ השקעות</h4>
                      <p className="text-light-gray text-sm">רמת גן</p>
                    </div>
                  </div>
                  <p className="text-light-gray italic">
                    "הפגישה הראשונה הייתה בדיוק מה שצריכנו. הם הסבירו איך הטכנולוגיה יכולה לעזור לנו ונתנו לנו תמונה ברורה של התועלת."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

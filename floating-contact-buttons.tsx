import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Phone, MessageSquare } from "lucide-react";

export default function FloatingContactButtons() {
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    // Initial check to set visibility based on scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrolledEnough = scrollTop > window.innerHeight / 3;
    if (isScrolledEnough) {
      setIsVisible(true);
    }
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = scrollTop > lastScrollTop;
      const isScrolledEnough = scrollTop > window.innerHeight / 3; // Changed from /2 to /3 to show earlier
      
      if (isScrolledEnough && isScrollingDown) {
        setIsVisible(true);
      } else if (!isScrolledEnough || !isScrollingDown) {
        setIsVisible(false);
      }
      
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  // Don't show on contact page
  if (location === '/contact') {
    return null;
  }

  return (
    <div className={`fixed bottom-6 right-6 z-30 flex flex-col gap-3 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`} style={{ pointerEvents: isVisible ? 'auto' : 'none' }}>
      <a 
        href="tel:+972508522528" 
        className="flex items-center justify-center w-12 h-12 rounded-full bg-turquoise-tech text-space-deep shadow-lg hover:bg-turquoise-tech/90 transition-colors"
        aria-label="התקשר אלינו"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a 
        href="https://wa.me/972508522528?text=שלום, אני מעוניין לקבל מידע על פתרונות AI ואוטומציה לעסק שלי" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        aria-label="שלח הודעת וואטסאפ"
      >
        <MessageSquare className="w-5 h-5" />
      </a>
    </div>
  );
}
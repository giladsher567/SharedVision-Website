import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Calendar } from "lucide-react";

export default function FloatingCTA() {
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
    <div className={`fixed bottom-6 left-6 z-30 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`} style={{ pointerEvents: isVisible ? 'auto' : 'none' }}>
      <Link href="/contact" className="btn btn-primary shadow-lg hover-lift">
        <span className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          קבע ייעוץ חינם
        </span>
      </Link>
    </div>
  );
}

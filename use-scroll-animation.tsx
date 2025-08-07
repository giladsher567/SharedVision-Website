import { useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    staggerDelay = 100
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Animate stagger items
          const staggerItems = entry.target.querySelectorAll('.stagger-item');
          if (staggerItems.length > 0) {
            staggerItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-in');
              }, index * staggerDelay);
            });
          }
        }
      });
    }, { threshold, rootMargin });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, staggerDelay]);

  return ref;
}


import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Remove initial opacity and transform
          element.style.opacity = '1';
          element.style.transform = 'translateY(0) translateX(0) scale(1)';
          
          // Add visible class for CSS animations
          element.classList.add('animate-visible');
          
          // Animate child elements with delay
          const animatedChildren = element.querySelectorAll('.animate-on-scroll');
          animatedChildren.forEach((child, index) => {
            setTimeout(() => {
              (child as HTMLElement).style.opacity = '1';
              (child as HTMLElement).style.transform = 'translateY(0) translateX(0) scale(1)';
              child.classList.add('animate-visible');
            }, index * 100);
          });

          // Animate slideshow items
          const slideshowItems = element.querySelectorAll('.slideshow-item');
          slideshowItems.forEach((item, index) => {
            setTimeout(() => {
              (item as HTMLElement).style.opacity = '1';
              (item as HTMLElement).style.transform = 'translateY(0) scale(1)';
              item.classList.add('animate-visible');
            }, index * 200);
          });
        }
      });
    }, observerOptions);

    // Observe all sections and animated elements
    const elementsToObserve = document.querySelectorAll(
      '.animate-slide-in-view, .animate-on-scroll, .slideshow-item'
    );
    
    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

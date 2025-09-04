import React, { useRef, useEffect, useCallback } from 'react';
import './CircularGallery.css';

const CircularGallery = ({ items, bend = 3, scrollEase = 0.05, renderItem }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef({ current: 0, target: 0, last: 0, position: 0 });
  const childrenRef = useRef([]);
  const isDown = useRef(false);
  const startX = useRef(0);

  const update = useCallback(() => {
    if (!containerRef.current || childrenRef.current.length === 0) return;

    scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * scrollEase;

    const totalWidth = childrenRef.current.reduce((acc, el) => acc + (el ? el.offsetWidth : 0), 0) + (childrenRef.current.length * 5); // 5px margin
    
    // **الجزء الجديد:** إدارة التكرار اللانهائي
    if (scrollRef.current.current < -totalWidth) {
      scrollRef.current.current += totalWidth;
      scrollRef.current.target += totalWidth;
    } else if (scrollRef.current.current > totalWidth) {
      scrollRef.current.current -= totalWidth;
      scrollRef.current.target -= totalWidth;
    }

    const halfContainerWidth = containerRef.current.offsetWidth / 2;

    childrenRef.current.forEach((child, index) => {
      if (!child) return;
      
      const itemWidth = child.offsetWidth + 5; // 5px margin
      const offset = - (totalWidth / 2);
      const x = (index * itemWidth) + offset + scrollRef.current.current;
      
      const rotation = (x / halfContainerWidth) * bend;
      const translateY = (Math.sin(rotation / bend) * 50);

      child.style.transform = `
        translateX(${x}px)
        translateY(${translateY}px)
        rotateY(${rotation}deg)
      `;
    });

    requestAnimationFrame(update);
  }, [bend, scrollEase, items]);

  const onTouchDown = useCallback((e) => {
    isDown.current = true;
    startX.current = e.clientX || e.touches[0].clientX;
    scrollRef.current.position = scrollRef.current.current;
    containerRef.current.classList.add('grabbing');
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.clientX || e.touches[0].clientX;
    const distance = (startX.current - x);
    scrollRef.current.target = scrollRef.current.position - distance;
  }, []);

  const onTouchUp = useCallback(() => {
    isDown.current = false;
    containerRef.current.classList.remove('grabbing');
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousedown', onTouchDown);
      container.addEventListener('mousemove', onTouchMove);
      container.addEventListener('mouseup', onTouchUp);
      container.addEventListener('mouseleave', onTouchUp);

      // Add touch events for mobile
      container.addEventListener('touchstart', onTouchDown);
      container.addEventListener('touchmove', onTouchMove);
      container.addEventListener('touchend', onTouchUp);

      update();
    }

    return () => {
      if (container) {
        container.removeEventListener('mousedown', onTouchDown);
        container.removeEventListener('mousemove', onTouchMove);
        container.removeEventListener('mouseup', onTouchUp);
        container.removeEventListener('mouseleave', onTouchUp);
        
        container.removeEventListener('touchstart', onTouchDown);
        container.removeEventListener('touchmove', onTouchMove);
        container.removeEventListener('touchend', onTouchUp);
      }
    };
  }, [onTouchDown, onTouchMove, onTouchUp, update]);

  return (
    <div className="circular-gallery" ref={containerRef}>
      <div className="gallery-content">
        {items.map((item, index) => (
          <div 
            key={index}
            className="gallery-item"
            ref={el => (childrenRef.current[index] = el)}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularGallery;
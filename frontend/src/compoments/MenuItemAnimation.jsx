import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const MenuItemAnimation = ({ children }) => {
    const el = useRef(null);

    useLayoutEffect(() => {
        if (!el.current) return;

        const items = gsap.utils.toArray(el.current.children);

        // Set the initial state for the animation (from the bottom, faded out)
        gsap.set(items, {
            opacity: 0,
            y: 50,
        });

        // Animate the items to their final state
        gsap.to(items, {
            opacity: 1,
            y: 0,
            stagger: 0.1, // Animate each item with a slight delay
            ease: "power3.out",
            duration: 0.8,
        });

        // Clean up the animation on component unmount
        return () => {
            gsap.killTweensOf(items);
        };
    }, [children]);

    return (
        <div ref={el}>
            {children}
        </div>
    );
};

export default MenuItemAnimation;
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

// سجل المكون الإضافي SplitText مع GSAP
gsap.registerPlugin(GSAPSplitText);

const AnimatedText = ({ text, className }) => {
    const el = useRef(null);
    const splitTextRef = useRef(null);

    useLayoutEffect(() => {
        if (!el.current) return;

        // قم بإنشاء مثيل جديد لـ SplitText
        splitTextRef.current = new GSAPSplitText(el.current.querySelectorAll('.split-line'), { type: "words,chars" });
        const chars = splitTextRef.current.chars;

        // قم بتحديد الحالة الأولية للرسوم المتحركة
        gsap.set(chars, { 
            opacity: 0, 
            y: 20, 
            rotateX: -90 
        });

        // بدء الحركة
        gsap.to(chars, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.05,
            ease: "power3.out",
            duration: 0.8
        });

        return () => {
            if (splitTextRef.current) {
                splitTextRef.current.revert();
            }
        };
    }, [text]);

    return (
        <div className={className} ref={el}>
            {text.split('\n').map((line, index) => (
                <h1 key={index} className="split-line">{line}</h1>
            ))}
        </div>
    );
};

export default AnimatedText;
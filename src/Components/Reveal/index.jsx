import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, className = "", delay = 0, as: Tag = "div", ...props }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            {...props}
        >
            {children}
        </Tag>
    );
};

export { Reveal };

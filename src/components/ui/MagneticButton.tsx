import React, { useRef } from 'react';

const MagneticButton: React.FC<{
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    type?: "button" | "link" | "submit";
    disabled?: boolean;
}> = ({ children, className, onClick, href, type = "button", disabled }) => {
    const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!btnRef.current || disabled) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = btnRef.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        btnRef.current.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
    };

    const handleMouseLeave = () => {
        if (!btnRef.current) return;
        btnRef.current.style.transform = `translate(0px, 0px)`;
    };

    if (type === "link" || href) {
        return (
            <a
                ref={btnRef as React.RefObject<HTMLAnchorElement>}
                href={href}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`transition-transform duration-300 ease-out block text-center ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={disabled ? (e) => e.preventDefault() : undefined}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            ref={btnRef as React.RefObject<HTMLButtonElement>}
            type={type === "submit" ? "submit" : "button"}
            onClick={onClick}
            disabled={disabled}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-300 ease-out ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {children}
        </button>
    );
};

export default MagneticButton;

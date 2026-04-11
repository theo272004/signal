import React, { useState, useEffect } from 'react';
import MagneticButton from './ui/MagneticButton';
import { NAV_LINKS } from '../../constants';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const position = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: position, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-5 left-0 right-0 z-[100] px-6">
                <div className={`max-w-5xl mx-auto nav-glass rounded-[2rem] px-6 md:px-8 py-4 flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-3 shadow-lg' : ''}`}>
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                            <defs>
                                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#DC2626;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#B91C1C;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                            <circle cx="50" cy="50" r="48" fill="url(#logoGrad)" />
                            <path d="M50 35 L50 65 L68 65 L68 50 L50 50 Z" fill="#ffffff" />
                            <path d="M32 50 L50 50 L50 65 L32 65 L32 50 Z" fill="#ffffff" />
                            <circle cx="50" cy="50" r="22" fill="#ffffff" opacity="0.85" />
                        </svg>
                        <span className="text-xl font-black text-brand-dark tracking-tight">Signal</span>
                    </a>

                    {/* Nav desktop */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-brand-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <MagneticButton
                            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hidden md:block bg-brand-primary text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-wider hover:bg-brand-accent transition-colors glow-red"
                        >
                            Diagnóstico Gratis
                        </MagneticButton>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-dark hover:border-brand-primary hover:text-brand-primary transition-colors"
                        >
                            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu */}
            <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 mobile-menu-bg" onClick={() => setIsMenuOpen(false)}></div>
                <nav className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-3xl font-bold text-brand-dark tracking-tighter hover:text-brand-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <MagneticButton
                        onClick={() => { document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}
                        className="w-full max-w-xs bg-brand-primary text-white py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm text-center"
                    >
                        Diagnóstico Gratis
                    </MagneticButton>
                </nav>
            </div>
        </>
    );
};

export default Header;

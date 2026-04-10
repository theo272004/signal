import React from 'react';
import { NAV_LINKS } from '../../constants';

const Footer: React.FC = () => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const position = element.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: position, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-brand-dark text-white">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-base" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>signal_cellular_alt</span>
                            </div>
                            <span className="text-xl font-black tracking-tight">Signal</span>
                        </div>
                        <p className="text-gray-400 font-light leading-relaxed text-sm max-w-xs">
                            Crecimiento digital exclusivo para el sector salud. Más pacientes, más confianza, más visibilidad.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                            <span>Clientes activos en Colombia, México y España</span>
                        </div>
                    </div>

                    {/* Nav */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Navegación</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500">Contacto</h4>
                        <div className="space-y-3">
                            <a href="mailto:hola@signalsalud.co" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                                <span className="material-symbols-outlined text-brand-primary text-lg">mail</span>
                                hola@signalsalud.co
                            </a>
                            <a href="https://wa.me/573000000000" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                                <span className="material-symbols-outlined text-brand-primary text-lg">chat</span>
                                WhatsApp directo
                            </a>
                            <a href="https://calendly.com/signal" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                                <span className="material-symbols-outlined text-brand-primary text-lg">calendar_month</span>
                                Agendar llamada
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Signal. Todos los derechos reservados.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Hecho con precisión para el sector salud 🩺
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

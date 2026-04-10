import React, { useState } from 'react';
import MagneticButton from '../components/ui/MagneticButton';
import {
    SPECIALTIES,
    PAIN_POINTS,
    SERVICES,
    SECTORS,
    PROCESS_STEPS,
    RESULTS,
    TESTIMONIALS,
    PRICING_PLANS,
    FAQ_ITEMS,
    ADD_ONS,
} from '../../constants';

const Home: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main>

            {/* ─── HERO ─────────────────────────────────────────────── */}
            <section className="hero-bg min-h-[100svh] flex flex-col justify-center pt-36 pb-20 px-6 overflow-hidden">
                <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center gap-10">

                    {/* Badge */}
                    <div className="badge animate-slide-up">
                        <span className="dot-red"></span>
                        Marketing Digital Exclusivo para el Sector Salud
                    </div>

                    {/* H1 */}
                    <h1 className="font-black tracking-tighter animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <span className="block text-4xl md:text-[5.5rem] text-brand-dark leading-none">
                            Más pacientes
                        </span>
                        <span className="block text-3xl md:text-[2.5rem] text-gray-400 font-light italic my-4">
                            te encuentran en
                        </span>
                        <span className="block text-4xl md:text-[5.5rem] gradient-text-red leading-none">
                            Google
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        SEO local y publicidad digital diseñados <strong className="text-brand-dark font-semibold">exclusivamente</strong> para clínicas, consultorios y profesionales de la salud. Sin agencias genéricas.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <MagneticButton
                            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-full text-base font-black shadow-xl hover:bg-brand-accent transition-colors glow-red"
                        >
                            Diagnóstico Digital Gratis
                        </MagneticButton>
                        <MagneticButton
                            onClick={() => document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto border border-brand-border text-brand-dark px-10 py-5 rounded-full text-base font-semibold hover:border-brand-primary hover:text-brand-primary transition-all"
                        >
                            Ver cómo funciona
                        </MagneticButton>
                    </div>

                    {/* Trust signals */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        {[
                            { icon: 'verified', text: '+38 clínicas activas' },
                            { icon: 'star', text: '4.9 satisfacción promedio' },
                            { icon: 'schedule', text: 'Resultados desde el mes 1' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                <span className="material-symbols-outlined text-brand-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SPECIALTIES MARQUEE ──────────────────────────────── */}
            <div className="py-12 border-y border-brand-border bg-brand-surface overflow-hidden logo-marq">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...SPECIALTIES, ...SPECIALTIES, ...SPECIALTIES].map((s, idx) => (
                        <div key={idx} className="flex items-center gap-8 mx-8">
                            <span className="text-lg font-bold text-gray-400 tracking-tight">{s}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40"></span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── PROBLEMA ─────────────────────────────────────────── */}
            <section id="problema" className="py-32 px-6 section-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6">
                        <span className="text-brand-primary text-xs font-black uppercase tracking-[0.4em]">El problema real</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tighter leading-tight">
                            Tu clínica merece<br />
                            <span className="gradient-text-red">más visibilidad.</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed">
                            La mayoría de clínicas excelentes son invisibles en Google. Sus pacientes las pasan por alto porque no las encuentran — no porque sean peores.
                        </p>
                        <div className="pt-4">
                            <MagneticButton
                                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all text-sm"
                            >
                                Ver la solución
                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </MagneticButton>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        {PAIN_POINTS.map((point, i) => (
                            <div key={i} className="surface-card p-8 flex gap-6 items-start border-l-4 border-l-red-100 hover:border-l-brand-primary">
                                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-brand-primary text-2xl">{point.icon}</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-brand-dark mb-1">{point.title}</h4>
                                    <p className="text-gray-500 font-light leading-relaxed text-sm">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SERVICIOS ────────────────────────────────────────── */}
            <section id="servicios" className="py-32 px-6 section-surface">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-5 max-w-3xl mx-auto">
                        <span className="text-brand-primary text-xs font-black uppercase tracking-[0.4em]">Lo que hacemos</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tighter">
                            El sistema digital<br />que tu clínica necesita.
                        </h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed">
                            No vendemos blogs ni publicaciones de redes sueltas. Construimos un sistema completo para que los pacientes te encuentren, confíen en ti y agenden.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICES.map((service, i) => (
                            <div key={i} className="surface-card p-8 space-y-5 relative overflow-hidden group">
                                <div className="absolute -right-4 -bottom-4 text-[80px] font-black text-red-50 group-hover:text-red-100 transition-colors">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div className="relative z-10 space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                                        <span className="material-symbols-outlined text-brand-primary text-2xl">{service.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-dark">{service.title}</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-sm">{service.description}</p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {service.pills.map((pill, j) => (
                                            <span key={j} className="text-[9px] font-black uppercase tracking-wider text-brand-primary bg-red-50 px-3 py-1 rounded-full border border-red-100">
                                                {pill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA inline */}
                    <div className="p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-red-50 to-white border border-red-100 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-2 max-w-xl">
                            <p className="text-2xl font-bold text-brand-dark leading-tight">
                                Un sistema que trabaja <span className="text-brand-primary">mientras tú atiendes pacientes.</span>
                            </p>
                            <p className="text-gray-500 font-light">
                                No más depender del voz a voz. Tu clínica generando consultas 24/7 desde Google.
                            </p>
                        </div>
                        <MagneticButton
                            onClick={() => document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full md:w-auto bg-brand-primary text-white px-10 py-5 rounded-[1.5rem] font-bold hover:bg-brand-accent transition-colors text-center"
                        >
                            Ver planes y precios
                        </MagneticButton>
                    </div>
                </div>
            </section>

            {/* ─── SECTORES ─────────────────────────────────────────── */}
            <section id="sectores" className="py-32 px-6 section-white">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-5 max-w-3xl mx-auto">
                        <span className="text-brand-primary text-xs font-black uppercase tracking-[0.4em]">Especialidades que atendemos</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tighter">
                            Si es salud,<br />
                            <span className="gradient-text-red">es nuestro terreno.</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed">
                            Trabajamos exclusivamente con el sector salud. Conocemos el lenguaje, las regulaciones y la psicología del paciente en cada especialidad.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {SECTORS.map((sector, i) => (
                            <div key={i} className="surface-card p-6 text-center space-y-3 group cursor-default">
                                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto group-hover:bg-red-100 transition-colors">
                                    <span className="material-symbols-outlined text-brand-primary text-2xl">{sector.icon}</span>
                                </div>
                                <h3 className="text-base font-bold text-brand-dark leading-tight">{sector.name}</h3>
                                <p className="text-xs text-gray-400 font-light">{sector.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-400 font-medium">
                            ¿Tu especialidad no está en la lista?{' '}
                            <button
                                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-brand-primary font-bold hover:underline"
                            >
                                Contáctanos igualmente →
                            </button>
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── PROCESO ──────────────────────────────────────────── */}
            <section id="proceso" className="py-32 px-6 section-surface">
                <div className="max-w-5xl mx-auto space-y-20">
                    <div className="text-center space-y-5 max-w-3xl mx-auto">
                        <div className="badge mx-auto w-fit">
                            <span className="dot-red"></span>
                            Cómo lo hacemos
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-brand-dark tracking-tighter">Nuestro proceso</h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed">
                            Sin promesas vacías. Un sistema predecible, paso a paso, diseñado para el sector salud.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="surface-card p-10 space-y-6 relative overflow-hidden group">
                                <div className="absolute -right-3 -top-3 text-[100px] font-black text-red-50 group-hover:text-red-100 transition-colors select-none">
                                    {step.number}
                                </div>
                                <div className="relative z-10 space-y-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white text-lg">{step.icon}</span>
                                        </div>
                                        <span className="text-brand-primary font-black text-sm">{step.number}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark">{step.title}</h3>
                                    <p className="text-gray-500 font-light leading-relaxed text-sm">{step.description}</p>
                                    <ul className="space-y-2 pt-3 border-t border-brand-border">
                                        {step.details.map((detail, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0"></span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── RESULTADOS ───────────────────────────────────────── */}
            <section id="resultados" className="py-32 px-6 section-white">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="space-y-4">
                        <span className="text-brand-primary text-xs font-black uppercase tracking-[0.4em]">Resultados reales</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
                            De invisible a<br />
                            <span className="gradient-text-red">referente en Google.</span>
                        </h2>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {RESULTS.map((result, i) => (
                            <div key={i} className="stat-card text-center space-y-1">
                                <div className="text-4xl md:text-5xl font-black text-brand-primary">{result.value}</div>
                                <div className="text-sm font-bold text-brand-dark">{result.label}</div>
                                <div className="text-xs text-gray-400 font-light">{result.period}</div>
                            </div>
                        ))}
                    </div>

                    {/* Case study card */}
                    <div className="surface-card p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-5">
                            <span className="text-[9px] font-black uppercase tracking-widest text-brand-primary">Caso de estudio destacado</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Clínica dental en Medellín: de 8 a 47 nuevos pacientes por mes desde Google en 5 meses
                            </h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Llegaron con un perfil de Google Business desactualizado, sin reseñas y sin presencia en SEO local. Implementamos el sistema Signal completo. Hoy el 65% de sus nuevos pacientes los encuentran por Google Maps o búsqueda orgánica.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['SEO Local', 'Google Ads', 'GMB Optimización', 'Reputación'].map((tag, i) => (
                                    <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-brand-primary border border-red-200 bg-red-50 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Metrics visual */}
                        <div className="space-y-4">
                            {[
                                { label: 'Nuevos pacientes / mes', before: '8', after: '47', pct: '+487%' },
                                { label: 'Posición Google Maps', before: 'Top 15', after: 'Top 3', pct: '↑ 12 puestos' },
                                { label: 'Reseñas Google', before: '6', after: '94', pct: '+1,466%' },
                                { label: 'Consultas online / mes', before: '3', after: '62', pct: '+1,966%' },
                            ].map((metric, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-brand-surface border border-brand-border">
                                    <div>
                                        <div className="text-xs text-gray-400 font-medium mb-1">{metric.label}</div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm text-gray-400 line-through">{metric.before}</span>
                                            <span className="material-symbols-outlined text-brand-primary text-sm">arrow_forward</span>
                                            <span className="text-base font-bold text-brand-dark">{metric.after}</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-black text-brand-primary">{metric.pct}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
            <section id="testimoniales" className="py-32 px-6 section-surface">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter">
                            Lo que dicen<br />nuestros clientes.
                        </h2>
                        <p className="text-lg text-gray-500 font-light">Profesionales de salud que ya dejaron de depender del voz a voz.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((t) => (
                            <div key={t.id} className="surface-card p-8 flex flex-col justify-between space-y-6">
                                <div className="space-y-4">
                                    <div className="flex gap-1 text-brand-primary">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        ))}
                                    </div>
                                    <blockquote className="text-base text-brand-dark font-light italic leading-relaxed">
                                        {t.content}
                                    </blockquote>
                                </div>
                                <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
                                    <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center font-bold text-xs text-brand-primary flex-shrink-0">
                                        {t.letters}
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-dark text-sm">{t.author}</p>
                                        <p className="text-xs text-gray-400 font-light">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PRECIOS ──────────────────────────────────────────── */}
            <section id="precios" className="py-32 px-6 section-white">
                <div className="max-w-7xl mx-auto space-y-14">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter gradient-text-red">
                            Planes claros y transparentes
                        </h2>
                        <p className="text-lg text-gray-500 font-light">Sin letras pequeñas. Sin comisiones ocultas. Sin permanencia forzada después del mes 3.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {PRICING_PLANS.map((plan) => (
                            <div key={plan.id} className={`p-8 md:p-10 rounded-[2rem] text-left relative overflow-hidden flex flex-col ${plan.isPopular ? 'surface-card-featured' : 'surface-card'}`}>
                                {plan.isPopular && (
                                    <div className="absolute top-5 right-5 bg-white text-brand-primary text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                                        Más elegido
                                    </div>
                                )}
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.isPopular ? 'bg-white/20' : 'bg-red-50'}`}>
                                    <span className={`material-symbols-outlined text-2xl ${plan.isPopular ? 'text-white' : 'text-brand-primary'}`}>{plan.icon}</span>
                                </div>
                                <h3 className={`text-2xl font-bold mb-2 ${plan.isPopular ? 'text-white' : 'text-brand-dark'}`}>{plan.name}</h3>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className={`text-4xl font-black tracking-tighter ${plan.isPopular ? 'text-white' : 'text-brand-dark'}`}>{plan.price}</span>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${plan.isPopular ? 'text-white/60' : 'text-gray-400'}`}>{plan.period}</span>
                                </div>
                                <p className={`text-sm font-light mb-8 leading-relaxed ${plan.isPopular ? 'text-white/80' : 'text-gray-500'}`}>{plan.description}</p>
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className={`flex items-start gap-3 text-xs ${plan.isPopular ? 'text-white/90' : 'text-gray-600'}`}>
                                            <span className={`material-symbols-outlined text-base mt-0.5 flex-shrink-0 ${plan.isPopular ? 'text-white' : 'text-brand-primary'}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <MagneticButton
                                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                                    className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all text-center ${plan.isPopular ? 'bg-white text-brand-primary hover:bg-red-50' : 'bg-brand-primary text-white hover:bg-brand-accent glow-red'}`}
                                >
                                    {plan.cta}
                                </MagneticButton>
                            </div>
                        ))}
                    </div>

                    {/* Add-ons */}
                    <div className="space-y-6 max-w-5xl mx-auto">
                        <div className="text-center">
                            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Servicios adicionales disponibles</span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            {ADD_ONS.map((addon, i) => (
                                <div key={i} className="surface-card p-5 flex gap-3">
                                    <span className="material-symbols-outlined text-brand-primary text-lg mt-0.5 flex-shrink-0">add_circle</span>
                                    <div>
                                        <h5 className="font-bold text-brand-dark text-sm">{addon.name}</h5>
                                        <p className="text-xs text-gray-500 font-light mt-0.5 leading-relaxed">{addon.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FINAL CTA ────────────────────────────────────────── */}
            <section id="contacto" className="py-32 px-6 section-red relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)'
                }}></div>
                <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
                    <div className="space-y-6">
                        <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/70 border border-white/20 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            Agenda tu diagnóstico gratuito
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                            ¿Listo para llenar<br />
                            <span className="font-light italic opacity-80">tu agenda desde</span><br />
                            Google?
                        </h2>
                        <p className="text-xl text-white/75 font-light max-w-2xl mx-auto leading-relaxed">
                            En 30 minutos analizamos tu situación actual y te mostramos exactamente qué oportunidades estás perdiendo en Google. Sin compromiso.
                        </p>
                    </div>

                    {/* Contact form */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-xl mx-auto text-left shadow-2xl">
                        <h3 className="text-xl font-bold text-brand-dark mb-6">Agenda tu diagnóstico gratuito</h3>
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('¡Gracias! Te contactaremos en menos de 24 horas.'); }}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">Nombre</label>
                                    <input
                                        type="text"
                                        placeholder="Dr. Juan García"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-brand-border text-brand-dark text-sm focus:outline-none focus:border-brand-primary transition-colors bg-brand-surface"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">Especialidad</label>
                                    <input
                                        type="text"
                                        placeholder="Odontólogo, Fisioterapeuta..."
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-brand-border text-brand-dark text-sm focus:outline-none focus:border-brand-primary transition-colors bg-brand-surface"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">Email</label>
                                <input
                                    type="email"
                                    placeholder="tu@clinica.com"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-brand-border text-brand-dark text-sm focus:outline-none focus:border-brand-primary transition-colors bg-brand-surface"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">WhatsApp</label>
                                <input
                                    type="tel"
                                    placeholder="+57 300 000 0000"
                                    className="w-full px-4 py-3 rounded-xl border border-brand-border text-brand-dark text-sm focus:outline-none focus:border-brand-primary transition-colors bg-brand-surface"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">¿Cuál es tu mayor reto? (opcional)</label>
                                <textarea
                                    placeholder="Ej: no aparezco en Google Maps, pocos pacientes nuevos..."
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-xl border border-brand-border text-brand-dark text-sm focus:outline-none focus:border-brand-primary transition-colors bg-brand-surface resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-brand-primary text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-brand-accent transition-colors glow-red"
                            >
                                Quiero mi diagnóstico gratis →
                            </button>
                            <p className="text-center text-xs text-gray-400">Sin compromiso. Respuesta en menos de 24 horas.</p>
                        </form>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ──────────────────────────────────────────────── */}
            <section id="faq" className="py-32 px-6 section-surface">
                <div className="max-w-3xl mx-auto space-y-14">
                    <div className="text-center space-y-4">
                        <span className="text-brand-primary text-xs font-black uppercase tracking-[0.4em]">Preguntas frecuentes</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
                            Probablemente<br />te estás preguntando...
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {FAQ_ITEMS.map((item, i) => (
                            <div key={i} className={`surface-card overflow-hidden transition-all ${openFaq === i ? 'border-brand-primary/30' : ''}`}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full px-8 py-7 flex items-center justify-between gap-6 text-left"
                                >
                                    <span className="text-base font-bold text-brand-dark">{item.q}</span>
                                    <span className={`material-symbols-outlined text-brand-primary transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>
                                        add
                                    </span>
                                </button>
                                <div className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-60 pb-8' : 'max-h-0'}`}>
                                    <p className="text-gray-500 leading-relaxed text-sm font-light">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center pt-4">
                        <p className="text-gray-500 text-sm">
                            ¿Tienes otra pregunta?{' '}
                            <button
                                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-brand-primary font-bold hover:underline"
                            >
                                Escríbenos →
                            </button>
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Home;

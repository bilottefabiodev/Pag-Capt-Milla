import { Button } from './Button';
import { Section } from './Section';
import { Calendar, Youtube } from 'lucide-react';

export const Hero = () => {
    return (
        <Section className="min-h-[100svh] flex flex-col relative overflow-hidden pb-12 pt-8 md:justify-center md:py-24">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
                {/* Limit height on mobile to make text readability perfect on black background below her */}
                <div className="absolute top-0 right-[-10%] w-[100%] md:w-[60%] md:right-0 h-[48vh] md:h-full md:left-auto">
                    <img
                        src="/Mila.jpeg"
                        alt="Mila Moraes"
                        className="w-full h-full object-cover object-[70%_top] md:object-top opacity-75 md:opacity-80"
                        style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}
                    />
                </div>

                {/* Gradient for mobile: dark text shadow on the left for badges */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent md:hidden z-10 w-[100%]" />

                {/* Gradient for desktop: dark on the left fading to transparent on the right */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10" />
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
            </div>

            <div className="relative z-20 flex flex-col w-full flex-grow justify-between md:justify-end md:w-[60%] lg:w-[55%] items-start text-left animate-fade-in-up mt-2 md:mt-0">

                {/* Top section: Badges remain at the top left */}
                <div className="flex flex-col gap-4 w-full pt-1">
                    {/* Header labels */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-2.5 backdrop-blur-sm">
                            <div className="grid grid-cols-3 gap-[2px] w-full h-full">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-[3px] h-[3px] rounded-full bg-[var(--color-brand-start)]" />
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block leading-none mb-1">Evento Gratuito</span>
                            <span className="text-sm font-bold text-white tracking-wide block leading-none">CÓDIGO DO DESTINO</span>
                        </div>
                    </div>

                    {/* Event Details floating blocks */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 px-4 py-2.5 rounded-[20px] bg-black/40 backdrop-blur-md border border-white/10 w-fit">
                            <Calendar className="w-4 h-4 text-[var(--color-brand-start)]" />
                            <span className="text-sm font-medium text-gray-200">30 e 31 de Março</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2.5 rounded-[20px] bg-black/40 backdrop-blur-md border border-white/10 w-fit">
                            <Youtube className="w-5 h-4 text-[var(--color-brand-start)]" />
                            <span className="text-sm font-medium text-gray-200">AO VIVO no YouTube</span>
                        </div>
                    </div>
                </div>

                {/* Spacer on mobile to make text start under her face */}
                <div className="h-[14vh] min-h-[100px] md:hidden shrink-0 w-full" />

                {/* Bottom section: Headline and Copy (pushed down) */}
                <div className="flex flex-col space-y-4 md:space-y-5 md:mt-8 relative z-30 w-full pb-4">
                    {/* Headline */}
                    <h1 className="text-[30px] md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.1] mb-2">
                        Existe um <span className="text-[var(--color-brand-start)]">código invisível</span> por trás das histórias que você vive no amor.
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                        E no evento <strong className="text-white font-bold">Código do Destino</strong> a Mila Moraes vai mostrar por que algumas mulheres sempre viram prioridade... enquanto outras continuam presas no mesmo ciclo de rejeição.
                    </p>

                    <div className="flex flex-col space-y-2 py-1">
                        <div className="flex items-center">
                            <span className="text-[var(--color-brand-start)] font-bold text-lg md:text-xl">Ele não te assume.</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-[var(--color-brand-middle)] font-bold text-lg md:text-xl">Ele aparece quando quer.</span>
                        </div>
                        <p className="text-white font-medium mt-1">E você ainda tenta entender por que nunca é prioridade.</p>
                    </div>

                    <div className="pt-2">
                        <p className="text-xl md:text-2xl font-bold text-white mb-2">
                            Mas e se o problema não fosse ele?
                        </p>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                            Desvende seu código do destino e descubra como quebrar o padrão por trás das histórias que você vive.
                        </p>
                    </div>

                    {/* Call to action */}
                    <div className="flex flex-col items-center md:items-start w-full md:w-auto pt-4 space-y-3">
                        <Button className="w-full text-lg px-8 py-5 font-bold tracking-wide shadow-[0_0_40px_-10px_rgba(206,25,25,0.4)]">
                            QUERO PARTICIPAR
                        </Button>
                        <p className="text-xs text-gray-400">
                            Clique para entrar no evento
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

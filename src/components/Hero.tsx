import { Button } from './Button';
import { Section } from './Section';
import { Calendar, Youtube } from 'lucide-react';

export const Hero = () => {
    return (
        <Section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-24 pb-20">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-brand-start)]/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-brand-end)]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base font-medium text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-brand-start)] animate-pulse" />
                    Evento Gratuito | Online e Ao Vivo
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
                    Existe um <span className="gradient-text">código invisível</span> por trás das histórias que você vive no amor.
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
                    E no evento <strong className="text-white">Código do Destino</strong> a Mila Moraes vai mostrar por que algumas mulheres sempre viram prioridade... enquanto outras continuam presas no mesmo ciclo de rejeição.
                </p>

                <div className="flex flex-col md:flex-row gap-6 items-center justify-center my-8 text-lg font-medium text-gray-300 bg-white/5 p-6 rounded-2xl border border-white/10 w-full max-w-2xl">
                    <div className="flex flex-col items-center text-center space-y-1">
                        <span className="text-[var(--color-brand-middle)] font-bold block text-xl">Ele não te assume.</span>
                        <span className="text-[var(--color-brand-middle)] font-bold block text-xl">Ele aparece quando quer.</span>
                        <span className="hidden md:block w-full h-[1px] bg-white/10 my-3" />
                        <span className="text-gray-200 mt-2 block">E você ainda tenta entender por que nunca é prioridade.</span>
                    </div>
                </div>

                <p className="text-xl md:text-2xl font-bold text-white max-w-2xl mt-4">
                    Mas e se o problema não fosse ele?
                </p>

                <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mt-2 mb-8">
                    Desvende seu código do destino e descubra como quebrar o padrão por trás das histórias que você vive.
                </p>

                <div className="flex flex-col items-center w-full space-y-4">
                    <Button className="w-full md:w-auto text-lg px-12 py-5 shadow-[0_0_40px_-10px_rgba(232,139,78,0.5)]">
                        QUERO PARTICIPAR
                    </Button>
                    <p className="text-sm text-gray-500 font-medium">
                        Clique para entrar no evento e receber os avisos, datas e acesso às lives.
                    </p>
                    <p className="text-xs text-gray-600 italic mt-2">
                        "Evento gratuito para quem cansou de ser lembrada só quando convém."
                    </p>
                </div>

                <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3 text-gray-400">
                        <Calendar className="w-5 h-5 text-[var(--color-brand-start)]" />
                        <div className="text-left leading-tight">
                            <span className="block font-bold text-white">30/03</span>
                            <span className="text-sm">Live 1</span>
                        </div>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10" />
                    <div className="flex items-center gap-3 text-gray-400">
                        <Calendar className="w-5 h-5 text-[var(--color-brand-start)]" />
                        <div className="text-left leading-tight">
                            <span className="block font-bold text-white">31/03</span>
                            <span className="text-sm">Live 2</span>
                        </div>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10" />
                    <div className="flex items-center gap-3 text-gray-400">
                        <Youtube className="w-6 h-6 text-red-500" />
                        <span className="font-bold text-white">No Youtube</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

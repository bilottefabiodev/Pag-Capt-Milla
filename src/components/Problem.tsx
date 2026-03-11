import { Section } from './Section';
import { RefreshCcw, EyeOff } from 'lucide-react';

export const Problem = () => {
    return (
        <Section className="bg-[#111] border-y border-white/5 relative overflow-hidden py-32">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-start)]/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-brand-end)]/10 blur-[100px] pointer-events-none" />

            <div className="flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto z-10 relative">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    A maioria das mulheres passa a vida inteira <span className="gradient-text border-b-2 border-[var(--color-brand-start)]">sem descobrir isso.</span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-300 font-medium">
                    Se você faz tudo certo… e mesmo assim não é prioridade.
                </p>

                <div className="grid md:grid-cols-3 gap-8 w-full mt-10">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center hover:bg-white/10 transition-colors">
                        <div className="p-4 bg-[var(--color-brand-start)]/20 rounded-full mb-6 text-[var(--color-brand-start)]">
                            <EyeOff size={32} />
                        </div>
                        <p className="text-gray-300 font-semibold text-lg text-center">
                            Você não está repetindo essas histórias por azar.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center md:col-span-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-start)]/10 to-[var(--color-brand-end)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-4 bg-white/10 rounded-full mb-6 text-white relative z-10 group-hover:bg-[var(--color-brand-middle)]/20 transition-colors">
                            <RefreshCcw size={32} className="group-hover:animate-spin-slow" />
                        </div>
                        <p className="text-xl md:text-2xl font-bold text-white text-center relative z-10">
                            Existe um <span className="gradient-text">padrão</span> por trás das relações que entram na sua vida.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

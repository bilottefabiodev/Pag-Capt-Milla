import { Section } from './Section';
import { Button } from './Button';
import { CheckCircle2, UserX } from 'lucide-react';

export const Checklist = () => {
    const items = [
        "Ele diz que gosta de você… mas nunca assume.",
        "Ele some e depois volta como se nada tivesse acontecido.",
        "Ele aparece quando quer, mas nunca quando você precisa.",
        "Você faz tudo certo… mas nunca é escolhida."
    ];

    return (
        <Section className="py-24 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
            <div className="absolute left-[-10%] top-[-10%] w-[40%] h-[40%] bg-[var(--color-brand-start)]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-start)]/10 to-transparent pointer-events-none" />
                    <h4 className="text-sm font-bold tracking-widest text-[var(--color-brand-start)] mb-4 relative z-10">PRA QUEM É</h4>
                    <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed relative z-10">
                        Pra mulher que vive o ciclo do sumiço e da volta, que recebe migalha e chama de conexão, que já sentiu vergonha de aceitar tão pouco, que está cansada de ser <strong className="text-white">plano B</strong>, <strong className="text-white">distração emocional</strong> ou <strong className="text-white">companhia de conveniência</strong>.
                    </p>
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12">
                    Você já viveu alguma dessas <span className="gradient-text italic">situações?</span>
                </h3>

                <div className="grid gap-4 w-full max-w-2xl">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl group hover:bg-white/10 hover:-translate-y-1 transition-all">
                            <CheckCircle2 className="w-8 h-8 text-[var(--color-brand-end)] shrink-0 group-hover:scale-110 transition-transform" />
                            <p className="text-lg md:text-xl font-medium text-gray-200">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center space-y-8 animate-fade-in flex flex-col items-center">
                    <div className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
                        <UserX className="w-8 h-8 text-red-500 hidden md:block" />
                        Se você se reconheceu em pelo menos uma delas, esse evento é para você.
                    </div>
                    <Button className="w-full md:w-auto text-lg px-12 py-5 shadow-[0_0_40px_-10px_rgba(242,178,99,0.5)]">
                        QUERO PARTICIPAR
                    </Button>
                </div>
            </div>
        </Section>
    );
};

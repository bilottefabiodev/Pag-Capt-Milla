import { Section } from './Section';
import { Button } from './Button';
import { Network, History, Flame, Key, Star } from 'lucide-react';

export const Discover = () => {
    const topics = [
        {
            title: 'O padrão que está por trás das suas histórias',
            desc: 'Por que certos tipos de homens aparecem e por que a dinâmica sempre termina parecida.',
            icon: <Network className="w-8 h-8 text-[var(--color-brand-start)]" />
        },
        {
            title: 'O ciclo invisível do "quase relacionamento"',
            desc: 'Como algumas relações te prendem emocionalmente mesmo quando nunca se tornam inteiras.',
            icon: <History className="w-8 h-8 text-[var(--color-brand-middle)]" />
        },
        {
            title: 'O impacto desse padrão na sua vida',
            desc: 'Como isso começa a afetar sua autoestima, sua energia e até suas decisões.',
            icon: <Flame className="w-8 h-8 text-red-500" />
        },
        {
            title: 'O começo da virada',
            desc: 'O que muda quando você finalmente enxerga o padrão que está vivendo.',
            icon: <Key className="w-8 h-8 text-[var(--color-brand-end)]" />
        }
    ];

    return (
        <Section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-r from-[var(--color-brand-start)]/5 to-[var(--color-brand-end)]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-black text-white text-center mb-16 relative z-10">
                    No evento você vai <span className="gradient-text">descobrir:</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-8 w-full relative z-10 mb-20">
                    {topics.map((topic, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors flex flex-col gap-4">
                            <div className="bg-black/40 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                                {topic.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-white leading-tight">
                                {topic.title}
                            </h4>
                            <p className="text-gray-300 text-lg">
                                {topic.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border rounded-3xl p-10 md:p-14 w-full relative z-10 shadow-2xl border-[var(--color-brand-middle)]/30">
                    <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-8 text-center flex flex-col md:flex-row items-center justify-center gap-4">
                        <Star className="text-[var(--color-brand-end)] fill-[var(--color-brand-end)] animate-pulse" />
                        Você vai sair do evento entendendo exatamente:
                    </h4>

                    <ul className="space-y-6 text-xl text-gray-200 w-full max-w-2xl mx-auto">
                        <li className="flex items-start gap-4">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-start)] shrink-0 mt-2.5" />
                            <span>por que certos homens entram na sua vida</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-middle)] shrink-0 mt-2.5" />
                            <span>por que eles nunca assumem</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-end)] shrink-0 mt-2.5" />
                            <span>e qual é o padrão que está mantendo você nesse ciclo</span>
                        </li>
                    </ul>

                    <div className="mt-16 flex justify-center">
                        <Button className="w-full md:w-auto text-lg px-10 py-5">
                            QUERO PARTICIPAR DO CÓDIGO DO DESTINO
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

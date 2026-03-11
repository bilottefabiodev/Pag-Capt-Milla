import { Section } from './Section';
import { Button } from './Button';
import { Quote } from 'lucide-react';

export const Footer = () => {
    return (
        <Section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--color-brand-dark)]" />
            <div className="absolute top-[20%] right-[-20%] w-[60%] h-[60%] bg-[var(--color-brand-start)]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

                <div className="flex flex-col items-center text-center space-y-8 mb-20 max-w-2xl px-6">
                    <Quote className="w-16 h-16 text-white/10 rotate-180 -mb-6" />
                    <p className="text-2xl md:text-3xl text-gray-300 font-medium italic leading-relaxed">
                        "Os homens mudam.<br />Mas o final da sua história parece sempre o mesmo."
                    </p>

                    <div className="space-y-6 pt-12 text-xl md:text-2xl text-gray-400">
                        <p className="border-l-2 border-red-500 pl-4 text-left">
                            Algumas mulheres passam a vida <span className="text-white border-b-2 border-red-500">tentando entender os homens.</span>
                        </p>
                        <p className="border-l-2 border-[var(--color-brand-middle)] pl-4 text-left text-white font-bold">
                            As mulheres que descobrem o Código do Destino... <span className="gradient-text italic">entendem o padrão.</span>
                        </p>
                    </div>

                    <div className="bg-white/5 rounded-3xl p-10 w-full mt-12 border border-[var(--color-brand-end)]/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-start)]/10 via-[var(--color-brand-middle)]/10 to-[var(--color-brand-end)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />
                        <p className="text-3xl md:text-4xl text-white font-black uppercase tracking-tight relative z-10">
                            E quando você entende o padrão,<br />
                            <span className="gradient-text border-b-4 border-[var(--color-brand-end)] mt-4 inline-block pb-2">o jogo muda.</span>
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border rounded-[3rem] p-12 md:p-16 w-full shadow-2xl border-[var(--color-brand-start)]/40 flex flex-col items-center text-center">
                    <div className="inline-block px-4 py-1 mb-8 rounded-full bg-white/10 text-gray-300 text-sm font-bold uppercase tracking-widest border border-white/20">
                        Perguntinha aqui
                    </div>

                    <h4 className="text-2xl md:text-4xl font-extrabold text-white mb-10 leading-relaxed max-w-2xl">
                        Você já se perguntou por que algumas mulheres sempre são <span className="text-[var(--color-brand-start)] underline decoration-wavy decoration-2 underline-offset-8">assumidas</span>...
                        <br /><br />
                        enquanto outras parecem presas no <span className="gradient-text">mesmo tipo de história?</span>
                    </h4>

                    <div className="bg-[var(--color-brand-end)]/10 border-2 border-[var(--color-brand-end)]/40 p-6 rounded-2xl mb-12 w-full max-w-lg">
                        <p className="text-[var(--color-brand-end)] font-bold text-xl uppercase tracking-wider">
                            Se sim, você precisa estar nesse evento.
                        </p>
                    </div>

                    <Button className="w-full md:w-auto text-xl px-16 py-6 font-black shadow-[0_0_50px_rgba(209,84,73,0.5)] uppercase tracking-wider">
                        Quero descobrir meu código do destino
                    </Button>

                    <p className="text-gray-500 text-sm mt-8 max-w-sm text-center">
                        Ao se inscrever, você será direcionada para o grupo exclusivo do evento onde receberá os links das lives.
                    </p>
                </div>

            </div>
        </Section>
    );
};

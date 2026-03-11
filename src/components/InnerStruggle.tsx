import { Section } from './Section';
import { MessageCircle, Smartphone, Clock, EyeOff } from 'lucide-react';

export const InnerStruggle = () => {
    return (
        <Section className="py-24 bg-[#050505]">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center leading-tight">
                    Talvez ninguém saiba o quanto <span className="text-[var(--color-brand-middle)]">isso mexe com você.</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-12 w-full mt-8">
                    {/* External */}
                    <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
                        <h4 className="text-gray-400 text-lg uppercase tracking-widest font-bold mb-6">Por fora</h4>
                        <ul className="space-y-4 text-2xl font-medium text-white">
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500" /> Você funciona.</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500" /> Trabalha.</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500" /> Resolve.</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500" /> Posta.</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-green-500" /> Sorri.</li>
                        </ul>
                    </div>

                    {/* Internal */}
                    <div className="bg-[var(--color-brand-start)]/10 border border-[var(--color-brand-start)]/30 p-10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20 text-[var(--color-brand-start)]">
                            <Smartphone size={80} />
                        </div>
                        <h4 className="text-[var(--color-brand-start)] text-lg uppercase tracking-widest font-bold mb-6 relative z-10">Por dentro</h4>
                        <p className="text-xl text-gray-300 mb-6 italic relative z-10">Você vive naquela vigília silenciosa:</p>
                        <ul className="space-y-4 text-lg font-medium text-white relative z-10">
                            <li className="flex items-start gap-4 p-3 bg-black/40 rounded-xl">
                                <Clock className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" />
                                <span>olhando o celular</span>
                            </li>
                            <li className="flex items-start gap-4 p-3 bg-black/40 rounded-xl">
                                <MessageCircle className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                                <span>vendo se ele visualizou</span>
                            </li>
                            <li className="flex items-start gap-4 p-3 bg-black/40 rounded-xl">
                                <EyeOff className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
                                <span>tentando parecer tranquila... enquanto a ansiedade te consome.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full max-w-3xl mt-20 text-center space-y-8">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-semibold">
                        E a parte mais humilhante é essa: <span className="text-white">você virou especialista em se explicar.</span> Em se adaptar. Em aceitar menos pra não perder tudo.
                    </p>

                    <div className="bg-red-500/10 border-l-4 border-red-500 p-6 text-left my-8 rounded-r-xl">
                        <p className="text-2xl font-bold text-white mb-2">Só que enquanto você entende tudo,</p>
                        <p className="text-3xl font-extrabold text-red-500 uppercase tracking-wide">Ele não assume nada.</p>
                    </div>

                    <div className="space-y-3 italic text-gray-500 text-lg md:text-xl relative before:content-[''] before:absolute before:-left-8 before:top-0 before:h-full before:w-[2px] before:bg-white/10 inline-block pl-0 md:pl-8 text-left max-w-md mx-auto">
                        <p>"O problema sou eu."</p>
                        <p>"Talvez eu nunca seja a mulher que alguém escolhe."</p>
                        <p>"Talvez comigo seja sempre assim."</p>
                    </div>

                    <div className="pt-12 text-center">
                        <h4 className="text-4xl md:text-5xl font-black text-white mb-6 animate-pulse">Mas não.</h4>
                        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-4">
                            Você só está presa num ciclo que já te <span className="text-white border-b border-white">roubou tempo demais.</span>
                        </p>
                        <p className="text-lg text-[var(--color-brand-end)] mt-8">
                            Esse evento é o momento em que você vai começar a enxergar o jogo que está vivendo.<br />E parar de jogar sempre no mesmo papel.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

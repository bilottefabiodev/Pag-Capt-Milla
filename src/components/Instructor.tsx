import { Section } from './Section';
import { HeartCrack, ShieldAlert, Zap, Instagram, TrendingUp } from 'lucide-react';

export const Instructor = () => {
    return (
        <Section className="py-24 bg-[#111] border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-black text-white text-center mb-16">
                    Quem vai te <span className="text-[var(--color-brand-start)]">guiar</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group mx-auto md:mx-0 max-w-sm">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-brand-start)] to-[var(--color-brand-end)] rounded-[3rem] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/20">
                            <img
                                src="/Mila.jpeg"
                                alt="Mila Moraes"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Overlay stats card */}
                        <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-[#0A0A0A]/90 backdrop-blur-md p-6 rounded-2xl border border-[var(--color-brand-middle)]/40 shadow-2xl">
                            <p className="text-[var(--color-brand-end)] font-bold text-3xl">5k+</p>
                            <p className="text-gray-300 text-sm font-medium">alunas guiadas</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="border-l-4 border-[var(--color-brand-start)] pl-6">
                            <p className="text-xl md:text-2xl text-gray-200 font-medium italic leading-relaxed">
                                Mila Moraes se tornou referência para milhares de mulheres porque <strong className="text-white">fala da dor que quase ninguém tem coragem de dizer em voz alta.</strong>
                            </p>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                                <HeartCrack className="w-6 h-6 text-red-400 shrink-0" />
                                <span className="text-gray-300 text-lg">A dor de não ser assumida.</span>
                            </li>
                            <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                                <ShieldAlert className="w-6 h-6 text-orange-400 shrink-0" />
                                <span className="text-gray-300 text-lg">A dor de perceber que você sempre entrega mais do que recebe.</span>
                            </li>
                            <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-[var(--color-brand-end)]/20 shadow-[0_0_20px_rgba(242,178,99,0.1)]">
                                <Zap className="w-6 h-6 text-[var(--color-brand-end)] shrink-0" />
                                <span className="text-white font-semibold text-lg">A dor de viver relações que parecem promissoras… mas nunca se tornam inteiras.</span>
                            </li>
                        </ul>

                        <div className="pt-4 border-t border-white/10">
                            <p className="text-2xl text-white font-bold mb-6">
                                Mas principalmente porque mostra o <span className="gradient-text border-b-2 border-[var(--color-brand-middle)]">padrão por trás dessas histórias.</span>
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2 p-4 bg-gradient-to-br from-[#E1306C]/10 to-transparent border border-[#E1306C]/30 rounded-2xl">
                                    <Instagram className="w-8 h-8 text-[#E1306C]" />
                                    <p className="text-2xl font-black text-white">750k+</p>
                                    <p className="text-sm text-gray-400">no Instagram</p>
                                </div>
                                <div className="flex flex-col gap-2 p-4 bg-gradient-to-br from-[#00f2fe]/10 to-transparent border border-white/20 rounded-2xl">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                    <p className="text-2xl font-black text-white">1M+</p>
                                    <p className="text-sm text-gray-400">no TikTok</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

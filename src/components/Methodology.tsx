import { Section } from './Section';
import { Button } from './Button';
import { Sparkles } from 'lucide-react';

export const Methodology = () => {
    return (
        <Section className="py-24 bg-[url('https://images.unsplash.com/photo-1534796636918-a1d82ddff9e4?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-fixed relative">
            <div className="absolute inset-0 bg-[#0A0A0A]/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center space-y-10">
                <Sparkles className="w-16 h-16 text-[var(--color-brand-start)] animate-pulse" />

                <p className="text-2xl md:text-4xl text-white font-bold leading-relaxed px-4">
                    Eu quero te entregar o <span className="gradient-text italic">mapa</span> que vai te fazer enxergar o que está te prendendo nesse ciclo e virar a chave.
                </p>

                <div className="bg-white/5 backdrop-blur-md border border-white/20 p-8 rounded-3xl mt-12 mb-8 shadow-2xl">
                    <p className="text-lg md:text-xl text-gray-200 leading-loose">
                        A Mila uniu conhecimentos como <strong className="text-white">astrologia, numerologia, tarô e magia</strong> numa leitura viva, direta, sem maquiagem. E depois de guiar mais de 5 mil mulheres a saírem do looping da rejeição e voltarem pro lugar de magnetismo, poder pessoal e escolha, ela resolveu revelar como funciona o <strong className="gradient-text text-xl">código do destino</strong>.
                    </p>
                </div>

                <Button className="mt-8 text-lg px-8 py-5 shadow-[0_0_30px_rgba(209,84,73,0.4)]">
                    QUERO PARTICIPAR DO CÓDIGO DO DESTINO
                </Button>
            </div>
        </Section>
    );
};

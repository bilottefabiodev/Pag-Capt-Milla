import { useEffect, useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Loader2 } from 'lucide-react';

export const RedirectGroup = () => {
    const [redirecting, setRedirecting] = useState(true);
    const WHATSAPP_LINK = 'https://foda-n8n-webhook.nxjcjs.easypanel.host/webhook/entrar-grupo';

    useEffect(() => {
        // Dispara o evento de Lead quando a página de obrigado for renderizada!
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Lead');
        }

        // Timer de redirecionamento em 2 segundos para dar tempo do pixel processar
        const timer = setTimeout(() => {
            window.location.href = WHATSAPP_LINK;
        }, 2500);

        // Se passar de 3.5s (celulares muito lentos), solta o botão manual
        const fallbackTimer = setTimeout(() => {
            setRedirecting(false);
        }, 3500);

        return () => {
            clearTimeout(timer);
            clearTimeout(fallbackTimer);
        };
    }, []);

    return (
        <div className="flex flex-col w-full bg-[#0A0A0A] overflow-x-hidden min-h-[100svh] text-white font-sans items-center justify-center p-4">
            <Section className="flex flex-col items-center justify-center text-center animate-fade-in-up w-full max-w-lg">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <span className="text-3xl">🚀</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                    Inscrição Confirmada!
                </h1>

                <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
                    Você está sendo redirecionada para o grupo exclusivo e silencioso do WhatsApp...
                </p>

                {redirecting ? (
                    <div className="flex flex-col items-center gap-4">
                        <Loader2 className="w-8 h-8 text-[var(--color-brand-start)] animate-spin" />
                        <span className="text-sm font-medium text-gray-500">Preparando acesso...</span>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-4 w-full">
                        <Button
                            className="w-full text-lg py-5 shadow-[0_0_40px_-10px_rgba(37,211,102,0.4)]"
                            onClick={() => window.location.href = WHATSAPP_LINK}
                        >
                            ENTRAR NO GRUPO VIP DO WHATSAPP
                        </Button>
                        <p className="text-sm text-gray-500">
                            Se o redirecionamento falhou, clique no botão acima para entrar manualmente.
                        </p>
                    </div>
                )}
            </Section>
        </div>
    );
};

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, icon = true, className = '', ...props }) => {
    return (
        <button
            className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-[var(--color-brand-start)] via-[var(--color-brand-middle)] to-[var(--color-brand-end)] px-8 py-4 font-bold text-white transition-all hover:scale-105 active:scale-95 ${className}`}
            {...props}
        >
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
                {icon && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
            </span>
            {/* Glow effect */}
            <div className="absolute -inset-1 -z-10 rounded-full bg-linear-to-r from-[var(--color-brand-start)] via-[var(--color-brand-middle)] to-[var(--color-brand-end)] opacity-30 blur-md transition-opacity group-hover:opacity-60" />
        </button>
    );
};

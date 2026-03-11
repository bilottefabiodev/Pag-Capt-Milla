import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`w-full py-20 px-4 md:px-8 xl:px-0 ${className}`}>
            <div className="mx-auto max-w-4xl">{children}</div>
        </section>
    );
};

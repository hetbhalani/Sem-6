import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    description?: string;
}

export function Card({ children, className = "", title, description }: CardProps) {
    return (
        <div className={`overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 shadow-sm ${className}`}>
            {(title || description) && (
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-900">
                    {title && <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{title}</h3>}
                    {description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>}
                </div>
            )}
            <div className="p-6">{children}</div>
        </div>
    );
}

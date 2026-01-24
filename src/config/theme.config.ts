export interface ThemeColors {
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    card: string;
    cardForeground: string;
    border: string;
}

export interface ThemeConfig {
    name: string;
    colors: ThemeColors;
    borderRadius: string;
    fonts: {
        sans: string;
        display: string;
    };
}

export const defaultTheme: ThemeConfig = {
    name: "Corporate Standard",
    colors: {
        primary: '#2563eb', // blue-600
        primaryForeground: '#ffffff',
        secondary: '#475569', // slate-600
        secondaryForeground: '#ffffff',
        background: '#ffffff',
        foreground: '#0f172a', // slate-900
        muted: '#f1f5f9', // slate-100
        mutedForeground: '#64748b', // slate-500
        card: '#ffffff',
        cardForeground: '#0f172a',
        border: '#e2e8f0', // slate-200
    },
    borderRadius: '0.5rem',
    fonts: {
        sans: '"Inter", system-ui, sans-serif',
        display: '"Inter", system-ui, sans-serif',
    },
};

/**
 * Injeção de cores no :root
 * Permite que o tema seja trocado em tempo real
 */
export const applyTheme = (theme: ThemeConfig) => {
    const root = document.documentElement;

    // Cores
    const kebabCase = (str: string) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

    Object.entries(theme.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${kebabCase(key)}`, value);
    });

    // Outros tokens
    root.style.setProperty('--radius', theme.borderRadius);
    root.style.setProperty('--font-sans', theme.fonts.sans);
    root.style.setProperty('--font-display', theme.fonts.display);
};

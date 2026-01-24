import { Button } from '../atomic/Button';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import type { TFunction } from 'i18next';
import heroBg from '../../assets/hero-bg.png';

interface HeroProps {
    variant?: 'centered' | 'split' | 'minimal';
}

export const Hero = ({ variant = 'centered' }: HeroProps) => {
    const { t } = useTranslation();

    if (variant === 'split') return <HeroSplit t={t} />;

    // Default Centered (Cover Background)
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-background">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>

            <div className="absolute inset-0 bg-grid-slate-100 z-0 opacity-20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                        Novidade 2026
                    </span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight text-foreground">
                        {t('hero.title').split(' ').map((word, i) => (
                            i === 1 ? <span key={i} className="text-primary">{word} </span> : <span key={i}>{word} </span>
                        ))}
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button size="lg" className="h-12 px-8 text-lg">
                        {t('hero.cta_primary')} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
                        {t('hero.cta_secondary')}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

const HeroSplit = ({ t }: { t: TFunction }) => (
    <section className="relative py-20 md:py-28 overflow-hidden bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-left"
            >
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-foreground">
                    {t('hero.title')}
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {t('hero.subtitle')}
                </p>

                <div className="space-y-4 mb-8">
                    {['Alta Performance', 'Design Exclusivo', 'Suporte 24/7'].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-foreground font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4">
                    <Button size="lg">
                        {t('hero.cta_primary')}
                    </Button>
                    <Button size="lg" variant="outline">
                        {t('hero.cta_secondary')}
                    </Button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative h-[400px] md:h-[500px] rounded-2xl bg-muted overflow-hidden border border-border"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-muted-foreground font-display text-xl">Hero Image Area</span>
                </div>
            </motion.div>
        </div>
    </section>
);

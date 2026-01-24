import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react';
import { Button } from '../atomic/Button';
import { Input } from '../atomic/Input';

const Footer = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-muted/30 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <h3 className="font-display font-bold text-2xl text-primary tracking-tight">BrandLogo</h3>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary">
                                <Instagram className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary">
                                <Linkedin className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary">
                                <Twitter className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary">
                                <Facebook className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 flex items-center gap-2 text-foreground">
                            {t('nav.about')}
                        </h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Nossa História</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Time Executivo</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Carreiras <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded ml-1">Vagas</span></a></li>
                            <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Imprensa</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-foreground">{t('nav.services')}</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Consultoria Estratégica</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Desenvolvimento de Software</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Design de Produto (UI/UX)</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Marketing Digital</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-foreground">Newsletter</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Receba novidades e insights exclusivos.
                        </p>
                        <div className="flex gap-2">
                            <Input placeholder="seu@email.com" className="bg-background" />
                            <Button size="icon">
                                <ArrowRightIcon className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 border-t border-border pt-8 mt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>{t('common.copyright').replace('2026', String(year))}</p>
                    <div className="flex items-center gap-1">
                        <span>Desenvolvido com</span>
                        <Heart className="h-3 w-3 text-destructive fill-destructive" />
                        <span>pela <strong>Capybara Holding</strong></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
)

export default Footer;

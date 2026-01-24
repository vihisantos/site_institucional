import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../atomic/Button';
import { Globe, Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'pt' ? 'en' : 'pt';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { href: '/', label: 'nav.home' },
        { href: '/about', label: 'nav.about' },
        { href: '/#services', label: 'nav.services' },
        { href: '/blog', label: 'nav.blog' },
        { href: '/contact', label: 'nav.contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="font-display font-bold text-xl text-primary tracking-tight">
                    Brand<span className="text-foreground">Logo</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {t(link.label)}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={toggleLanguage} title="Mudar idioma">
                        <Globe className="h-5 w-5" />
                    </Button>
                    <Button asChild>
                        <Link to="/client-area">{t('nav.clientArea')}</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <Button variant="ghost" size="icon" onClick={toggleLanguage}>
                        <Globe className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-b border-border bg-background p-4 space-y-4">
                    <nav className="flex flex-col space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="text-base font-medium hover:text-primary block px-2 py-1"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t(link.label)}
                            </Link>
                        ))}
                        <Link
                            to="/client-area"
                            className="text-base font-medium text-primary block px-2 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t('nav.clientArea')}
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};
export default Navbar;

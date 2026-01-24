import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeCustomizer } from '../ui/ThemeCustomizer';
import { useScrollToHash } from '../../hooks/useScrollToHash';
import { FloatingWhatsApp } from '../ui/FloatingWhatsApp';

const MainLayout = () => {
    useScrollToHash();

    return (
        <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col">
            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
            <ThemeCustomizer />
            <FloatingWhatsApp />
        </div>
    );
};

export default MainLayout;

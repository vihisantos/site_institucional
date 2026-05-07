import { MessageCircle } from 'lucide-react';
import { Button } from '../atomic/Button';
import { motion } from 'framer-motion';
import { trackContactMethod } from '../../lib/analytics';

export const FloatingWhatsApp = () => {
    const whatsappNumber = "5511937507066"; // Updated number
    const message = "Olá! Tenho interesse no Template Institucional da Capybara Holding.";
    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    const handleClick = () => {
        trackContactMethod("whatsapp");
    };

    return (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="bg-background border border-border px-4 py-2 rounded-lg shadow-lg hidden md:block"
            >
                <p className="text-sm font-medium">Interesse no Template?</p>
            </motion.div>

            <Button
                asChild
                className="rounded-full h-14 w-14 shadow-xl bg-[#25D366] hover:bg-[#128C7E] text-white border-none p-0"
            >
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco no WhatsApp" onClick={handleClick}>
                    <MessageCircle className="h-7 w-7" />
                    <span className="sr-only">WhatsApp</span>

                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </a>
            </Button>
        </div>
    );
};

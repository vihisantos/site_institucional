import { useState } from 'react';
import { Settings, X, Palette } from 'lucide-react';
import { Button } from '../atomic/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../atomic/Card';
import { Input } from '../atomic/Input';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeCustomizer = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Local state for inputs
    const [primaryColor, setPrimaryColor] = useState('#2563eb');
    const [radius, setRadius] = useState('0.5rem');

    const updatePrimary = (e: React.ChangeEvent<HTMLInputElement>) => {
        const color = e.target.value;
        setPrimaryColor(color);
        document.documentElement.style.setProperty('--color-primary', color);
        document.documentElement.style.setProperty('--color-ring', color);
    };

    const updateRadius = (val: string) => {
        setRadius(val);
        document.documentElement.style.setProperty('--radius', val);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4"
                    >
                        <Card className="w-80 shadow-2xl border-primary/20">
                            <CardHeader className="flex flex-row items-center justify-between pb-2 bg-muted/50 rounded-t-lg">
                                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                    <Palette className="h-4 w-4" /> Personalizar Tema
                                </CardTitle>
                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                                    <X className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-6 pt-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase text-muted-foreground">Cor Primária</label>
                                    <div className="flex gap-2">
                                        <Input
                                            type="color"
                                            value={primaryColor}
                                            onChange={updatePrimary}
                                            className="h-10 w-14 p-1 cursor-pointer"
                                        />
                                        <Input
                                            type="text"
                                            value={primaryColor}
                                            onChange={(e) => updatePrimary(e)}
                                            className="font-mono text-xs uppercase"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase text-muted-foreground">Arredondamento (Radius)</label>
                                    <div className="grid grid-cols-5 gap-2">
                                        {['0rem', '0.25rem', '0.5rem', '0.75rem', '1rem'].map((r) => (
                                            <button
                                                key={r}
                                                onClick={() => updateRadius(r)}
                                                className={`h-8 w-full border rounded-md transition-all ${radius === r ? 'bg-primary border-primary' : 'bg-background hover:bg-muted'
                                                    }`}
                                                style={{ borderRadius: r }}
                                                title={r}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-2 border-t text-xs text-muted-foreground">
                                    <p>Teste mudando cores e bordas. A UI se adapta instantaneamente.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="lg"
                className="rounded-full h-14 w-14 shadow-xl text-primary-foreground animate-in slide-in-from-bottom duration-500"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Settings className="h-6 w-6 animate-spin-slow" />}
            </Button>
        </div>
    );
};

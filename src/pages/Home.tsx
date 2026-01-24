import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero variant="centered" />
            <Services />

            {/* CTA Section */}
            <section className="py-20 bg-primary/5 border-t border-primary/10">
                <div className="container mx-auto px-4 text-center">
                    <ScrollReveal width="100%" variant="scaleUp">
                        <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Junte-se a centenas de empresas que já transformaram sua presença digital.
                        </p>
                        <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 hover:scale-105 hover:shadow-xl transition-all duration-300">
                            Fale com um Especialista
                        </button>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Home;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../atomic/Card';
import { Layout, Zap, Shield, Users } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const services = [
    {
        icon: Layout,
        title: "Design Responsivo",
        description: "Seu site incrível em qualquer dispositivo, do celular ao desktop 4k."
    },
    {
        icon: Zap,
        title: "Performance Extrema",
        description: "Carregamento ultra-rápido otimizado para Core Web Vitals do Google."
    },
    {
        icon: Shield,
        title: "Segurança Total",
        description: "Proteção contra ataques DDoS e criptografia de ponta a ponta."
    },
    {
        icon: Users,
        title: "Foco no Usuário",
        description: "Interfaces intuitivas projetadas para converter visitantes em clientes."
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Nossas Soluções</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Tecnologia de ponta para impulsionar o seu negócio para o próximo nível.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} variant="scaleUp">
                            <Card className="h-full border-border/50">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-transform hover:scale-110 hover:rotate-3">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

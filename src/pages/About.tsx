import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Sobre Nós</h1>
                <p className="text-xl text-muted-foreground">
                    Somos apaixonados por criar experiências digitais que conectam marcas e pessoas.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="prose prose-lg dark:prose-invert">
                    <h3>Nossa História</h3>
                    <p>
                        Fundada em 2024, nossa missão sempre foi clara: simplificar a tecnologia para empresas em crescimento.
                        Começamos em um pequeno escritório e hoje atendemos clientes em mais de 10 países.
                    </p>
                    <p>
                        Acreditamos que o design não é apenas como algo parece, mas como funciona.
                    </p>
                </div>
                <div className="bg-muted rounded-2xl h-[300px] flex items-center justify-center border border-border">
                    <span className="text-muted-foreground">Team Photo Placeholder</span>
                </div>
            </div>
        </div>
    );
};

export default About;

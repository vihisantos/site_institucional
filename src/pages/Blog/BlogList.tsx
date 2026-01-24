import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../../components/atomic/Card';
import { Button } from '../../components/atomic/Button';
import { Calendar } from 'lucide-react';
import { ScrollReveal } from '../../components/ui/ScrollReveal';

const mockPosts = [
    {
        id: 1,
        title: "5 Tendências de Tecnologia para 2026",
        excerpt: "Descubra o que vai dominar o mercado de software no próximo ano.",
        date: "12 Jan 2026",
        category: "Tecnologia"
    },
    {
        id: 2,
        title: "Como Otimizar a Produtividade da sua Equipe",
        excerpt: "Estratégias comprovadas para times remotos e híbridos.",
        date: "08 Jan 2026",
        category: "Gestão"
    },
    {
        id: 3,
        title: "O Futuro do Design Institucional",
        excerpt: "Por que identidades visuais dinâmicas são o novo padrão.",
        date: "03 Jan 2026",
        category: "Design"
    }
];

const BlogList = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <ScrollReveal width="100%">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-display font-bold mb-4">Blog & Insights</h1>
                    <p className="text-muted-foreground">Conteúdo exclusivo para impulsionar seu conhecimento.</p>
                </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
                {mockPosts.map((post, index) => (
                    <ScrollReveal key={post.id} delay={index * 0.15} variant="slideUp">
                        <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
                            <div className="h-48 bg-muted rounded-t-lg w-full flex items-center justify-center overflow-hidden group">
                                <span className="text-muted-foreground group-hover:scale-110 transition-transform duration-500">Image Placeholder</span>
                            </div>
                            <CardHeader>
                                <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                                    <span className="bg-primary/10 px-2 py-1 rounded-full">{post.category}</span>
                                    <span className="flex items-center text-muted-foreground gap-1">
                                        <Calendar className="h-3 w-3" /> {post.date}
                                    </span>
                                </div>
                                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                            </CardHeader>
                            <CardFooter className="mt-auto">
                                <Button variant="link" className="px-0">Ler Artigo Completo</Button>
                            </CardFooter>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
};

export default BlogList;

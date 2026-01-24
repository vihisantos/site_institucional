import { Button } from '../components/atomic/Button';
import { MapPin, Clock } from 'lucide-react';

const positions = [
    {
        id: 1,
        title: "Frontend Developer Senior",
        department: "Engenharia",
        location: "Remoto (Brasil)",
        type: "Tempo Integral"
    },
    {
        id: 2,
        title: "UX/UI Designer",
        department: "Design",
        location: "São Paulo, SP",
        type: "Híbrido"
    },
    {
        id: 3,
        title: "Sales Executive",
        department: "Vendas",
        location: "Remoto",
        type: "Tempo Integral"
    }
];

const Careers = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-display font-bold mb-4">Trabalhe Conosco</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Estamos sempre em busca de talentos excepcionais para integrar nosso time.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {positions.map((job) => (
                    <div key={job.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{job.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">{job.department}</span>
                                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {job.type}</span>
                            </div>
                        </div>
                        <Button>Ver Detalhes</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Careers;

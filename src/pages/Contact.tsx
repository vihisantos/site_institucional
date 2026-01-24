import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../components/atomic/Button';
import { Input } from '../components/atomic/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/atomic/Card';

const contactSchema = z.object({
    name: z.string().min(2, "Nome é obrigatório"),
    email: z.string().email("Email inválido"),
    message: z.string().min(10, "Mensagem muito curta"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: ContactForm) => {
        console.log(data);
        alert("Mensagem enviada com sucesso (Mock)!");
    };

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Entre em Contato</CardTitle>
                        <CardDescription>
                            Preencha o formulário abaixo e retornaremos em até 24h.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Nome</label>
                                <Input {...register('name')} placeholder="Seu nome" />
                                {errors.name && <span className="text-xs text-destructive">{errors.name.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input {...register('email')} placeholder="seu@email.com" />
                                {errors.email && <span className="text-xs text-destructive">{errors.email.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Mensagem</label>
                                <textarea
                                    {...register('message')}
                                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Como podemos ajudar?"
                                />
                                {errors.message && <span className="text-xs text-destructive">{errors.message.message}</span>}
                            </div>

                            <Button type="submit" className="w-full">Enviar Mensagem</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Contact;

import { Button } from '../components/atomic/Button';
import { Input } from '../components/atomic/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/atomic/Card';
import { Lock } from 'lucide-react';

const ClientArea = () => {
    return (
        <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[60vh]">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Área do Cliente</CardTitle>
                    <CardDescription>Acesse o painel para gerenciar seus serviços</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input type="email" placeholder="cliente@empresa.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Senha</label>
                        <Input type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full">Entrar</Button>
                    <div className="text-center">
                        <a href="#" className="text-xs text-muted-foreground hover:text-primary underline">Esqueci minha senha</a>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ClientArea;

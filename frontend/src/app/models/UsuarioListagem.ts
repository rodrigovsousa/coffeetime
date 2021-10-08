import { Select } from 'src/app/models/Select';

export default interface UsuarioListagem {
    id: string;
    nome: string;
    email: string;
    cargo: Select;
    status: boolean;
}

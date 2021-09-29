import Select from "./Select";

export default interface UsuarioListagem {
    id: string;
    nome: string;
    email: string;
    cargo: Select;
    status: boolean;
}
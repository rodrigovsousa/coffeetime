import Cargo from "./Cargo";
import { Select } from "./Select";

export default interface Usuario {
    id: string;
    nome: string;
    cpf: string;
    email: string;
    dataDeNascimento: any;
    status: boolean;
    telefone: number;
    cargo: Select;
}

import Cargo from "./Cargo";

export default interface Usuario {
    id: string;
    nome: string;
    cpf: string;
    email: string;
    dataDeNascimento: any;
    status: boolean;
    telefone: string;
    cargo: Cargo;
}

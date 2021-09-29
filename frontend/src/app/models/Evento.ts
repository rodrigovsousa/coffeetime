import Usuario from "./Usuario"
import Situacao from "./Situacao"

export default interface Evento {
    id: string;
    data: any;
    justificativaAdiamento: string;
    valor: number;
    situacao: Situacao;
    patrocinador: string;
    usuario: Usuario[];
}
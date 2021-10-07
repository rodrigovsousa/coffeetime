import Usuario from "./Usuario";
import Situacao from "./Situacao";

export default interface Evento {
    id?: string;
    data: any;
    valor: number;
    motivo: string;
    patrocinador: [];
    usuario: Usuario[];
}

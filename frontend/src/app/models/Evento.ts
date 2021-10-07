import { SelectItem } from 'primeng';
import Usuario from "./Usuario";
import Situacao from "./Situacao";

export default interface Evento {
    id: any;
    data: string;
    valor: number;
    motivo: string;
    patrocinador: SelectItem[]
}

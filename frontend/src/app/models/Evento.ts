import { SelectItem } from 'primeng';
import Usuario from "./Usuario";
import Situacao from "./Situacao";

export default interface Evento {
    id: any;
    data: any;
    valor: number;
    motivo: SelectItem;
    patrocinador: SelectItem[]
}

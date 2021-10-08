import { SelectItem } from 'primeng';
import Usuario from "./Usuario";
import Situacao from "./Situacao";

export default interface ConsutaEvento {
    id: any;
    data: any;
    valor: number;
    motivo: SelectItem;
    patrocinadores: Usuario[];
    nomesPatrocinadores: string;
}

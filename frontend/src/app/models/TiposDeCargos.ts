import Cargo from "./Cargo";

export default class TiposDeCargos {
    labels = [
        {
            label: "Estagiário",
            value: 1,
        },
        {
            label: "Junior",
            value: 2,
        },
        {
            label: "Pleno",
            value: 3,
        },
        {
            label: "Sênior",
            value: 4,
        },
    ];

    getTipoCargo(cargo: Cargo) {
        const { label } = this.labels.find(
            (t) => t.value === cargo.idTipoCargo
        );
        cargo.tipoCargo = label;

        return cargo;
    }
}

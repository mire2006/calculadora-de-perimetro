import { FiguraGeometrica } from "./figura-geometrica";

export class TrianguloEquilatero extends FiguraGeometrica {
    ladoA: number;

    constructor(ladoA: number) {
        super("Triángulo Equilátero");
        this.ladoA = ladoA;
    }

    calcularPerimetro(): number {
        return this.ladoA * 3;
    }
}

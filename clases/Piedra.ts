import { Mano } from "./Mano";

export class Piedra extends Mano {
    gana(mano: Mano): string {
        return mano.ganaPiedra();
    }

    ganaPiedra(): string {
        return "Empate";
    }

    ganaPapel(): string {
        return "Pierde";
    }

    ganaTijera(): string {
        return "Gana";
    }
}
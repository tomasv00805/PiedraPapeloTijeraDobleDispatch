import {Mano} from "./Mano";

export class Tijera extends Mano{
    gana(mano:Mano):string{
        return mano.ganaTijera();
    }

    ganaPiedra():string{
        return "Pierde";
    }

    ganaPapel():string{
        return "Gana";
    }

    ganaTijera():string{
        return "Empate";
    }
}
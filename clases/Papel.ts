import {Mano} from "./Mano";

export class Papel extends Mano{
    gana(mano:Mano):string{
        return mano.ganaPapel();
    }

    ganaPiedra():string{
        return "Gana";
    }

    ganaPapel():string{
        return "Empate";
    }

    ganaTijera():string{
        return "Pierde";
    }
}
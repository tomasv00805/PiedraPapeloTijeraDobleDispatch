import {Piedra} from "../clases/Piedra";
import {Papel} from "../clases/Papel";
import {Tijera} from "../clases/Tijera";



const piedra:Piedra = new Piedra();
const papel:Papel = new Papel();
const tijera:Tijera = new Tijera();
let resultado:string= piedra.gana(papel);
//test resultada "gana"

test ("Papel gana a piedra", () => {
    expect(resultado).toBe("Gana");
});

test ("Pierda pierde", () => {
    expect(papel.gana(piedra)).toBe("Pierde");
});

test ("Gana tijera", () => {
    expect(papel.gana(tijera)).toBe("Gana");
});

test ("Empate", () => {
    expect(papel.gana(papel)).toBe("Empate");
});
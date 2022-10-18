let skaicius = +prompt("Įveskite skaičių, kurį didinsime iki teigiamo");
let skirtumas = +prompt("Įveskite kas kiek didinti");

skaicius = didintiPoKazkiekIkiTeigiamo(skaicius, skirtumas);

console.log(`Nauja skaiciaus reikšmė yra: ${skaicius}`);

console.log("-----------------");

let tekstas = prompt("Įveskite tekstą nuo kurio nuimsime skaičius");
tekstas = grazintiTekstaIkiSkaiciu(tekstas);
console.log(`Tekstas be skaičių: ${tekstas}`);


/**
 * 
 * @param {*} x skaičius, kurį didinsime
 * @param {*} d kas kiek didinti
 * @returns skaičių padidintą iki teigiamo
 */
function didintiPoKazkiekIkiTeigiamo(x, d) {
    while (x < 0) {
        x += d;
        console.log(x);
    }
    return x;
}

function grazintiTekstaIkiSkaiciu(tekstas) {
    let i = 0;
    let naujasTekstas = "";
    while (!"0123456789".includes(tekstas[i])) {
        naujasTekstas += tekstas[i];
        i++;
    }
    return naujasTekstas;
}
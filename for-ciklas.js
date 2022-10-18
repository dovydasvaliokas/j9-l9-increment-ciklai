for (let i = 0; i < 5; i++) {
    console.log(i);
}

bruksniukuIsvedimas();

let pradzia = +prompt("Įveskite nuo kurio skaičiaus pradėti");
let pabaiga = +prompt("Įveskite iki kurio skaičiaus daryti");

isvestiNuoIki(pradzia, pabaiga);
bruksniuIsvedimasSuKiekiu(20);

let skirtumas = +prompt("Įveskite aritmetinės progresijos skirtumą");
let progresijosSuma = aritmetinesProgresijosSuma(pradzia, pabaiga, skirtumas);

console.log(`Aritmetinės progresijos nuo ${pradzia} iki ${pabaiga} didinant kas ${skirtumas} suma yra: ${progresijosSuma}`);

bruksniuIsvedimasSuKiekiu(30);
isvestiNuoIkiAtgal(50, 30, 2);

function bruksniukuIsvedimas() {
    console.log("-----------------");
}

function bruksniuIsvedimasSuKiekiu(kiekis) {
    let bruksniuString = "";
    for (let i = 0; i < kiekis; i++) {
        bruksniuString += "-";
    }
    console.log(bruksniuString);
}

function isvestiNuoIki(pradzia, pabaiga) {
    for (let i = pradzia; i < pabaiga; i++) {
        console.log(i);
    }
}

/**
 * 
 * @param {*} pradzia nuo kurio skaičiaus prasideda aritmetinė progresija
 * @param {*} pabaiga iki kurio skaičiaus tęsiasi aritmetinė progresija
 * @param {*} d skirtumas kas kiek didinti skaičius
 * @returns apskaičiauotą aritmetinės progresijos sumą
 */
function aritmetinesProgresijosSuma(pradzia, pabaiga, d) {
    let suma = 0;
    for (let i = pradzia; i < pabaiga; i += d) {
        suma += i;
    }
    return suma;
}


function isvestiNuoIkiAtgal(pradzia, pabaiga, d) {
    for (let i = pradzia; i > pabaiga; i -= d) {
        console.log(i);
    }
}
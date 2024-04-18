const chilometri = prompt("Quanti Chilometri vuole percorrere?");
console.log(chilometri);

let età = prompt("Inserire età");
console.log(età);

let prezzo = chilometri * 0.21;
console.log(prezzo);


if ( età < 18 ) {
   prezzo -= prezzo * 0.20;
   
}
else if ( età > 65 ) {
    prezzo -= prezzo * 0.40;

}
else {
    prezzo = prezzo
}


alert("Il prezzo del suo biglietto è: " + prezzo.toFixed(2) + `€`);
console.log('JS ok')

// calcolo km
const kmDaPercorrere = prompt('Quanti km vuoi percorrere?');
document.getElementById('km').innerHTML = 'km da percorrere:' + kmDaPercorrere;

//calcolo età
const età = prompt('Quanti anni hai?');
document.getElementById ('anni').innerHTML = 'anni:' + età;

// alert inserire km
if(kmDaPercorrere <= 0){
    alert('Si prega di inserire correttamente il numero di km');
}

 // calcolo prezzo del biglietto
 var prezzoBiglietto = 0.21 * kmDaPercorrere;
 var scontistica= 'Nessuno Sconto';

 if(età < 18){
    prezzoBiglietto = (prezzoBiglietto * 0.8).toFixed(2);
    scontistica = 'Sconto Minorenne';
} else if(età > 65){
    prezzoBiglietto = (prezzoBiglietto * 0.6).toFixed(2);
    scontistica = 'Sconto Over 65';
}

document.getElementById('offerta').innerHTML = scontistica;
document.getElementById('costo-biglietto').innerHTML = prezzoBiglietto + '€'; 
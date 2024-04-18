document.addEventListener('DOMContentLoaded', function() {
    // Serve ad avviare il codice dopo che la pagina html è completamente caricata
    const button = document.getElementById('calculateButton');
    button.addEventListener('click', calculatePrice);
});

function calculatePrice() {
    const chilometri = document.getElementById('chilometri').value;
    const età = document.getElementById('età').value;

    let price = chilometri * 0.21;

    if (età < 18) {
        price -= price * 0.20;  
    } else if (età > 65) {
        price -= price * 0.40;  
    }

    console.log(`Il prezzo del biglietto è: €${price.toFixed(2)}`);
}
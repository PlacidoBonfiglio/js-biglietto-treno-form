console.log('JS OK');

// 1. Retrieve the element of my interest from the DOM
// 2. Prepare the variable with the cost of the ticket based on the kilometers driven
// 3. Ask the user for the number of kilometers they want to travel
// 4. Ask the user for his or her age
// 5. Calculate the total price of the trip
// 6. Apply discount based on age
// 7. Print Elements into the DOM
// 8. Remove "d-none" class from ticket
// 9. Clear Form after pressing "Generate" button

// PREPARATORY PHASE
// Retrieve the element of my interest from the DOM

// FORM
const form = document.querySelector('form');
const fullNameField = document.getElementById('fullname');
const kilometersField = document.getElementById('kilometers');
const ageField = document.getElementById('age');
const generateBtn = document.getElementById('generate');

// TICKET
const ticket = document.getElementById('ticket');
const passengerName = document.getElementById('passenger-name');
const offer = document.getElementById('offer');
const carriage = document.getElementById('carriage');
const pnr = document.getElementById('pnr');
const totalPrice = document.getElementById('price');

// Kilometer Price
const kilometerPrice = 0.21;

// Rate
let rateName = 'Regular rate';


// FASE GESTIONE EVENTI
// clicco il bottone "Generate"
generateBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // recupero input nome
    const fullName = fullNameField.value.trim();

    //recupero input kilometri da percorrerre
    const totalKilometers = parseInt(kilometersField.value);

    //recupero dell'età
    const passengerAge = ageField.value;

    console.log('fullName', fullName);
    console.log('totalKilometers', totalKilometers);
    console.log('passengerAge', passengerAge);

    // Calcolo del prezzo base 
    let price = totalKilometers * kilometerPrice;

    // Verifica sconto in base all'età
    if (passengerAge === 'minor') {
        price = price * 0.8;
        rateName = 'Minor rate';
    } else if ( passengerAge === 'senior') {
        price = price * 0.6;
        rateName = 'Senior Rate'
    }

    console.log(price, rateName);

    // Numero random della carrozza del treno
    const randomCarriage = Math.floor(Math.random() * 9) + 1;

    // Numero random PNR
    const randomPnr = Math.floor(Math.random() * (100000 - 90000)) + 90000;

    // Stampo Nome Completo
    passengerName.innerText = fullName;

    // Stampo Offerta
    offer.innerText = rateName;

    // Stampo Carrozza
    carriage.innerText = randomCarriage;

    // Stampo PNR
    pnr.innerText = randomPnr;

    // STampo il Prezzom del biglietto
    totalPrice.innerText = '€ ' + price.toFixed(2);

    // Rimuovo la clase d-none dal biglietto
    ticket.classList.remove('d-none');

    // FORM reset
    fullNameField.value = '';
    kilometersField.value = 5;
    ageField.value = '';
    //form.reset();
})
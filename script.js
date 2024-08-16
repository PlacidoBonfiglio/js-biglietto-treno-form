console.log('JS OK');

// 1. Retrieve the element of my interest from the DOM
// 2. Prepare the variable with the cost of the ticket based on the kilometers driven
// 3. Ask the user for the number of kilometers they want to travel
// 4. Ask the user for his or her age
// 5. Calculate the total price of the trip
// 6. Apply discount based on age
// 7. Insert the ticket price into the DOM

// PREPARATORY PHASE
// 1. Retrieve the element of my interest from the DOM
const form = document.querySelector('form');
const fullNameField = document.getElementById('fullname');
const kilometersField = document.getElementById('kilometers');
const age = document.getElementById('age');
const generateBtn = document.getElementById('generate');
const passengerName = document.getElementById('passenger-name');
const offer = document.getElementById('offer');
const carriage = document.getElementById('carriage');
const pnr = document.getElementById('pnr');
const price = document.getElementById('price');

// Kilometer Price
const kilometerPrice = 0.21;


// FASE GESTIONE EVENTI
// Passenger Name
generateBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // recupero input nome
    const fullName = fullNameField.value.trim();

    //recupero input kilometri da percorrerre
    const totalKilometers = kilometersField.value;

    //recupero dell'età
    const passengerAge = age.value;


    // stampo
    if (fullName) {
        passengerName.innerText = fullName;
        fullNameField.value = '';
    }

    if (totalKilometers) {
        kilometersField.value = '';
    }

}
)



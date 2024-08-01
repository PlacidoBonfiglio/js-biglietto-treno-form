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
const fullNameField = document.getElementById('fullname');
const kilField = document.getElementById('kilometers');
const generateBtn = document.getElementById('generate');
const input = document.querySelector('input');
const passengerName = document.getElementById('passenger-name');
const offer = document.getElementById('offer');
const price = document.getElementById('price');


// FASE GESTIONE EVENTI
// Passenger Name
generateBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // recupero input
    const fullName = input.value.trim();

    // stampo
    if (fullName) {
        passengerName.innerText = fullName;
        input.value = '';
    }
})
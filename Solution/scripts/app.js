'use strict';

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded');

    //uppgift1();
    //uppgift2();
    //uppgift3();
    uppgift4();
});

function uppgift1() {

    fetch('https://santosnr6.github.io/Data/pokemons.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.map(pokemon => console.log(pokemon.name));
        const mainRef = document.querySelector('main');
        data.map(pokemon => {
            const headRef = document.createElement('h1');
            headRef.textContent = capitalizeAndReplace(pokemon.name);
            mainRef.appendChild(headRef);
        });
    })
    .catch(error => {
        console.log(error);
    });
}

async function uppgift2() {
    const response = await fetch('https://santosnr6.github.io/Data/dogs.json');
    const hundar = await response.json();
    console.log(hundar);

    const mainRef = document.querySelector('main');
    hundar.map(hund => {
        console.log(hund.sex);
        const headRef = document.createElement('h2');
        headRef.textContent = hund.name;
        mainRef.appendChild(headRef);
    });
}

async function uppgift3() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/books.json');
        if(!response.ok) {
            throw 'Något gick väldigt, väldigt fel...';
        }

        const books = await response.json();

        console.log(books);
        const mainRef = document.querySelector('main');

        for(let book of books) {
            console.log(book.pages);
            if(book.pages < 501) {
                const headRef = document.createElement('h2');
                headRef.textContent = book.title;
                mainRef.appendChild(headRef);
            } else {
                console.log(`Boken ${book.name} har för många sidor`);
            }
        }
    } catch(error) {
        console.log(error);
    }
}

function uppgift4() {
    fetch('https://santosnr6.github.io/Data/attendees.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        const mainRef = document.querySelector('main');
        data.forEach(function(person) {
            const pRef = document.createElement('p');
            if(person.attending) {
                pRef.textContent = `${person.name} kommer på mötet!`;
            } else {
                pRef.textContent = `${person.name} kommer inte på mötet...`;
            }
            mainRef.appendChild(pRef);
        });

        const headRef = document.createElement('h1');
        headRef.textContent = 'Följande personer som kommer har allergier';
        mainRef.appendChild(headRef);

        data.forEach(function(person) {
            if(person.attending && person.allergies.length > 0) {
                const pRef = document.createElement('p');
                pRef.textContent = `${person.name} kommer på mötet och har en allergi!`;
                mainRef.appendChild(pRef);
            }
        });
    })
    .catch(function(error) {
        console.log(error);
    });
}




function capitalizeAndReplace(str) {
    // Kontrollera om strängen är tom
    if (!str) {
        return str; // Returnera strängen om den är falsy
    }

    // Dela upp strängen vid varje bindestreck och applicera stor bokstav på varje del
    const parts = str.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1));

    // Sammanfoga delarna med mellanslag
    const modifiedStr = parts.join(' ');

    // Gör den första bokstaven till stor bokstav
    return modifiedStr.charAt(0).toUpperCase() + modifiedStr.slice(1);
}
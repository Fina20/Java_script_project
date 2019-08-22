const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function perform(books) {
    console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
    allBooksRented(books);

    console.log("Quel est livre le plus emprunté ?");
    mostRentedBooks(books);

    console.log("Quel est le livre le moins emprunté ?");
    leastRentedBooks(books);

    console.log("Trouve le livre avec l'ID: 873495 ;");
    id = 873495;
    findBookByID(books, id);

    console.log("Supprime le livre avec l'ID: 133712 ;");
    id = 133712;
    deleteBookByID(books, id);

    console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
    sortEntrepreneurs(books)
}

perform(books);

function allBooksRented(books) {
    let allRented = true;
    for (let i = 0; i < books.length; i++) {
        if (books[i].rented <= 1) {
            allRented = false
        }
    }
    console.log(allRented);
}

function mostRentedBooks(books) {
    let rented = books[0].rented;
    let mostRentedValue = Math.max.apply(Math, books.map(function (o) { return o.rented; }))
    let mostRentedBook = books.find(book => book.rented === mostRentedValue);
    console.log(mostRentedBook);
}

function leastRentedBooks(books) {
    let rented = books[0].rented;
    let leastRentedValue = Math.min.apply(Math, books.map(function (o) { return o.rented; }))
    let leastRentedBook = books.find(book => book.rented === leastRentedValue);
    console.log(leastRentedBook);
}

function findBookByID(books, id) {
    let book = books.find(book => book.id === id);
    console.log(book);
}

function deleteBookByID(books, id) {
    let book = books.find(book => book.id === id);
    for (var i = books.length - 1; i >= 0; i--) {
        if (books[i].id == id) {
            books.splice(i, 1);
            console.log("Le livre ayant pour ID: " + id + " a été supprimé")
        } else if (i == 0) {
            console.log("Aucun livre avec l'ID: ${id} n'a été trouvé dans la liste")
        }
    }
}

function sortEntrepreneurs(books) {
    console.log(books.sort(compare));
}

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const nameA = a.title.toUpperCase();
    const nameB = b.title.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}



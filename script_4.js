const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];


perform(entrepreneurs)


function perform(entrepreneurs) {
    console.log("Nom des entrepreneurs nés dans les années 70 :");
    bornInThe70s(entrepreneurs);

    console.log("Nom et prénom des entrepreneurs de la liste :")
    entrepreneursName(entrepreneurs);

    console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
    entrepreneursAgeToday(entrepreneurs);

    console.log("Trier les entrepreneurs par order alphabétique (last name) :");
    sortEntrepreneurs(entrepreneurs);

}

function bornInThe70s(entrepreneurs) {
    let names = [];
    for (let i = 0; i < entrepreneurs.length; i++) {
        if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980) {
            names.push(entrepreneurs[i].first)
        }
    }
    console.log(names)
}

function entrepreneursName(entrepreneurs) {
    let names = []
    for (let i = 0; i < entrepreneurs.length; i++) {
        names.push(entrepreneurs[i].first + " " + entrepreneurs[i].last);
    }
    console.log(names)
}


function entrepreneursAgeToday(entrepreneurs) {
    let entrepreneursWithAge = []
    for (let i = 0; i < entrepreneurs.length; i++) {
        entrepreneursWithAge.push(entrepreneurs[i]);
        entrepreneursWithAge[i].age = 2019 - entrepreneurs[i].year;
    }
    console.log(entrepreneursWithAge)
}


function sortEntrepreneurs(entrepreneurs) {
    console.log(entrepreneurs.sort(compare));
}

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const nameA = a.last.toUpperCase();
    const nameB = b.last.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}




const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stepehn R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length;

console.log("Total de categorias:");
console.log(totalCategories);
console.log();

for (let bookCategory of booksByCategory) {
    console.log('Total de livros por categoria:', bookCategory.category);
    console.log(bookCategory.books.length);
}

console.log();

function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author);
            }
        }
    }

    console.log("Total de autores:", authors.length);
}

console.log();

function booksOfAugustoCury() {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === 'Augusto Cury') {
                books.push(book.title);
        }
    }
}

    console.log("Livros do autor:", books);
}

booksOfAugustoCury();
console.log();

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title);
        }
    }
}

    console.log(`Livros do ${author}: ${books.join(", ")}`);
}

booksOfAuthor('Augusto Cury');
booksOfAuthor('George S. Clason');

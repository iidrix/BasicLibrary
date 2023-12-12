const form = document.querySelector('form');
const titleInput = document.getElementById('book_title');
const authorInput = document.getElementById('book_author');
const pagesInput = document.getElementById('book_pages');
const statusInput = document.getElementById('book_status');
const outputMessage = document.getElementById('output-message');
const resetButton = document.getElementById('reset-button');

const myLibrary = [];
let tableOutput;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookStatus;
    this.bookStatusAssignment = () => {
        if (read === "true") {
            this.bookStatus = "already read";
        } else if (read === "false") {
            this.bookStatus = "not yet read";
        }
    };
    this.bookStatusAssignment();
    this.info = () => { return `${title} by ${author}, ${pages} pages, with status ${this.bookStatus} has been added.`; };
}

function addBookToLibrary() {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = statusInput.value;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    outputMessage.innerHTML = newBook.info();
}

function renderTable() {
    tableOutput = myLibrary.map(book => `<tr data-object-id="${myLibrary.indexOf(book)}"><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.bookStatus}</td></tr>`).join('');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    renderTable();
    document.querySelector("#myTable tbody").innerHTML = tableOutput;
    form.reset();
});

resetButton.addEventListener('click', () => {
    location.reload();
});



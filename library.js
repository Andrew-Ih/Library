const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBook() {
    const container = document.querySelector(".books-container");
    container.innerHTML = ''; // Clear previous content

    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');

        const title = document.createElement('div');
        title.textContent = book.title;
        title.classList.add('book-title');
        bookCard.appendChild(title);

        const author = document.createElement('div');
        author.textContent = book.author;
        author.classList.add('author');
        bookCard.appendChild(author);

        const pages = document.createElement('div');
        pages.textContent = book.pages;
        pages.classList.add('pages');
        bookCard.appendChild(pages);

        const readStatus = document.createElement('button');
        readStatus.textContent = (book.read ? 'Yes' : 'No');
        readStatus.classList.add('read');
        bookCard.appendChild(readStatus);

        const remove = document.createElement('button');
        remove.textContent = "Remove";
        remove.classList.add('remove');
        bookCard.appendChild(remove);

        container.appendChild(bookCard);
    });
}

  addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
  addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false);
  addBookToLibrary('1984', 'George Orwell', 328, true);
 
  // Display initial books
  displayBook();


const addBook = document.querySelector(".add-book");
addBook.addEventListener("click", () => {
    alert("Book added");
});

const readButton = document.querySelectorAll(".read");
readButton.addEventListener("click", () => {
    alert("Book added");
});

const remove = document.querySelectorAll(".remove");
remove.addEventListener("click", () => {
    alert("Book added");
});

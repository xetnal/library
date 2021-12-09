
const addBtn = document.getElementById('popup');
// form inputs to use in the constructor
const form = document.getElementById('bookForm');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const submitBtn = document.getElementById('submitBtn');
const libraryContainer = document.getElementById('library');

//Book object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = uuidv4();
    
}

function displayLibrary() {
    libraryContainer.innerHTML = '';
    for (let book of myLibrary) {
        const bookCard = document.createElement('div');
        libraryContainer.appendChild(bookCard);
        bookCard.setAttribute('class', 'bookTemplate');
        bookCard.setAttribute('id', book.title)
        let bookName = document.createElement('h2');
        bookName.innerHTML = book.title;
        bookCard.appendChild(bookName);
        let author = document.createElement('p');
        author.innerHTML = book.author;
        bookCard.appendChild(author);
        let pages = document.createElement('p');
        pages.innerHTML = book.pages;
        bookCard.appendChild(pages);
        let read = document.createElement('p');
        read.innerHTML = book.read;
        bookCard.appendChild(read);
        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id', 'deleteBtn')
        deleteBtn.innerHTML = 'DELETE'
        bookCard.appendChild(deleteBtn)
        deleteBtn.addEventListener('click', () => {
            const idToDelete = book.id;
            myLibrary = myLibrary.filter(book => book.id !== idToDelete);
            displayLibrary();
        })
        const readBtn = document.createElement('button');
        readBtn.innerHTML = 'Toggle Read';
        readBtn.setAttribute('class', 'readBtn');
        bookCard.appendChild(readBtn);
        readBtn.addEventListener('click', () => {
            if (read.innerHTML === 'Not Read') {
                read.innerHTML = 'Read';
            } 
            else if (read.innerHTML === 'Read') {
                read.innerHTML = 'Not Read';
            }
        })
    }
}

//Library array
let myLibrary = [
    
];



submitBtn.addEventListener("click", () => {
    const hasRead = document.querySelector('input[name="isItRead"]:checked')?.value;
    newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, hasRead)
    myLibrary.push(newBook);
    console.table(myLibrary);
    console.log(hasRead);
    displayLibrary();
    closeForm();
    form.reset();
})

// button to open the form
addBtn.addEventListener("click", openForm);

function addBookCard(book) {

}
function openForm() {
    document.getElementById('bookForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('bookForm').style.display = 'none';
}

console.table(myLibrary)


//random id generator
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
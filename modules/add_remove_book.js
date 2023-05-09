import { Books } from './Books_class.js';

const books = new Books();

function addBookSubmit() {
  const addBookForm = document.getElementById('add-book-form');
  addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    books.addBook(title, author);
    books.displayBooks();
    addBookForm.reset();
  });
}

function removeBookClick() {
  const bookList = document.getElementById('book-list');
  bookList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-title')) {
      const { id } = event.target.dataset;
      books.removeBook(id);
      books.displayBooks();
    }
  });
}

export { addBookSubmit, removeBookClick };
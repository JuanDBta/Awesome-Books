import { Books } from './Books_class.js';

const books = new Books();
const addBookForm = document.getElementById('add-book-form');

export default function AddBookSubmit(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  books.addBook(title, author);
  books.displayBooks();
  addBookForm.reset();
}

addBookForm.addEventListener('submit', AddBookSubmit);

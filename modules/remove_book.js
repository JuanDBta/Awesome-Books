import { Books } from './Books_class.js';

const books = new Books();
const bookList = document.getElementById('book-list');

function RemoveBookClick(event) {
  if (event.target.classList.contains('remove-title')) {
    const { id } = event.target.dataset;
    books.removeBook(id);
    books.displayBooks();
  }
}
bookList.addEventListener('click', RemoveBookClick);

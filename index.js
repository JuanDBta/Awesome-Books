import { Books } from './modules/Books_class.js';
import { updateDateTime } from './modules/display_time.js';
import { addBookSubmit, removeBookClick } from './modules/add_remove_book.js';
import { controlNavBar } from './modules/nav_bar_events.js';

const books = new Books();
books.displayBooks();

updateDateTime();
setInterval(updateDateTime, 1000);

addBookSubmit();
removeBookClick();

controlNavBar('#list', '#addBook', '#contact');
import { Books } from './modules/Books_class.js';
import { updateDateTime } from './modules/display_time.js';
import './modules/add_book.js';
import './modules/remove_book.js';
import { controlNavBar } from './modules/nav_bar_events.js';

const books = new Books();
books.displayBooks();

updateDateTime();
setInterval(updateDateTime, 1000);

controlNavBar('#list', '#addBook', '#contact');
export default function controlNavBar(booklistSelector, addBookSelector, contactSelector) {
  const booklistBtn = document.querySelector(booklistSelector);
  const addBookBtn = document.querySelector(addBookSelector);
  const contactBtn = document.querySelector(contactSelector);

  booklistBtn.addEventListener('click', () => {
    document.querySelector('.list_container').classList.add('dBlock');
    document.querySelector('.list_container').classList.remove('dNone');
    document.querySelector('.contact_section').classList.add('dNone');
    document.querySelector('.contact_section').classList.remove('dBlock');
    document.querySelector('.form_section').classList.add('dNone');
    document.querySelector('.form_section').classList.remove('dBlock');
  });

  addBookBtn.addEventListener('click', () => {
    document.querySelector('.list_container').classList.add('dNone');
    document.querySelector('.list_container').classList.remove('dBlock');
    document.querySelector('.form_section').classList.add('dBlock');
    document.querySelector('.form_section').classList.remove('dNone');
    document.querySelector('.contact_section').classList.add('dNone');
    document.querySelector('.contact_section').classList.remove('dBlock');
  });

  contactBtn.addEventListener('click', () => {
    document.querySelector('.contact_section').classList.add('dBlock');
    document.querySelector('.contact_section').classList.remove('dNone');
    document.querySelector('.form_section').classList.add('dNone');
    document.querySelector('.form_section').classList.remove('dBlock');
    document.querySelector('.list_container').classList.add('dNone');
    document.querySelector('.list_container').classList.remove('Block');
  });
}

export { controlNavBar };
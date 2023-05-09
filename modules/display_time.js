export const updateDateTime = () => {
  const currentDateTime = new Date();
  const dateTimeOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
  };
  document.getElementById('currentDateTime').textContent = currentDateTime.toLocaleDateString('en-US', dateTimeOptions);
};

export default { updateDateTime };
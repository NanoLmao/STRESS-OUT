function loadLanguage(lang) {
  fetch(`${lang}.json`)
    .then(response => response.json())
    .then(translations => {
      document.getElementById('title').textContent = translations.title;
      document.getElementById('titleText').textContent = translations.title;
      document.getElementById('content').textContent = translations.content;
      // Actualiza más elementos según sea necesario
    })
    .catch(error => console.error('Error al cargar las traducciones:', error));
}
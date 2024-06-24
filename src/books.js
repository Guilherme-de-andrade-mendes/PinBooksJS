let books = JSON.parse(localStorage.getItem('Books')) || [];


// Função que salva a lista de livros no LocalStorage.
function saveData_books() {
    localStorage.setItem('Books', JSON.stringify(books));
}

// Função para limpar o conteúdo da área de visualização.
function cleaner() {
    const view = document.getElementsByClassName('view')[0];
    view.innerHTML = '';
}

// Função que verifica se um determinado ISBN já existe na lista de livros.
// Utiliza o método 'some' para iterar pelos elementos e verificar duplicidade.
function exist_ISBN(parameter) {
    return books.some(values => values.ISBN === parameter);
}



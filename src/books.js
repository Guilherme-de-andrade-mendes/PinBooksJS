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

// Função que busca um livro pelo ISBN e retorna o índice na lista de livros.
// Utiliza o método 'findIndex' para iterar pelos elementos. Retorna -1 se não encontrado.
function find_book(parameter) {
    return books.findIndex(values => values.ISBN === parameter);
}

// Função responsável por adicionar um novo livro à lista.
// Os atributos do livro são obtidos dos inputs do formulário.
function add_books() {
	let ISBN = document.getElementById('textISBN').value;
	let title = document.getElementById('textTitle').value;
	let author = document.getElementById('textAuthor').value;
	let year = document.getElementById('textYear').value;
	let genre = document.getElementById('textGenre').value;
	let quantity = document.getElementById('textQuantity').value;

	const b = {
    	ISBN,
    	title,
    	author,
    	year,
    	genre,
    	quantity
	};

	const view = document.getElementsByClassName('view')[0];

	try {
    	if (!exist_ISBN(ISBN)) {
        	books.push(b);
        	saveData_books();
        	view.innerHTML = "Livro inserido com sucesso!";
    	} else {
        	view.innerHTML = "Esse ISBN já está em uso. Tente novamente com um novo!";
    	}
	} catch (e) {
    	console.error("Não foi possível inserir ou verificar o ISBN do livro.", e);
	} finally {
    	setTimeout(cleaner, 5000);
	}
}


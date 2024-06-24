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

// Função que busca e exibe um livro pelo ISBN fornecido.
function findOne_book() {
	let ISBN = document.getElementById('textISBN').value;
	const view = document.getElementsByClassName('view')[0];

	try {
    	let match = find_book(ISBN);
    	if (match > -1) {
        	const book = books[match];
        	view.innerHTML = `
            	<p>ISBN: ${book.ISBN}</p>
            	<p>Título: ${book.title}</p>
            	<p>Autor: ${book.author}</p>
            	<p>Ano de Publicação: ${book.year}</p>
            	<p>Gênero: ${book.genre}</p>
            	<p>Quantidade: ${book.quantity}</p>
        	`;
    	} else {
        	view.innerHTML = 'O ISBN informado não consta na base de dados atual.';
    	}
	} catch (e) {
    	console.error("Ocorreu um erro ao tentar buscar o livro.", e);
	} finally {
    	setTimeout(cleaner, 45000);
	}
}

// Função que exibe todos os livros armazenados na lista.
function findAll_books() {
	const view = document.getElementsByClassName('view')[0];
	view.textContent = '';

	try {
    	if (books.length > 0) {
        	books.forEach(element => {
            	const attributsBook = document.createElement('p');
            	attributsBook.innerHTML = `
                	<p>ISBN: ${element.ISBN}</p>
                	<p>Título: ${element.title}</p>
                	<p>Autor: ${element.author}</p>
                	<p>Ano de Publicação: ${element.year}</p>
                	<p>Gênero: ${element.genre}</p>
                	<p>Quantidade: ${element.quantity}</p>
                	<br>
            	`;
            	view.appendChild(attributsBook);
        	});
    	} else {
        	view.innerHTML = 'Não existem dados para serem recuperados. Insira alguns e tente novamente.';
    	}
	} catch (e) {
    	console.error("Ocorreu um erro ao tentar buscar os dados dos livros.", e);
	} finally {
    	setTimeout(cleaner, 45000);
	}
}



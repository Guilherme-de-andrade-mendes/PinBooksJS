let books = JSON.parse(localStorage.getItem("Books")) || [];

// Função que salva a lista de livros no LocalStorage.
function saveData_books() {
  localStorage.setItem("Books", JSON.stringify(books));
}

// Função para limpar o conteúdo da área de visualização.
function cleaner() {
  const view = document.getElementsByClassName("view")[0];
  view.innerHTML = "";
}

// Função que verifica se um determinado ISBN já existe na lista de livros.
// Utiliza o método 'some' para iterar pelos elementos e verificar duplicidade.
function exist_ISBN(parameter) {
  return books.some((values) => values.ISBN === parameter);
}

// Função que busca um livro pelo ISBN e retorna o índice na lista de livros.
// Utiliza o método 'findIndex' para iterar pelos elementos. Retorna -1 se não encontrado.
function find_book(parameter) {
  return books.findIndex((values) => values.ISBN === parameter);
}

// Função responsável por adicionar um novo livro à lista.
// Os atributos do livro são obtidos dos inputs do formulário.
function add_books() {
  let ISBN = document.getElementById("textISBN").value;
  let title = document.getElementById("textTitle").value;
  let author = document.getElementById("textAuthor").value.split(",");
  let year = document.getElementById("textYear").value;
  let genre = document.getElementById("textGenre").value;
  let numberOfPages = document.getElementById("textnumberOfPages").value;
  if(ISBN === '' || ISBN === null)
      return;
  const b = {
    ISBN,
    title,
    author,
    year,
    genre,
    numberOfPages,
  };

  const view = document.getElementsByClassName("view")[0];

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
  let ISBN = document.getElementById("textISBN").value;
  const view = document.getElementsByClassName("view")[0];
  try {
    let match = find_book(ISBN);
    if (match > -1) {
      const book = books[match];
      view.innerHTML = `
        <div class="dataDivs">
          <p><strong>ISBN:</strong> ${book.ISBN}</p>
          <p><strong>Título:</strong> ${book.title}</p>
          <p><strong>Autor(es):</strong> ${book.author.join(", ")}</p>
          <p><strong>Ano de Publicação:</strong> ${book.year}</p>
          <p><strong>Gênero:</strong> ${book.genre}</p>
          <p><strong>Número de páginas:</strong> ${book.numberOfPages}</p>
        </div>
      `;
    } else {
      view.innerHTML = "<p class='error'>O ISBN informado não consta na base de dados atual.</p>";
    }
  } catch (e) {
    console.error("Ocorreu um erro ao tentar buscar o livro.", e);
  } finally {
    setTimeout(cleaner, 45000);
  }
}

// Função que exibe todos os livros armazenados na lista.
function findAll_books() {
  const view = document.getElementsByClassName("view")[0];
  view.textContent = "";
  try {
    if (books.length > 0) {
      books.forEach((element) => {
        let attributsBook = document.createElement("div");
        attributsBook.setAttribute('class', 'dataDivs');
        attributsBook.innerHTML = `
          <p><strong>ISBN:</strong> ${element.ISBN}</p>
          <p><strong>Título:</strong> ${element.title}</p>
          <p><strong>Autor(es):</strong> ${element.author.join(", ")}</p>
          <p><strong>Ano de Publicação:</strong> ${element.year}</p>
          <p><strong>Gênero:</strong> ${element.genre}</p>
          <p><strong>Número de páginas:</strong> ${element.numberOfPages}</p>
        `;
        view.appendChild(attributsBook);
      });
    } else {
      view.innerHTML = "<p class='error'>Não existem dados para serem recuperados. Insira alguns e tente novamente.</p>";
    }
  } catch (e) {
    console.error("Ocorreu um erro ao tentar buscar os dados dos livros.", e);
  } finally {
    setTimeout(cleaner, 45000);
  }
}

// Função que atualiza os dados de um livro existente na lista.
function update_book() {
  let ISBN = document.getElementById("textISBN").value;
  const view = document.getElementsByClassName("view")[0];

  try {
    let match = find_book(ISBN);
    if (match > -1) {
      const book = books[match];
      book.title = document.getElementById("textTitle").value;
      book.author = document.getElementById("textAuthor").value;
      book.year = document.getElementById("textYear").value;
      book.genre = document.getElementById("textGenre").value;
      book.numberOfPages = document.getElementById("textnumberOfPages").value;

      saveData_books();
      view.innerHTML = "Os dados do livro foram atualizados com sucesso!";
    } else {
      view.innerHTML = "O ISBN informado não consta na base de dados atual.";
    }
  } catch (e) {
    console.error(
      "Ocorreu um erro ao tentar atualizar os dados do livro especificado.",
      e
    );
  } finally {
    setTimeout(cleaner, 45000);
  }
}

// Função que exclui um livro da lista pelo ISBN.
function delete_book() {
  let ISBN = document.getElementById("textISBN").value;
  const view = document.getElementsByClassName("view")[0];

  try {
    let match = find_book(ISBN);
    if (match > -1) {
      books = books.filter((element) => element.ISBN !== ISBN);
      saveData_books();
      view.innerHTML = "O livro foi excluído com sucesso!";
    } else {
      view.innerHTML = "O ISBN informado não consta na base de dados atual.";
    }
  } catch (e) {
    console.error(
      "Ocorreu um erro ao tentar excluir os dados do livro especificado.",
      e
    );
  } finally {
    setTimeout(cleaner, 45000);
  }
}

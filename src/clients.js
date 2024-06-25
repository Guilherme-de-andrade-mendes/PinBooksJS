let peoples = JSON.parse(localStorage.getItem("Peoples")) || [];

// Função para limpar o conteúdo da área de visualização.
function cleaner() {
  const view = document.getElementsByClassName("view")[0];
  view.innerHTML = "";
}

// Função que verifica se um determinado CPF já existe na lista de pessoas.
// Utiliza o método 'some' para iterar pelos elementos e verificar duplicidade.
function exist_CPF(parameter) {
  let exist = peoples.some((values) => values.CPF === parameter);
  return exist;
}

// Função que busca uma pessoa pelo CPF e retorna o índice na lista de pessoas.
// Utiliza o método 'some' para iterar pelos elementos. Retorna -1 se não encontrado.
function find_people(parameter) {
  let index = -1;
  peoples.some((values, i) => {
    if (values.CPF === parameter) {
      index = i;
    }
  });
  return index;
}

// Função responsável por adicionar uma nova pessoa à lista.
// Os atributos da pessoa são obtidos dos inputs do formulário.
function add_peoples() {
  let CPF = document.getElementById("textCPF").value;
  let name = document.getElementById("textName").value;
  let street = document.getElementById("textStreet").value;
  let nro = document.getElementById("textNumber").value;
  let CEP = document.getElementById("textCEP").value;
  let emails = document.getElementById("textEmails").value.split(",");
  let telephones = document
    .getElementById("textTelephone_numbers")
    .value.split(",");
  let birthday = document.getElementById("textBirthday").value;
  let profession = document.getElementById("textProfession").value;

  const p = {
    CPF,
    name,
    street,
    nro,
    CEP,
    emails,
    telephones,
    birthday,
    profession,
  };
  const view = document.getElementsByClassName("view")[0];
  try {
    let match = exist_CPF(CPF);

    // Verifica se o CPF já existe. Se não, adiciona a nova pessoa à lista e salva os dados.
    if (!match) {
      peoples.push(p);
      saveData_peoples();
      view.innerHTML = "Pessoa inserida com sucesso!";
    } else {
      view.innerHTML = "Esse CPF já está em uso. Tente novamente com um novo!";
    }
  } catch (e) {
    console.log("Não foi possível inserir ou verificar o CPF do usuário.");
    console.log(e.name); // Imprime o nome do erro no console.
    console.log(e.message); // Imprime a mensagem do erro no console.
  } finally {
    // Limpa a área de visualização após 5000 milissegundos.
    setTimeout(cleaner, 5000);
  }
}

// Função que busca e exibe uma pessoa pelo CPF fornecido.
// Função que busca e exibe uma pessoa pelo CPF fornecido.
function findOne_people() {
  let CPF = document.getElementById("textCPF").value;
  try {
    let match = find_people(CPF);
    if (match > -1) {
      const view = document.getElementsByClassName("view")[0];
      view.textContent = "";
      const attributsPeople = document.createElement("div");
      const person = peoples[match];
      attributsPeople.innerHTML = `
        <p>CPF: ${person.CPF}</p>
        <p>Nome: ${person.name}</p>
        <p>Endereço: ${person.street}, Número: ${person.nro}</p>
        <p>CEP: ${person.CEP}</p>
        <p>Emails: [${person.emails.join(", ")}]</p>
        <p>Telefones: [${person.telephones.join(", ")}]</p>
        <p>Aniversário: ${person.birthday}</p>
        <p>Profissão: ${person.profession}</p>`;
      view.appendChild(attributsPeople);
    } else {
      view.innerHTML = "O CPF informado não consta na base de dados atual.";
    }
  } catch (e) {
    console.log("Ocorreu um erro ao tentar buscar o usuário.");
    console.log(e.name); // Imprime o nome do erro no console.
    console.log(e.message); // Imprime a mensagem do erro no console.
  } finally {
    // Limpa a área de visualização após 45000 milissegundos.
    setTimeout(cleaner, 45000);
  }
}

// Função que salva a lista de pessoas no LocalStorage.
function saveData_peoples() {
  localStorage.setItem("Peoples", JSON.stringify(peoples));
}

// Função que exibe todas as pessoas armazenadas na lista.
function findAll_peoples() {
  const view = document.getElementsByClassName("view")[0];
  view.textContent = "";
  try {
    if (peoples.length > 0) {
      peoples.forEach((element) => {
        let attributsPeople = document.createElement("div");
        attributsPeople.innerHTML = `
        <p>CPF: ${element.CPF}</p>
        <p>Nome: ${element.name}</p>
        <p>Endereço: ${element.street}</p>
        <p>Numero${element.nro}</p>
        <p>CEP: ${element.CEP}</p>
        <p>Emails: [ ${element.emails.join(", ")} ]</p>
        <p>Telefones: [ ${element.telephones.join(", ")} ]</p>
        <p>Aniversário: ${element.birthday}</p>
        <p>Profissão: ${element.profession}</p>`;
        view.appendChild(attributsPeople);
      });
    } else {
      view.innerHTML =
        "Não existem dados para serem recuperados. Insira alguns e tente novamente.";
    }
  } catch (e) {
    console.log("Ocorreu um erro ao tentar buscar os dados dos usuários.");
    console.log(e.name); // Imprime o nome do erro no console.
    console.log(e.message); // Imprime a mensagem do erro no console.
  } finally {
    // Limpa a área de visualização após 45000 milissegundos.
    setTimeout(cleaner, 45000);
  }
}

// Função que atualiza os dados de uma pessoa existente na lista.
function update_people() {
  let CPF = document.getElementById("textCPF").value;
  try {
    let match = find_people(CPF);

    if (match > -1) {
      const view = document.getElementsByClassName("view")[0];
      view.textContent = "";

      const person = peoples[match];
      person.name = document.getElementById("textName").value;
      person.street = document.getElementById("textStreet").value;
      person.nro = document.getElementById("textNumber").value;
      person.CEP = document.getElementById("textCEP").value;
      person.emails = document.getElementById("textEmails").value.split(",");
      person.telephones = document
        .getElementById("textTelephone_numbers")
        .value.split(",");
      person.birthday = document.getElementById("textBirthday").value;
      person.profession = document.getElementById("textProfession").value;
      view.textContent = "Os dados do usuário foram atualizados com sucesso!";
    } else {
      view.innerHTML = "O CPF informado não consta na base de dados atual.";
    }
  } catch (e) {
    console.log(
      "Ocorreu um erro ao tentar atualizar os dados do usuário especificado."
    );
    console.log(e.name); // Imprime o nome do erro no console.
    console.log(e.message); // Imprime a mensagem do erro no console.
  } finally {
    // Limpa a área de visualização após 45000 milissegundos.
    setTimeout(cleaner, 45000);
  }
}

// Função que exclui uma pessoa da lista pelo CPF.
function delete_people() {
  let CPF = document.getElementById("textCPF").value;
  try {
    let match = find_people(CPF);

    if (match > -1) {
      const view = document.getElementsByClassName("view")[0];
      view.textContent = "";

      // Remove a pessoa da lista filtrando pelo CPF.
      peoples = peoples.filter((element) => element.CPF !== CPF);
      saveData_peoples();
      view.textContent = "O usuário foi excluído com sucesso!";
    } else {
      view.innerHTML = "O CPF informado não consta na base de dados atual.";
    }
  } catch (e) {
    console.log(
      "Ocorreu um erro ao tentar excluir os dados do usuário especificado."
    );
    console.log(e.name); // Imprime o nome do erro no console.
    console.log(e.message); // Imprime a mensagem do erro no console.
  } finally {
    // Limpa a área de visualização após 45000 milissegundos.
    setTimeout(cleaner, 45000);
  }
}

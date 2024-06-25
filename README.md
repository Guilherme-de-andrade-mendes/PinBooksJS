# Lumière - Sistema de Gerenciamento de Livros e Pessoas

O Lumière é um sistema de gerenciamento de livros e pessoas desenvolvido utilizando JavaScript, HTML e LocalStorage. Ele permite adicionar, atualizar, buscar e excluir dados de pessoas e livros. Este README fornece uma visão geral das funcionalidades do sistema e instruções sobre como utilizá-lo.

## Página de Pessoas (`Peoples`)

### Funções Principais

1. **`cleaner()`**
    - Limpa o conteúdo da área de visualização (`view`).

2. **`exist_CPF(parameter)`**
    - Verifica se um determinado CPF já existe na lista de pessoas.
    - Parâmetro: `parameter` (string, CPF a ser verificado).
    - Retorna: `true` se o CPF existir, `false` caso contrário.

3. **`find_people(parameter)`**
    - Busca uma pessoa pelo CPF e retorna o índice na lista.
    - Parâmetro: `parameter` (string, CPF a ser buscado).
    - Retorna: Índice da pessoa na lista ou -1 se não encontrado.

4. **`add_peoples()`**
    - Adiciona uma nova pessoa à lista.
    - Obtém os dados dos inputs do formulário (`CPF`, `name`, `street`, `nro`, `CEP`, `emails`, `telephones`, `birthday`, `profession`).

5. **`findOne_people()`**
    - Busca e exibe uma pessoa pelo CPF fornecido.
    - Obtém o CPF do input do formulário.

6. **`saveData_peoples()`**
    - Salva a lista de pessoas no `localStorage`.

7. **`findAll_peoples()`**
    - Exibe todas as pessoas armazenadas na lista.

8. **`update_people()`**
    - Atualiza os dados de uma pessoa existente na lista.
    - Obtém o CPF e os novos dados dos inputs do formulário.

9. **`delete_people()`**
    - Exclui uma pessoa da lista pelo CPF.
    - Obtém o CPF do input do formulário.

## Página de Livros (`Books`)

### Funções Principais

1. **`cleaner()`**
    - Limpa o conteúdo da área de visualização (`view`).

2. **`saveData_books()`**
    - Salva a lista de livros no `localStorage`.

3. **`exist_ISBN(parameter)`**
    - Verifica se um determinado ISBN já existe na lista de livros.
    - Parâmetro: `parameter` (string, ISBN a ser verificado).
    - Retorna: `true` se o ISBN existir, `false` caso contrário.

4. **`find_book(parameter)`**
    - Busca um livro pelo ISBN e retorna o índice na lista.
    - Parâmetro: `parameter` (string, ISBN a ser buscado).
    - Retorna: Índice do livro na lista ou -1 se não encontrado.

5. **`add_books()`**
    - Adiciona um novo livro à lista.
    - Obtém os dados dos inputs do formulário (`ISBN`, `title`, `author`, `year`, `genre`, `numberOfPages`).

6. **`findOne_book()`**
    - Busca e exibe um livro pelo ISBN fornecido.
    - Obtém o ISBN do input do formulário.

7. **`findAll_books()`**
    - Exibe todos os livros armazenados na lista.

8. **`update_book()`**
    - Atualiza os dados de um livro existente na lista.
    - Obtém o ISBN e os novos dados dos inputs do formulário.

9. **`delete_book()`**
    - Exclui um livro da lista pelo ISBN.
    - Obtém o ISBN do input do formulário.

## Uso Geral

1. **Adicionar Dados**
    - Preencha os campos de entrada (formulários) com os dados necessários.
    - Chame a função `add_peoples()` para adicionar uma pessoa ou `add_books()` para adicionar um livro.

2. **Buscar Dados**
    - Preencha o campo de entrada com o CPF (para pessoas) ou ISBN (para livros).
    - Chame `findOne_people()` para buscar uma pessoa ou `findOne_book()` para buscar um livro.

3. **Exibir Todos os Dados**
    - Chame `findAll_peoples()` para exibir todas as pessoas ou `findAll_books()` para exibir todos os livros.

4. **Atualizar Dados**
    - Preencha os campos de entrada com o CPF (para pessoas) ou ISBN (para livros).
    - Chame `update_people()` para atualizar uma pessoa ou `update_book()` para atualizar um livro.
    
5. **Excluir Dados**
    - Preencha o campo de entrada com o CPF (para pessoas) ou ISBN (para livros).
    - Chame `delete_people()` para excluir uma pessoa ou `delete_book()` para excluir um livro.
    
6. **Limpar Área de Visualização**
    - A função `cleaner()` é chamada automaticamente após um tempo definido em cada operação (adicionar, buscar, atualizar, excluir) para limpar a área de visualização. Se necessário, pode ser chamada manualmente para limpar a área imediatamente.

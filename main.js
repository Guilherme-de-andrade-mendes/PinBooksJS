const peoples =  JSON.parse(localStorage.getItem('Peoples')) || [];

 //Função para limpar o terminal de visualizações;
 function cleaner(){
    const view = document.getElementsByClassName('view')[0];
    view.innerHTML = '';
};

/*A função itera por meio de 'some' para analisar se pelo menos um dos elementos passa na condição da função, tendo em vista que o CPF que é um chave-primária, logo, não pode haver duplicidade de valores;*/
function exist_CPF(parameter){
    let exist = peoples.some(values => values.CPF === parameter);
    return exist
}

/*A função itera por meio de 'some' para analisar se pelo menos um dos elementos passa na condição da função, tendo em vista que o CPF que é um chave-primária, logo, não pode haver duplicidade de valores.
Caso encontre o CPf retorna o valor de sua posição no array 'peoples', do contrário, devolve um valor negativo;*/
function find_people(parameter){
    let index = -1;
    peoples.some((values, i) => {
        if(values.CPF === parameter){
            index = i;
        }
    });
    return (index === -1? -1 : index);
}

//Função responsavel por alimentar o array de pessoas, contendo os atributos de cada usuário no sistema;
function add_peoples(){
    //Declaração das variaveis que recebem os parâmetros de entrada dos inputs;
    let CPF = document.getElementById('textCPF').value;
    let name = document.getElementById('textName').value;
    let street = document.getElementById('textStreet').value;
    let nro = document.getElementById('textNumber').value;
    let CEP = document.getElementById('textCEP').value;
    let emails = document.getElementById('textEmails').value.split(",");
    let telephones = document.getElementById('textTelephone_numbers').value.split(",");
    let birthday = document.getElementById('textBirthday').value;
    let profession = document.getElementById('textProfession').value;

    //Construção do Object que receberá os valores de entrada contidos anteriormente;
    const p = {
        CPF,
        name,
        street,
        nro,
        CEP,
        emails,
        telephones,
        birthday,
        profession
    };
    const view = document.getElementsByClassName('view')[0];
    try{
        let match = exist_CPF(CPF);
    
        /*Bloco de verificação do elemento, onde , utiliza do retorno da iteração anterior para fazer inclusão ou emitir uma mensagem ao usuário que o CPF passado já existe na base de dados; */
        if(!match){
            peoples.push(p);
            saveData();// Grava os dados no LocalStorage do navegador, permitindo assim a permanência das informações;
            view.innerHTML =  "Pessoa inserida com sucesso!";
        }else
            view.innerHTML = "Esse CPF já está em uso. Tente novamente com um novo!";
    }catch(e){
        console.log("Não foi possível inserir ou verificar o CPF do usuário.");
        console.log(e.name); // Imprimi o nome do erro no console;
        console.log(e.message); //Imprimi a mensagem do erro no console;
    }finally{
        //A função setTimeout faz com que a função de limpeza do terminal ative apenas uma vez depois 5000 milísegundos;
        setTimeout(cleaner, 5000);
    }
}

function findOne(){
    let CPF = document.getElementById('textCPF').value;
    try{
        /*Faz a primeira busca para ver se consegue encontrar a pessoa com o CPF informado pelo valor de entrada que será utilizado como parâmetro da função 'find_people';*/
        let match = find_people(CPF);

        /*Se o retorno da função for um valor for maior que -1 a função continua, do contrário, ele emite uma mensagem para o usuário informando que não foi possivel encontrar
        o usuário do CPF informado;*/
        if(match > -1){
            //Cria dinâmicamento elementos para armazenar os dados que serão recuperados do array;
            const view = document.getElementsByClassName('view')[0];
            const attributsPeople = document.createElement('p');
            
            //Declara uma variavel com o índice do CPF informado, permitindo assim a recuperação dos dados;
            const person = peoples[match];
            attributsPeople.textContent = `CPF: ${person.CPF}\nNome: ${person.name}\nEndereço: ${person.street}, ${person.nro}\nCEP: ${person.CEP}\nEmails: ${'[' + person.emails.join(', ') + ' ]'}\nTelefones: ${'[' + person.telephones.join(', ') + ' ]'}\nAniversário: ${person.birthday}\nProfissão: ${person.profession}`;
            view.appendChild(attributsPeople);
        }else
            view.innerHTML = 'O CPF informado não consta na base de dados atual.';
    }catch(e){
        console.log("Ocorreu um erro ao tentar buscar o usuário.");
        console.log(e.name); // Imprimi o nome do erro no console;
        console.log(e.message); //Imprimi a mensagem do erro no console;
    }finally{
        //A função setTimeout faz com que a função de limpeza do terminal ative apenas uma vez depois 5000 milísegundos;
        setTimeout(cleaner, 15000);
    }
}

function saveData(){
    localStorage.setItem('Peoples', JSON.stringify(peoples));
}



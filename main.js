const peoples = [];



/*A função itera por meio de 'some' para analisar se pelo menos um dos elementos passa na condição da função, tendo em vista que o CPF que é um chave-primária, logo, não podo haver duplicidade de valores;*/
function exist_CPF(parameter){
    let exist = peoples.some(values => values.CPF === parameter);
    return exist
}

//Função responsavel por alimentar o array de pessoas, contendo os atributos de cada usuário no sistema;
function add_peoples(){
    //Declaração das variaveis que recebem os parâmetros de entrada dos inputs;
    let inputCPF = document.getElementById('textCPF').value;
    let inputName = document.getElementById('textName').value;
    let inputStreet = document.getElementById('textStreet').value;
    let inputNro = document.getElementById('textNumber').value;
    let inputCEP = document.getElementById('textCEP').value;
    let inputEmails = document.getElementById('textEmails').value.split(",");
    let inputTelephones = document.getElementById('textTelephone_numbers').value.split(",");
    let inputBirthday = document.getElementById('textBirthday').value;

    //Construção do Object que receberá os valores de entrada contidos anteriormente;
    const p = {
        CPF: inputCPF,
        name: inputName,
        street: inputStreet,
        nro: inputNro,
        CEP: inputCEP,
        emails: inputEmails,
        telephones: inputTelephones,
        birthday: inputBirthday
    };

    let match = exist_CPF(inputCPF);
    
    /*Bloco de verificação do elemento, onde , utiliza do retorno da iteração anterior para fazer inclusão
    ou emitir uma mensagem ao usuário que o CPF passado já existe na base de dados;
    */
    const view = document.getElementsByClassName('view')[0];
    if(!match){
        peoples.push(p);
        view.innerHTML =  "Pessoa inserida com sucesso!";
        
    } else{
        view.innerHTML = "Esse CPF já está em uso. Tente novamente com um novo!";
    }

    //Função anônima para limpar o terminal de visualizações;
    const cleaner = () => 
        view.innerHTML = '';

    //A função setTimeout faz com que a função de limpeza do terminal ative apenas uma vez depois 5000 milísegundos;
    setTimeout(cleaner, 5000);
}

function findOne_people(){
    let inputCPF = document.getElementById('textCPF').value;
    let match = exist_CPF(inputCPF);


    const view = document.getElementsByClassName('view')[0];

    const attributsPeople = document.createElement('p');
    // attributsPeople.setAttribute('');


    // const textAttributs = document.createTextNode();


}


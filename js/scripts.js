// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTitle  =document.querySelector("#multiplication-title span");

const multiplicationTable = document.querySelector("#multiplication-operations");


// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    // loop para exibir tabuada
    for(i = 1; i <= multiplicatorNumber; i++) {
        // resultado
        const result = number * i;

        // template
        const template = `<div class="row">
                <div class="operation">${number} x ${i} =</div>
                <div class="result">${result}</div>
            </div>`;

        // inserindo no html
        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");

        // inserindo o row no template
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);

        // exibindo multiplicador no título
        multiplicationTitle.innerText = number;
    };
};


// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // transformando em números inteiros
    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    // validação de preenchimento
    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);

});
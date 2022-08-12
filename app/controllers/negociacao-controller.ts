export class NegociacaoController {
    private inputData;
    private inputQuatidade;
    private inputValor;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuatidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(){
        console.log(this.inputData);
        console.log(this.inputQuatidade);
        console.log(this.inputValor);
    }
}
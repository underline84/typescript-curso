import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuatidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuatidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void{
       const negociacao = this.criaNegociacao(); 
       this.negociacoes.adiciona(negociacao);
       console.log(this.negociacoes.lista());
       this.limpaFormulario();
    }

    criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuatidade.value);
        const valor = parseFloat(this.inputValor.value);

       return new Negociacao(date, quantidade, valor);

    }

    limpaFormulario(): void{
        this.inputData.value = '';
        this.inputQuatidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();

    }
}
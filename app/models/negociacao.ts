export class Negociacao{
    

    constructor(
        private _data: Date, 
        private _quatidade: number, 
        private _valor: number
        ){}

    get data(): Date{
        return this._data;
    }
    
    get quatidade(): number{
        return this._quatidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this._quatidade * this._valor;
    }
}
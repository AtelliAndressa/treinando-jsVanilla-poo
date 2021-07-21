class Veiculo{
    #nome;
    #velocidadeMaxima;
    #condicaoNovoUsado;
    #preco;
    constructor(nome, velocidadeMaxima, condicaoNovoUsado, preco){
        this.#nome = nome;
        this.#velocidadeMaxima = velocidadeMaxima;
        this.#condicaoNovoUsado = condicaoNovoUsado;
        this.#preco = preco;
    }

    set nome(_nome){
        this.#nome = _nome;
    }

    get nome(){
        return this.#nome;
    }

    set velocidadeMaxima(_velocidadeMaxima){
        this.#velocidadeMaxima = _velocidadeMaxima;
    }

    get velocidadeMaxima(){
        return this.#velocidadeMaxima;
    }

    set condicaoNovoUsado(_condicaoNovoUsado){
        if(_condicaoNovoUsado == "Novo" || _condicaoNovoUsado == "Usado"){
            this.#condicaoNovoUsado = _condicaoNovoUsado;
        } else {
            return `Escolha a condição Novo ou Usado`;
        }
    }

    get condicaoNovoUsado(){
        return this.#condicaoNovoUsado;
    }

    set preco(_preco){
        this.#preco = _preco;
    }

    get preco(){
        return this.#preco;
    }

    show(){
        return `O veículo de nome ${this.#nome},\n com velocidade máxima de ${this.#velocidadeMaxima},\n na condição de veículo ${this.#condicaoNovoUsado},\n tem por preço o valor ${this.#preco.toFixed(2)}`;
    }    

    dadosCompletos(){

    }
}

class Carro extends Veiculo {
    #tipoVeiculo;
    #numPassageiros; 
    constructor(nome, velocidadeMaxima, condicaoNovoUsado, preco, _tipoVeiculo, _numPassageiros){
        super(nome, velocidadeMaxima, condicaoNovoUsado, preco)
        this.#tipoVeiculo = _tipoVeiculo;
        this.#numPassageiros = _numPassageiros;
    }

    set tipoVeiculo(_tipoVeiculo){
        this.#tipoVeiculo = _tipoVeiculo;
    }

    get tipoVeiculo(){
        return this.#tipoVeiculo;
    }

    set numPassageiros(_numPassageiros){
        this.#numPassageiros = _numPassageiros;
    }

    get numPassageiros(){
        return this.#numPassageiros;
    }

    show(){
        return `Carro - ${super.show()},\n sendo o tipo de veículo ${this.#tipoVeiculo},\n com ocupação máxima de ${this.#numPassageiros} passageiros.`;
    }

    dadosCompletos(){
        return "Temos uma variedade de veículos";
    }
}

///////////////////////////////////////////// Instâncias ////////////////////////////////////////////////////////////
/*
    exercicio 03
*/

try{
const Veiculo = new Carro('Uno', 170, 'Novo', 40000.00, 'terrestre', 4);
console.log(Veiculo.show());
console.log(Veiculo.dadosCompletos());
} catch(_erro){
    console.log(_erro);
}


/* 
    exercicio 02         

const Carro = new Carro("Corsa", 180, "Usado", 8000.00, "terrestre", 4);
console.log(Carro);
Carro.dadosCompletos();


         
    exercício 01            

const Monza = new Veiculo("Monza", 180, "Usado", 5000.00);
Monza.show();
console.log(Monza);

//module.exports = Veiculo;*/
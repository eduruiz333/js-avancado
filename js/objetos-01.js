// SINTAXE ANTIGA //
/* var Cliente = function () {
    this.nome = '';
    this.telefone = '';
    this.cpf = '';
    this.mostrar = function () {
        console.log('Nome: ' + this.nome);
        console.log('Telefone: ' + this.telefone);
        console.log('CPF: ' + this.cpf);
    }
}

var jose = new Cliente ();
jose.nome = 'José'
jose.telefone = 11958849392
jose.cpf = 11829182891
jose.mostrar() */


// SINTAXE NOVA //
class Pessoa {
    constructor() {
        this.nome = ''
        this.telefone = ''
        this.cpf = ''
        this.mostrar = function () {
            console.log('Nome: ' + this.nome)
            console.log('Telefone: ' + this.telefone)
            console.log('CPF: ' + this.cpf)
        };
    }
}

let igor = new Pessoa ()
igor.nome = 'Igor Frota Ruiz'
igor.telefone = '(11) 9 4875-8574'
igor.cpf = '112-484-404-12'
igor.mostrar ()
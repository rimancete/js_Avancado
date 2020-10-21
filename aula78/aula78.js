//polimorfismo => alterar comportamento de um mesmo método para classes filhas diferentes
//Superclass
function Conta (ag, conta, saldo){
    this.agencia = ag;
    this.conta = conta;
    this.saldo = saldo
};

Conta.prototype.sacar = function (valor){
    if (this.saldo < valor) { 
        console.log(`Saldo insuficente para esse saque` +
        ` Saldo: R$${this.saldo}`
        );
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor){
    this.saldo += valor;
    this.verSaldo();

};
Conta.prototype.verSaldo = function (){
    console.log(
        `Ag/c: ${this.agencia} / ${this.conta} | ` +
        ` Saldo: R$${this.saldo.toFixed(2)}`
    );
};

function ContaCorrente(ag, conta, saldo, limite){
Conta.call(this, ag, conta, saldo);
this. limite = limite;
};
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor){
    if (valor > (this.saldo + this.limite)) { 
        console.log(`Saldo insuficente para esse saque` +
        ` Saldo: R$${this.saldo}`
        );
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
};


function ContaPoupanca(ag, conta, saldo){
    Conta.call(this, ag, conta, saldo);
    };

    ContaPoupanca.prototype = Object.create(Conta.prototype);
    ContaPoupanca.constructor = ContaPoupanca;

const conta1 = new Conta(11, 22, 10);
// conta1.depositar(20);
// conta1.sacar(45);

const conta2 = new ContaCorrente(11, 33, 100, 50)
conta2.sacar(50);
conta2.sacar(100);
conta2.sacar(1);
console.log();

const conta3 = new ContaPoupanca(11, 44, 100);
conta3.sacar(50);
conta3.sacar(100);
conta3.sacar(1);

class Cuenta
{
    #retiro;
    #saldo = 0;
    #deposito;

    constructor(saldoActual, retirar, depositar){
        this.#saldo = saldoActual;
        this.#retiro = retirar;
        this.#deposito = depositar;
    }
    calcularSaldo(){
        return this.saldo;
    }
    CalcularDeposito(){
        this.saldo = this.saldo + this.deposito;
        alert('Deposito Exitoso')
        return;
    }
    calcularRetiro(){
        
        if (this.saldo >= this.retiro){
            this.#saldo = this.saldo - this.retiro;
            alert('retiro Exitoso');
        }
        if (this.saldo < this.retiro){
            alert('Dinero Insuficiente');
        }
        return;  
    }
    get retiro(){
        this.retiro();
        return this.#retiro;
    }
    get deposito(){
        this.deposito();
        return this.#deposito;
    }
    get saldo(){
        this.saldo();
		return this.#saldo;
	}
}
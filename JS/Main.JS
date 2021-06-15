let cuenta = new Cuenta();

let Button_deposito;
Button_deposito = document.getElementById('depositar_boton');
Button_deposito.addEventListener('click', depositar);

let Button_retiro;
Button_retiro = document.getElementById('retirar_boton');
Button_retiro.addEventListener('click', retirar);

let Button_saldo;
Button_saldo = document.getElementById('consultar_boton');
Button_saldo.addEventListener('click', consultarSaldo);

function depositar(){
    saldoDeposito = parseFloat (document.getElementById("depositar_boton").value);

    cuenta.deposito = saldoDeposito;

}
function consultarSaldo(){
    dineroActual;
    valorSaldo = parseFloat (document.getElementById("consultar_boton").value);

    cuenta.saldo = valorSaldo;
    dineroActual = cuenta.saldo;

    document.getElementById('consultar_boton')[0].value = dineroActual;
}
function retirar(){
    valorRetiro = parseFloat (document.getElementById("retirar_boton").value);

    cuenta.retiro = valorRetiro;
}
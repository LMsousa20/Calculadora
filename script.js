let dispay = document.getElementById('result').value;

function setando(oq) {

    dispay += oq;
    console.log(dispay);
    console.log(typeof dispay);
    document.getElementById('result').value = dispay;
}
function back() {
    dispay = String((dispay - (dispay % 10)) / 10);
    document.getElementById('result').value = dispay;
    console.log(dispay)
    if (dispay == 0) {
        dispay = '';
        document.getElementById('result').value = dispay;
    }
}
function clean() {
    dispay = '';
    document.getElementById('result').value = dispay;
}

function exec(operacao) {
    armazenamento();
    dispay = '';
    calc = operacao;
}

function armazenamento() {
    n1 = dispay;
    dispay = '';
    document.getElementById('result').value = dispay;
}

function inverter() {
    dispay = '-' + dispay;
    document.getElementById('result').value = dispay;
}

function resultando() {
    final = n1 + calc + dispay;
    console.log(final)
    dispay = eval(final)
    document.getElementById('result').value = dispay;
    document.getElementById('extra').style.bottom = '0px';
    }


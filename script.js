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
    dispay = ( Number(dispay)*-1);
    document.getElementById('result').value = dispay;
}

function resultando() {
    if(calc === '+'){
        final = parseFloat(n1) + parseFloat(dispay);
    }

    if(calc === '-'){
        final = parseFloat(n1) - parseFloat(dispay);
    }

    if(calc === '*'){
        final = parseFloat(n1) * parseFloat(dispay);
    }

    if(calc === '/'){
        final = parseFloat(n1) / parseFloat(dispay);
    }
    
    console.log(final)
    dispay = final;
    document.getElementById('result').value = dispay;
    document.getElementById('extra').style.bottom = '0px';
    }


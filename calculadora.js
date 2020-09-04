function somar(){
    var a = Number(document.getElementById("txtn1").value);
    var b = Number(document.getElementById("txtn2").value);

    var resultado = a+b;
    document.getElementById("res1").innerHTML = 'resultado: ' + resultado;
}

function subtrair(){
    var a = Number(document.getElementById("num1s").value);
    var b = Number(document.getElementById("num2s").value);

    var resultado = a-b;
    document.getElementById("res2").innerHTML = 'resultado: ' + resultado;
}

function multiplicar(){
    var a = Number(document.getElementById("num1m").value);
    var b = Number(document.getElementById("num2m").value);

    var resultado = a*b;
    document.getElementById("res3").innerHTML = 'resultado: ' + resultado;
}

function dividir(){
    var a = Number(document.getElementById("num1d").value);
    var b = Number(document.getElementById("num2d").value);

    var resultado = a/b;
    document.getElementById("res4").innerHTML = 'resultado: ' + resultado;
}
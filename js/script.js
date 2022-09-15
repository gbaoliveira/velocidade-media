document.getElementById('convert').onclick = velocidade;
document.getElementById('limpar').onclick = limpar;

function velocidade(){
    var d = document.getElementById("d").value;
    var t = document.getElementById("t").value;
    var result = result;

    if(isNaN(d) || isNaN(t)){
        alert("Digite um valor válido!");
        return
    }else{
        result = d / t;
    }

    document.getElementById("d").value = parseFloat(d).toFixed();
    document.getElementById("t").value = parseFloat(t).toFixed();
    document.getElementById("result").value = parseFloat(result).toFixed(1);
    document.getElementById("calculos").value = result

}

function limpar(){
    document.getElementById("d").value = "";
    document.getElementById("t").value = "";
    document.getElementById("result").value = "";
}
function limpa(){
document.getElementById('resultado').innerHTML="";
document.getElementById('novohistórico').innerHTML="";
}

function apaga(){
let result=document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML=result.substring(0,result.length-1);

}

function inseri(n){
let num=document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML=num+n;
limitar(13);
}

function calcula(){
let result=document.getElementById('resultado').innerHTML;
if(result){
    let resultado=eval(result);
    document.getElementById('resultado').innerHTML=resultado;
    let operacao=result;
    historico(operacao,resultado);
}

}

function historico(operacao,resultado){
let a=new Date().toLocaleString();
let hist=a+" "+operacao.toString()+"="+resultado.toString();
document.getElementById('tabelaHistórico').innerHTML=hist+"<br>"+document.getElementById('tabelaHistórico').innerHTML;
let tabela=document.getElementById('novohistórico');
let linha=tabela.insertRow(-1);
let celulaoperacao=linha.insertCell(0);
let celularesult=linha.insertCell(1);

celulaoperacao.innerHTML=operacao;
celularesult.innerHTML=resultado;
}

function limitar(max){
    let resultado=document.getElementById('resultado').innerHTML;
    if(resultado.length>max){
        resultado=resultado.substring(0,max);
        document.getElementById('resultado').innerHTML=resultado;
    }
}
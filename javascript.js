function q(a){
    document.getElementById(a).value="";
}
function jia(){
    var a,b;
    a=parseFloat(document.getElementById("n1").value);
    b=parseFloat(document.getElementById("n2").value);
    document.getElementById("n3").value=a+b;
}
function jian(){
    var a,b;
    a=parseFloat(document.getElementById("n1").value);
    b=parseFloat(document.getElementById("n2").value);
    document.getElementById("n3").value=a-b;
}
function cheng(){
    var a,b;
    a=parseFloat(document.getElementById("n1").value);
    b=parseFloat(document.getElementById("n2").value);
    document.getElementById("n3").value=a*b;
}
function chu(){
    var a,b;
    a=parseFloat(document.getElementById("n1").value);
    b=parseFloat(document.getElementById("n2").value);
    document.getElementById("n3").value=a/b;
}
function no(){
    alert("那咋不对呢,就对!!");
}
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
    alert("那咋不对呢,就对!!!");
    window.location.href = "https://github.com/jreeys-man";
    window.location.href = "https://www.douyin.com/user/MS4wLjABAAAABWpMRo-ntWw5aHs6gAYfFhW-RSvMkVU0uGbVgsU70KsxG7cjymxZutgSIqdgJf430"
}
function call() {
    var basic = document.getElementById('input').value;
    var year = document.getElementById('input2').value;
if(basic > 0){
   cvar  = +basic*year;
   dvar = +year*10;
   provident = +cvar*dvar/100;
   
    

document.getElementById("basic").innerHTML = basic;
document.getElementById("allowance").innerHTML = provident;


}
else{
    alert("khali nhy chalega");
}
}

function call() {
    var basic = document.getElementById('input').value;

if(basic > 0){
    dearness = +basic*40/100;
    rent = +basic*20/100;
    gross = +basic+dearness+rent;

document.getElementById("basic").innerHTML = basic;
document.getElementById("allowance").innerHTML = dearness;
document.getElementById("rent").innerHTML = rent;
document.getElementById("gross").innerHTML = gross;

}
else{
    alert("khali nhy chalega");
}
}

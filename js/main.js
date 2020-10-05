var money = 0;

function moneyGenerator() {
    var txtMoney = document.getElementById("txtMoney");

    money++;
    txtMoney.innerHTML = money;

    if (money == 50)
        document.getElementById("x2").style.visibility = "visible";
}

function moneyGeneratorx2(){
    var txtMoney = document.getElementById("txtMoney");
    money+=2;
    txtMoney.innerHTML = money;

    if (money > 250)
        document.getElementById("x3").style.visibility = "visible";
}

function moneyGeneratorx3(){
    var txtMoney = document.getElementById("txtMoney");
    money+=3;
    txtMoney.innerHTML = money;
}

function mg() {
 
    intervalo=setInterval(moneyGenerator,1000);    
}
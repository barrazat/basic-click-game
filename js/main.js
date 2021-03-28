var money = 0;

function clickEffect(e){
	var d=document.createElement("div");
	d.className="clickEffect";
	d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
	document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}



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

document.getElementById('button').onclick = function() {
    moneyGenerator();
    
    document.addEventListener('click',clickEffect); 
};

document.getElementById('no-money').onclick = function(){
    document.removeEventListener('click',clickEffect);
};

document.getElementById('no-money2').onclick = function(){
    document.removeEventListener('click',clickEffect);
};

document.getElementById('no-money3').onclick = function(){
    document.removeEventListener('click',clickEffect);
};
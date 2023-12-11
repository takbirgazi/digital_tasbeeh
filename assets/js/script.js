let count = document.getElementById("count");
let countcnt = document.getElementById("count").textContent;
let total = document.getElementById("total");
let totalcnt = document.getElementById("total").textContent;
let plus = document.getElementById("plus");
let auto = document.getElementById("auto");
let reset = document.getElementById("reset");
let select_card = document.querySelector(".selected");
let card_1 = document.querySelector(".card_1");
let card_2 = document.querySelector(".card_2");
let card_3 = document.querySelector(".card_3");
let card_4 = document.querySelector(".card_4");
let card_5 = document.querySelector(".card_5");
let card_6 = document.querySelector(".card_6");
let card_7 = document.querySelector(".card_7");
let card_8 = document.querySelector(".card_8");

countcnt = parseInt(countcnt,10);
totalcnt = parseInt(totalcnt,10);

plus.addEventListener("click", ()=>{
    count.innerHTML = ++countcnt;
    total.innerHTML = ++totalcnt;
});

reset.addEventListener("click", ()=>{
    count.innerHTML = 0;
    total.innerHTML = 0;
    countcnt = 0;
    totalcnt = 0;
});

card_1.addEventListener("click",(e)=>{
    card_1.classList.toggle("selected");
    card_2.classList.remove("selected");
    card_3.classList.remove("selected");
    card_4.classList.remove("selected");
    card_5.classList.remove("selected");
    card_6.classList.remove("selected");
    card_7.classList.remove("selected");
    card_8.classList.remove("selected");
});
card_2.addEventListener("click",(e)=>{
    card_2.classList.toggle("selected");
    card_1.classList.remove("selected");
    card_3.classList.remove("selected");
    card_4.classList.remove("selected");
    card_5.classList.remove("selected");
    card_6.classList.remove("selected");
    card_7.classList.remove("selected");
    card_8.classList.remove("selected");
});
card_3.addEventListener("click",(e)=>{
    card_3.classList.toggle("selected");
    card_1.classList.remove("selected");
    card_2.classList.remove("selected");
    card_4.classList.remove("selected");
    card_5.classList.remove("selected");
    card_6.classList.remove("selected");
    card_7.classList.remove("selected");
    card_8.classList.remove("selected");
});
card_4.addEventListener("click",(e)=>{
    card_4.classList.toggle("selected");
    card_1.classList.remove("selected");
    card_2.classList.remove("selected");
    card_3.classList.remove("selected");
    card_5.classList.remove("selected");
    card_6.classList.remove("selected");
    card_7.classList.remove("selected");
    card_8.classList.remove("selected");
});
card_5.addEventListener("click",(e)=>{
    card_5.classList.toggle("selected");
    card_1.classList.remove("selected");
    card_2.classList.remove("selected");
    card_3.classList.remove("selected");
    card_4.classList.remove("selected");
    card_6.classList.remove("selected");
    card_7.classList.remove("selected");
    card_8.classList.remove("selected");
});
card_6.addEventListener("click",(e)=>{
    card_6.classList.toggle("selected");
    card_1.classList.remove("selected");
    card_2.classList.remove("selected");
    card_3.classList.remove("selected");
    card_4.classList.remove("selected");
    card_5.classList.remove("selected");
    card_7.classList.remove("selected");
    card_8.classList.remove("selected");
});
card_7.addEventListener("click",(e)=>{
    card_7.classList.toggle("selected");
    card_1.classList.remove("selected");
    card_2.classList.remove("selected");
    card_3.classList.remove("selected");
    card_4.classList.remove("selected");
    card_5.classList.remove("selected");
    card_6.classList.remove("selected");
    card_8.classList.remove("selected");
});
card_8.addEventListener("click",(e)=>{
    card_8.classList.toggle("selected");
    card_1.classList.remove("selected");
    card_2.classList.remove("selected");
    card_3.classList.remove("selected");
    card_4.classList.remove("selected");
    card_5.classList.remove("selected");
    card_6.classList.remove("selected");
    card_7.classList.remove("selected");
});





const img_1 = document.getElementById("img_1");
const img_2 = document.getElementById("img_2");
const img_3 = document.getElementById("img_3");
img_1.addEventListener("click",function(){
    document.body.style.backgroundColor="rgb(1, 98, 189)";
    let k= document.getElementById('moving-img');
    k.src='images/pepsi_1.png';
    document.querySelector(".li_1").style.color="#fff";
    document.querySelector(".li_2").style.color="#fff";
    document.querySelector(".li_3").style.color="#fff";
    document.querySelector(".li_4").style.color="#fff";
    document.querySelector(".li_5").style.color="#fff";
    document.querySelector(".right").style.color="#fff";
    document.body.style.transition="0.8s";
})
img_2.addEventListener("click",function(){
    document.body.style.backgroundColor="rgb(3, 2, 2)";
    let k= document.getElementById('moving-img');
    k.src='images/pepsi_2.png';
    document.querySelector(".li_1").style.color="#fff";
    document.querySelector(".li_2").style.color="#fff";
    document.querySelector(".li_3").style.color="#fff";
    document.querySelector(".li_4").style.color="#fff";
    document.querySelector(".li_5").style.color="#fff";
    document.querySelector(".right").style.color="#fff";
    document.body.style.transition="0.8s";
})
img_3.addEventListener("click",function(){
    document.body.style.backgroundColor="rgb(225, 227, 231)";
    let k= document.getElementById('moving-img');
    k.src='images/pepsi_3.png';
    document.querySelector(".li_1").style.color="#000";
    document.querySelector(".li_2").style.color="#000";
    document.querySelector(".li_3").style.color="#000";
    document.querySelector(".li_4").style.color="#000";
    document.querySelector(".li_5").style.color="#000";
    document.querySelector(".right").style.color="#000";
    document.body.style.transition="0.8s";
})
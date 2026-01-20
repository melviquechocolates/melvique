const phone = "9999829152";

function openModal(id){ document.getElementById(id).style.display="block"; }
function closeModal(id){ document.getElementById(id).style.display="none"; }

function addons(n){
  let a=0;
  if(document.getElementById("cashews"+n)?.checked) a+=7;
  if(document.getElementById("almonds"+n)?.checked) a+=5;
  if(document.getElementById("chips"+n)?.checked) a+=10;
  if(document.getElementById("sprinkles"+n)?.checked) a+=8;
  return a;
}

function calc1(){ total(1,10); }
function calc2(){ total(2,25); }
function calc3(){ total(3,99); }
function calc4(){ total(4,149); }

function total(n,base){
  let q=Number(document.getElementById("qty"+n).value||1);
  document.getElementById("total"+n).innerText=q*(base+addons(n));
}

function send(msg){
  window.location.href="https://wa.me/"+phone+"?text="+encodeURIComponent(msg);
}

function order1(){ send(`MELVIQUE ORDER\nMini Joy Chocolate\nTotal ₹${totalVal(1)}`); }
function order2(){ send(`MELVIQUE ORDER\nMid Size Chocolate Bliss\nTotal ₹${totalVal(2)}`); }
function order3(){ send(`MELVIQUE ORDER\nBig Bite Chocolate Bar\nTotal ₹${totalVal(3)}`); }
function order4(){
  let name=document.getElementById("name4").value||"—";
  send(`MELVIQUE ORDER\nPersonalised Chocolate\nName: ${name}\nTotal ₹${totalVal(4)}`);
}

function totalVal(n){ return document.getElementById("total"+n).innerText; }

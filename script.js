function openModal(i){
  document.getElementById("modal"+i).style.display="flex";
}

function closeModal(i){
  document.getElementById("modal"+i).style.display="none";
}

function addons(i){
  let p=0, t=[];
  if(c(i)) {p+=7; t.push("Cashews");}
  if(a(i)) {p+=5; t.push("Almonds");}
  if(ch(i)){p+=10;t.push("Choco Chips");}
  if(s(i)) {p+=8; t.push("Sprinkles");}
  return {price:p,text:t.join(", ")||"None"};
}

function c(i){return document.getElementById("c"+i).checked;}
function a(i){return document.getElementById("a"+i).checked;}
function ch(i){return document.getElementById("ch"+i).checked;}
function s(i){return document.getElementById("s"+i).checked;}

function calc(i,base){
  let q=document.getElementById("q"+i).value;
  let ad=addons(i);
  document.getElementById("t"+i).innerText=q*(base+ad.price);
}

function order(i,name,base){
  let q=document.getElementById("q"+i).value;
  let ad=addons(i);
  let total=document.getElementById("t"+i).innerText;
  let msg=document.getElementById("name4")?.value||"";

  let text=`MELVIQUE ORDER 🍫
Product: ${name}
Quantity: ${q}
Add-ons: ${ad.text}
${msg?`Name/Message: ${msg}`:""}
Total: ₹${total}`;

  window.open("https://wa.me/919999829152?text="+encodeURIComponent(text));
}

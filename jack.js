let ques= document.getElementById("qu")
let card= document.getElementById("ca")
let sum= document.getElementById("su")
let der= document.getElementById("spon")
let but1= document.getElementById("sta")
let newBut= document.getElementById("ne")
let arr=[]
let pix=['car.PNG','card.PNG','gp.PNG','jack.PNG','jacK2.PNG','jack3.PNG','jack7.PNG','jack 5.PNG']
let count=0
let countLimit=3
function seyi(){
    let input= document.getElementById("inp").value
    input.value=""
    ques.innerHTML=input+ " are you sure you want to play this Blacj jack game? If yes click on New Card to draw a card"
   
}
but1.addEventListener("click",seyi)
function jack(){
    let pil=document.getElementById("dee")
    let rando=Math.floor(Math.random()*10)
    card.innerHTML+=  rando + "-"
    arr.push(rando)
    y=arr.reduce((c,d)=>c+d)
    sum.innerHTML="Sum:" + y
if(y< "21"){
    ques.innerHTML="HEY!!! THE CARD YOU DREW IS LESS THAN 21 PLEASE TRY AGAIN"
}else if (y=="21"){
    ques.innerHTML="HEY!!! THE CARD YOU DREW is 21, YOU WON THE GAME"
}else{
    ques.innerHTML="HEY!!! you lost THE GAME"
}
    pil.setAttribute("src",pix[count])
    if(count==7){
        count=0
    }
count++
 }
newBut.addEventListener("click",jack)


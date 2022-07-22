const btn2 = document.getElementById('v2');
btn2.onclick = function () {
    console.log("You clicked me!");
    console.log("I hope it workks")
}
function scream() {
    console.log("AAAAAAAAAAHHHH");
    console.log("STOP TOUCHING me!")
}
btn2.onmouseenter = scream;
const btn1 = document.querySelector('button');
document.querySelector('h1').onmouseenter = () => {
    console.log('You touched h1')
}
const btn3 = document.getElementById('v3');
btn3.addEventListener('mouseup',scream)
function twist(){
    console.log("Twist")
}
function shout(){
    console.log("Shout")
}
const tasButton = document.getElementById('tas');
tasButton.onclick = twist;
tasButton.onclick = shout;
tasButton.addEventListener('click',twist,{once:true})
tasButton.addEventListener('click',shout);
const input = document.querySelector('input');
input.addEventListener('keydown',() =>{
    console.log("KEYDOWN");
})
input.addEventListener('keyup',() =>{
    console.log("KEYUP");
})
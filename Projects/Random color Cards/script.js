function makeRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`;
}
const buttons = document.querySelectorAll('button');
const h1 = document.querySelector('h1');
function changeH1() {
    h1.style.backgroundColor = makeRandomColor();
    h1.innerText = `Your color is ${makeRandomColor()}`
}
for (let button of buttons) {
    button.addEventListener('click', colorize);
    button.addEventListener('click', () => {
        console.log("object")
    })
    button.addEventListener('click', changeH1);
}
function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}
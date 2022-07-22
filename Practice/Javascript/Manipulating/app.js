let links = document.querySelectorAll('p a');

for (link of links) {
    console.log(link.title + " = " + link.href);
}

let images = document.querySelectorAll('img');

for (image of images) {
    console.log("Images's link is " + image.src)
}

const allLinks = document.querySelectorAll('a');

for (link of allLinks) {
    link.innerText = 'I am a link';
}

const firstLink = document.querySelector('a');

const input = document.querySelector('input[type="text"]');
const h1 = document.querySelector('h1');

for (link of allLinks) {
    link.style.color = '#ccc';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

const h2 = document.querySelector('h2');

const firstBold = document.querySelector('b');

const paragraph = firstBold.parentElement;

const squareTag = document.querySelector('.square');

const newImg = document.createElement('img');
newImg.src = "https://th.bing.com/th/id/OIP.PWRjChW0UHI-QvV4eI0CBQHaE5?w=239&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
console.dir(newImg);
document.body.appendChild(newImg);
newImg.classList.add('border');
const newH3 = document.createElement('h3');
newH3.innerText = "I am new";
document.body.appendChild(newH3);
const p = document.querySelector('p');
p.append(newH3, newImg)
newB = document.createElement('b');
newB.innerHTML = "<b>This is new Bold</b>";
p.prepend(newB)
const newH2 = document.createElement('h2');
newH2.append("Are you adorable");
firstBold.insertAdjacentElement('afterbegin',newH2);
const h3 = document.createElement('h3');
h3.innerText = "new h3 create";
h1.after(h3)
const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
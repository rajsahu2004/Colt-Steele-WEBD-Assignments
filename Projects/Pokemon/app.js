// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const section = document.createElement('section');
section.id = 'container'
const h1 = document.querySelector('h1')
h1.insertAdjacentElement('afterend',section);
const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
for(let i=1;i<=898
    ;i++){
    const pokemon = document.createElement('div');
    const newImg = document.createElement('img');
    const label = document.createElement('span');
    newImg.src = `${baseUrl}${i}.png`;
    label.innerText = `#${i}`
    section.append(pokemon);
    pokemon.append(newImg,label);
}
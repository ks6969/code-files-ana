//to change the color of a text(html) to any different color

// step 1 - Acessing the html element inside javascript

let text = document.getElementsByClassName('color')[0];
console.log(text); //if you wanna check what is inside text variable

text.addEventListener('click', function(){
    text.style.color = 'blue';
})

// chnage the color of the last four headings to any random color out of an array of 5 random colors when the user clicks on them


let colors = ['red', 'yellow','grey', 'violet', 'cyan']

let lastFourHead = document.getElementsByClassName('lastFour');


for(let i = 0; i < lastFourHead.length; i++){
lastFourHead[i].addEventListener('click', function(){
    lastFourHead[i].style.color = colors[Math.floor(Math.random()*5)];
})
}

// create element through js

let createdElement = document.createElement('button');
createdElement.textContent = 'Iam a btn created through js';
document.body.appendChild(createdElement);

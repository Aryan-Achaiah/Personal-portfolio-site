function hamburg(){
    const navbar= document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

function cancel(){
    const navbar= document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}

//typewriter effect

const texts = [
    "DEVELOPER",
    "UI/UX DESIGNER",
    "ABSOLUTE-LEARNER"
]

let speed = 100;
const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typewriter(){
    if(characterIndex < texts[textIndex].length){
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typewriter, speed);
}
else{
    setTimeout(eraseText,4500)
}
}

function eraseText(){
    if(textElement.innerHTML.length > 0){
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex =(textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typewriter, 500)
    }
}

window.onload = typewriter
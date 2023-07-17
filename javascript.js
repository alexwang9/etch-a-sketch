let size = 16;

const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
document.documentElement.style.setProperty("--columns-row", size);
btn.addEventListener('click', promptUser());


function createGrid(x){
    for(let i = 0; i < x; i++){
        for(let j = 0; j < x; j++){
            const div = document.createElement('div');
            div.setAttribute('style', 'margin: 0; padding: 0;');
            div.classList.add('grid');
            container.appendChild(div);
        }
    }
}

function clearGrid(){
    container.remove();
}


function promptUser(){
    size = prompt("Enter number of squares on one side (1-100):");
    
}

createGrid(size);
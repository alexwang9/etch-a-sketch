let size = 16;

const container = document.querySelector('#container');
const btn = document.querySelector('#btn');


function createGrid(x){
    document.documentElement.style.setProperty("--columns-row", size);
    for(let i = 0; i < x; i++){
        for(let j = 0; j < x; j++){
            const div = document.createElement('div');
            div.setAttribute('style', 'margin: 0; padding: 0;');
            div.classList.add('grid');
            div.addEventListener('mouseover', changeColor);
            container.appendChild(div);
        }
    }
}

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

function changeColor(e){
    e.target.style.backgroundColor = '#000';
}

function promptUser(){
    size = prompt("Enter number of squares on one side (1-100):");
    clearGrid();
    createGrid(size);
}

btn.addEventListener('click', promptUser);

createGrid(size);
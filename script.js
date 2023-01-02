const body = document.body;
const container = document.getElementById('container');

function createDivs(numDivs) {
for (let d = 0; d < numDivs; d++){
    let cells = document.createElement('div');
    container.appendChild(cells)    
    }
}

createDivs(256);

const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

const createGrid = (amtOfGrids) => {
    for (let i = 0; i < amtOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')
        for (let j = 0; j < amtOfGrids; j++){
            const widthAndHeight = 850 / sizeOfGrid
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
            resetButton.addEventListener('click', () => {
            gridBox.style.backgroundColor = 'white'
})
        }
        container.appendChild(row)
    }
}

let sizeOfGrid = 16;
createGrid(sizeOfGrid);

// resetButton.addEventListener('click', () => {
//     gridBox.style.backgroundColor = 'white'
// })





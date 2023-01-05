
const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
const newGrid = document.getElementById('new-grid');

const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    for (let i = 0; i < amtOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++){
            const widthAndHeight = 850 / amtOfGrids
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'black'
            })
            // row.appendChild(gridBox)
            resetButton.addEventListener('click', () => {
                gridBox.style.backgroundColor = 'white'
            })
              row.appendChild(gridBox)
        }
        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

createGrid(16)


newGrid.addEventListener('click', () => {
    let userSize = Number(prompt('Enter the number you want for the size of your new grid.'))

    while (userSize > 100) {
        userSize = Number(prompt('Pick a number smaller than 100.'))
    }
    const wrapper = document.querySelector('.wrapper')
    wrapper.remove()
    createGrid(userSize)
})




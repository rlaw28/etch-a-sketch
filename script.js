
const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
const newGrid = document.getElementById('new-grid');
const rainbow = document.getElementById('rainbow');

// const createRandomRGB = () => {
//     const r = Math.floor(Math.random() * 256)
//     const g = Math.floor(Math.random() * 256)
//     const b = Math.floor(Math.random() * 256)

//     return {r, g ,b}
// }

const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    for (let i = 0; i < amtOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++){
            // const {r, g, b} = createRandomRGB()
            const widthAndHeight = 850 / amtOfGrids
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
           
            // gridBox.addEventListener('mouseenter', () => {
            //     const bgColor = "rgb(" + r + "," + g + "," + b + ")";
            // gridBox.style.background = bgColor
            // })
            gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'black'
            })

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



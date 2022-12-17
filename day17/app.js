
let grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'))
const width = 7;

const itemsAddedSpan = document.querySelector("#itemsAdded");
let itemsAdded = 0;
const heightSpan = document.querySelector("#height");
 

const rock1 = [width*3, width*3+1, width*3+2, width*3+3]
const rock2 = [width+1, width*2, width*2+1, width*2+2, width*3 + 1]
const rock3 = [width + 2, width*2 + 2, width*3, width*3+1, width*3+2]
const rock4 = [0, width, width*2, width*3]
const rock5 = [width*2, width*2+1, width*3, width*3 + 1]

let index = 0;

let rocks = [rock1, rock2, rock3, rock4, rock5];

let position = 2;
let currentRock = rocks[index];

let jetData = `>>><<>>><<<>>>><<>>><<<<>>>><<<>>>><<<>>><<<<>><<><>><<<>>>><<<<>><<<>><<<<>>><<<<>>><>><<>><<<>>>><<<<>>><<<<>>>><<<><>>>><><<>>>><<><>>>><<<>><<<>>><<<<>><<><<<<>><<><>><<<>><>>>><<<>>>><<>>>><<><<<>><<>>>><>><<<<>>>><>>><<<>><<<<>>>><<>><<<<><<><<<>>><<<<><<>>>><<><<<>><<<<><<<><<>>>><>><<<<>><>>>><<><><>>><>>>><<<><<>>>><<<><<<<>><<<>>><>>><<>>>><>>><<>><<<<>>>><<<>><<>>><<<<><<<>><>>>><<<<>><<<<><>><<<<>>><>>><<<<>>><<<<>>><<<<>>><<<>><<<>>><<<>><>>><<<<><>><<<<>>>><<<<>><<<>>>><<<<>><<<<>><<<<>>>><<<<>><<<>><<<>><<<>><<>>><<>>>><<<>>>><>>>><>><<<>>>><>><<<><<<<><<<>>>><<><<>>><>><>>>><<<>>><<<<>>><>>>><>>><<<><<>>><<<<><<>>>><<<><>><>>>><<<>><<<>><<<><<<<>><>><<<<>>><>>>><<>>><<>><>>>><<<<><>>><>><><>>>><<<><<<>>>><><<<<><<<><<<<>>><<<>><<<<>>><>>><<<<>>><<>><<<>>><<>><<<<><<<<><<<<>><<<>>><<>>>><>><<<<>>><><<>>><<<>>>><>>>><>>><<<<>>><<<<>><<<<><><>><<<<>><<>>>><>>>><<><<>>>><><<<>>><<>>>><<<>>><<<<>><<<<>>>><<<<>><<<><<>>>><<<<>>>><<<>>><<><<<>>><><<<>>>><<<<>>><>>><>>>><<<<>><<<>><<><<<>><>><>><<<><<<>>>><>><><>>>><<>>><<>><>><<<>><><<<<>>>><<>>><<>>><<>><<<>>><<<<>><<<<>>>><>>><<<<>><><<<>>>><<>><>>>><>>>><>>>><>>>><>>><<<<>><><<<<>>>><<<<>><><<<<><>><<>>><>>><<<>><><<>>>><<<>>><<<<>>>><<<>><<<<>>>><<<>>>><<<<>>>><<><<<<>>>><<<><<<>><<<<><<<>>><><<<>><<>><<<>>><<<><<<>>>><<<<>><<<<>><<>><<<<>><>><>>><<<<><>>>><<>><<<><<>><<<<><<><<<<>><>>><>><<<>>><<<>><<<<>>>><<<<>>>><<<>>><<<<>><>>><<>><<<><<<<>>>><<>>>><<<<>><<<<>><<<>>>><<>>>><><><<>><><<<><<<>>><>>><<<<>>>><<<>><<<<>>><<<<>><<<>>><<<<>>>><<><>><<<<><<<<>><<<><<><><><<<<>><<<<>>><<<>><>>>><>>><<<<>>><<<<><<>>><<<<><<>><<<><<<<>><<>>>><>><>><<<>>>><<<<>>><<<><<<>>>><<<><<<>>>><<<>><>>><<>>><<<><<<<>>>><>>>><<<<><<>><<>>><<><>>>><>>><><<>>>><>>><><>><<<>>>><<<><>><<>>>><<<<>>><<><<>>>><>><<>>><<<<><<>>>><<><>>><<<><<><<<<>><<<<>>>><<>><>><<>><>>>><<<>>>><<<<>><><<>>>><<<><<>>><<<>>>><<<>>><<>>>><<<<>>><>>><<<><<>>><><>>><<<>>>><<<<>>><<>>>><<>>><<<<>>>><<<>><><<>><<<>>><<>><<<>>>><<>><<>>><<>>>><<<>>>><<<>>><>>>><<><<<<><<<>>><<<><<<>>><<>>>><>><<<>><<>>>><><>>>><>>><<<>><<<>>>><<>>><<>><><<<>><<<<>><>>><>>>><<<<>><<<>>><<>>><<>>><<<<>>>><<>>>><>>><<<<>>><<<>><<<><<<>><<<<><<>>>><<>><>>><<<>>>><<><<<<>>>><<<>>>><<<><<<>><<<<><<<<><<>>>><<<<>>>><<<><<<<>>><<<<>><<><<<<>>>><>>><<<<>><<>><<<<>>>><<<>><<>>><<<><<<<>>><<>>>><<>>>><<<<>><>>>><<<<><>><>><<>>>><>>>><<<<>>><<<<>>><<<>>>><<<>>><<>>><<<<><><<>>><<><<<<>>><<>><<<>><<>><>><<<><<><<>>><<>>><<>>>><<>><<<><<<<>>><<<>>><<><>>><<<<>><<<<>>><<<>><>><<<<>><<<<>><<<<><>><>>><><>><<<>><>><>><<>><>>>><<<<>>><>><<>><<<<><<<>>>><<<<>>>><<<<><>>>><<<<><<<<>>>><>>>><><>>>><>>><<<<><<<<>>>><<<<><<<<>><<<<><<<<><<<>><<<>>><<>>>><<<<>>><><<>>>><<<><>>>><<<>><<<>>><<<>>>><>>><<<<><>>><>>>><<>>><>><<<<>><>><>><>>>><<<<><<>><<<>>><<<<>><<<<><<<<>><<<>><<>>>><<<>>><<><<><<<<>>>><<<>>>><<<>>><>><<<<>>>><<<<><<<<>>><<><<<<>>>><<<>><>>><>>>><<<>>>><<>>><>>><<<>><<<<>>><<><<<><<<<><<<<>><<<<>>><<>>>><<>><<>><<<<>>>><<<>>><<<<>>>><><<><<<>>>><><<>>><><><<<><<<<><><>>>><<<>>>><<><><<>><<>>><<>>><<<<>>>><<>><<<<>>><<<>>>><<<<>>><<>>>><<<>>>><>>><>>><<<><>><<<<>><<<>>>><<<<>><><<>>>><<<><<>><>><<<<><<><<<>>>><<><<>><<>><<<<>>>><<<>><<>>>><<>>>><<>>><>>><<<<>><<<<>>>><<<<>>>><><<<<>>>><<<>>>><><>>>><<<>>><>>><>>>><>>><<>><<<>><>>><>>><<<<>>><<>>>><<<>><<>>><<><<<<>>><<<><<<<>>>><>><<<>><<<>><>>><<<>>><<<<>>><<>><<<<>>><>>>><><<<>><<<<>>><<>>><<<<>>>><<<>><<<<>>><>><<<<><<<>>><<><<<<>>><<<>>><>>><>>><<>>>><<<<><<<>>>><<<>>>><>>>><<>>>><<<<>>>><<<>>><<<<>><<<<>><>>><<<<>>>><>>><<<>>>><><<<<>>>><<<>><>><<<<><>><>><<<<>>>><>>><<<<>><>><<><>>>><<<>>>><<<><>><<<<>><<><><<<>><<>>><<<>>>><>>><<>>><<<<><>>><<><>>>><<><<>><<<><<>><>>>><>>>><<><<<<>><<>>><<<<>><<<>>><<<<>>><>>>><>>><>>><<<<>>>><<<<>>>><<><>><<<<>>>><<>>><<<<><<>><<<<>>>><>><>><<<>>><>>><<>>>><<<<>><<><<<>>><><<<<><<<>><<<>>>><<<>>><>><<<<><<<<><<<<><>>>><<<<>><<>>><<>>>><<>>><><<<<>>><<>><<<>><<><<>>>><<<<>>>><<<<>>><<><<><<>>>><<>>><>>>><<<<>>>><<<>><<><<<>>><<<<>>><><<<>>>><<<><>>><<<>>>><<<<>>>><<>>><>>><<<<>>><<>><<<>>><>>>><><<>><>>>><<<<>>><>>>><<<><>>><<<<>>><><<<>>>><<<<>><<<<><><<<<>><<<>>>><>>><<>><<><<<<>><>>>><>>><<>>>><<<<>><<<<><<>>>><<>>>><>>>><<>><<<<>>><<<<>>><<><<>>>><>>><<<<>>>><<<>>>><><<<>><<<><>>>><<>><<>>>><<>><<<<>><><<>>>><<>>>><<>>>><<>>>><<<<>>><>><<<>>><<>><<>>>><<>>>><><<<><<<>>><<>><<><>><><<>>><><<<>>>><<><<<<>>>><<<<>><><<<>><>>><<<>>><<><>>>><><>><<<>>>><<>><<>><<>>><>>><<<>>><<<>>>><<<<><<><<<<>>>><<<>>>><<<><<<<>>><<<>>>><<>><<<>><><<<>>>><<<><><<>>><<<<>><<>>><>>><<<<>>><>>><<<>><>>>><<>><<<>><<<<>>><><<><<>>><<>><<<<><<<>>>><<<>>><<>><<<<>>><<<<>><<>>>><><><<<<>>><<<<>>><>>>><<>>><>>>><<<<>><<<<><<<>><>><<<>><>>>><><<<>>>><<<>>><<<>>>><>>><<<<>><>>><<<<>>><<<>><>><<<>>><<><<>>>><<>>><<<><<<<>>>><<>><>><<>><>>>><<<<>>>><<<>>><>><<<>><>><<<>><><<<<>>><<<<><<<<><<>>>><>>>><<>>><>><>><<<>>>><>><<>>>><<<<>><<<<><<<>>>><>>>><<<<>><<<>>>><<>>><<<><<<><<<<>><<<<><><<><<<>><<<<>><<<<>>><<<><>><<<>>><<>>>><><<<<>><<<>>>><<<<>>><<<<>>><>>><<<<>>>><<>><<<<><<<<>><>><<<>>>><>>><>><<<<>>>><<<<>><<>><<<<>>><<>>>><<>><<<>>>><<<<>>><<>>>><>>><>>><<<>><<<>>><>><<<<>><<<>>><>>>><<>>><<<<><<<><>><>><<<<>><<<<>>><><<<><<<>>><>><<<<>><<<<><<<>>><<>>><<<<>><<<>>>><<>>>><<<>>>><<<>><<<>>>><<>><<><<<>>>><<>>>><<><<<<>>>><<<<><<<>><<>>><><<<<>>>><<><<<<>>><<<>>><<<<>><<>>><<<>><<<>>><<<<>>>><<<>>><>>>><<<<><<<>>>><<<<>><>><<<<>>>><<<>><<<><<>>><><><<>>><<<<>>><<<><>>>><<<>>><<<<><<><><<>>>><<<<>><<<>>>><<<>><<><<<<>><<>>>><<<>>><>><>>><<<<>>>><><>><<><<>>>><<<>>><><<<>>>><<<<>><<<>>>><<<<>>>><<<<>><><>>><<<>>>><<<>>><<>><<<>><>><<>>><<<>>>><<>>>><<<<><>><<><<<<><<<><<<><>>>><<<><<<><<<>>>><<<>>>><<<>>><><<>>>><<<>>><<<>>><<<<><<<<>><<<<>><<<><<>>>><<<<><>>>><><<<>>>><<<>>><<<>><>>><<>>><<<>><><>>><<>><<<<>><<<<>><<>>>><><<<<>>><>>><<<>>><<<<>>>><<<<><<<><>><<<<><<<<><<<<><<<<>>>><<><<>>>><<>>><>><<>>><<<>>>><><>>><>><<<>>><<>>><>>>><<>><<>>>><<>><<<>>>><<<>>><<<<>>><<>>>><<<<><<<<>>><<<<>>>><<>><<<>>><<<<>>><>><<<<>><<<>>><<<>>><<<>>>><<<>>><<>><>>>><<<<><<>><<>>>><>>><<<>>>><<<<>>><<<>>><<>>>><<<<>>><<>>><<<<>>>><>>><<<<><<><>>>><<<<>>>><>><<><<<>>>><<>>>><>>>><<<><<<<>>>><<<>>>><<>>><<<<>><<>>><>><>>>><<<<><<<<>>>><<>>><<<>><<>><>><<>><<>>><<>>>><<>><<<>>>><><<><><<<>><<<<><<<>>>><>>><<>>><<<>><>>><<>><<<>>><>>>><<<>>><<>>><<>><>>><<><<<>>>><<<<>>>><<<>>><<>><<><<<>>>><<<<>><>>><<<<><<<<>>>><<<>>><<<>><<<<>>><<<<>>>><<<><<>><<>>>><<><<>><<>>><<<>><<><>>><>>><>><<<>>><<>><<>>>><><<<>>>><<>>>><<>>><>>>><<>>><<<><<>><<<>>>><<<<><<<<><<>>>><<<><>>><<<><<>><<<>>><<<><><<>>><<>>><<<<><>><<>><<<><<>>><<><>>><<<<>>>><>>>><<<<><<><<<>>>><<<>><<>>>><<<><<>>>><>>><<<>>>><<<<>>>><<><<<<>>>><<>>><>>>><<<><<<<><<<<>>><<<>><<<<>><<<>><<><<<>>><<<>>><<<>><<<<><<<<>><<<<>>><<<>><>>><<<<><<>>><>><<>>><<<<>>>><>>><>><<<>>><<>>><<>>>><<<><<>><>><>><<<>>>><>>>><><>><>>><<<>><<<<><<<<>><><<<>><<<>>><<<<><<>><<<<>>><><<><<<>>><<<>><>>>><>>>><<<>>><<<<>><<>>><<<<>><<>><><<<>><<>>><<>>><<<>>><<<<><<<<>>>><>>>><<<<>>><<<<>>><<<<>>><>><<><<>>><<<>><>>><<>>>><<<>>>><<>>><>>>><>><<>>><><<<<>><<<<><<<<><<<>>><<<<>>><<>><<<<>>><<<>>>><><<>><>><>>>><<<<>>><<<<>>>><<<<><<>><<<<>>>><<<>><<<<>>><<<<>>>><>>>><<<>><>>><<<<>>>><<<<><<<<>>>><<>><<<<>>><<<<><<><<<<>><>>><<<>>><<<>>><<<>>><<<>><<<<>>>><<<>>><>>>><<<<>>>><<>>><><<>><>><>><>><>>>><<<<>>>><<<>>>><<<<>><<<<>><<<<>>><<><>>>><>>><<<<>><<<>><<<<>><<>><><><<<>>><>><><<>><>>><<<><>>><>>>><<><<<<>>>><<>><<>><<<><<>>><<>>>><<<<>>><<<>><<>>><<<<><<<>>>><<<<>>>><><>>>><>><<>>><<<<>>><<>><<<>>><<<<>><>>><<>><<><<>><<>>>><<<<><<<<>><<<<>>>><<<<><<<<><><>>>><<>>><><<>>>><<<><>>>><<<<>>><<<<>>>><<<<>><<<>>>><<<<>><<<><<<<>>><<<<>>>><>><>>><<<><><<<>>>><<<<>>><>><>>><<>>><<>><<>>>><>>><<><<><><<>><<<>><>>><>>>><>>><>>><<>>><<<<><>><<><<<>><<<<>>><<<><>>><<>><>><<<<>>><>><<<<>>>><>>>><>>><>><<<><<>>><<>><<<<>>><<<<>><<><<<<><<>><<<><<<><><<<<>><<>><<<<><<<<>><>><<>><>><<<<>>><><><<<<>><<<>><<<>>><<<<>>>><<<><><<<><<><>><<<<>>>><><>><>>>><<><>>>><<>>><>><<>>>><<<>>><>>>><<>>>><<>>><<<><<<<>>>><<<<><<<>>>><<>><<<<>>>><<<><>>>><<<><<<><<<>><<<>><<<>><<<>><<>>>><<<>>><<>><<<<>><<><<>>><<<<><><<<<><>>>><<>><<>>><<<>><<<>>><<<>>>><<<>>>><<<<><<<><<<<>>><<>><<<><<<<>><<<>>>><<<><>>>><>>><<<><>><<<>>>><<<<>><<<<>>><<<<>>><>>><<<>><<<>>>><>>><<><<><<<>><<<>>>><<><<><>>>><<><<<<>>><<<<>>><<<>>>><<>>>><<<><<<<>>><<><<<>>>><<>><<<<>>><><<<<><<>><<<>>><<<>>>><<<<>>><><><<<>>><<<>>>><>>><>>><>>>><<<<>>>><>>><<<<><<><<<>>>><<<<><<<>><>><<<><<<><<>>><<<<>>><<>>><<<><<<<>>><<<<><<<<>><<><<<<>>><<>>>><>><<>>>><<<>>><><>>>><<<<>>><>><<<>>>><<><<>><<>>>><<<<>>>><<<<>>><>>><<<<>>>><<>>>><<<>>><<<<>><<>>>><<>>><>>><<<<>>><<<<>><>>><>>>><><><<>><<<<>>><<<>><<<>>><<>>><<><>>><>>>><<>><<<<>>><<<>>>><<>><>>>><<<<><>>>><<>><<><<<>>>><<<<><<<>>>><<<<>>><<<<>><><>>><><<<<>>><<<><<>>>><<<>>><<>>><<<<>>>><>>><>><>>>><>><<>>>><<<><<>>>><<<<><>><<>>><<>>>><<>><<>>>><>>>><<>>>><<<>>><<<<>>><<<<>>>><<<<>>><<>>>><<>>>><<<>><>>>><<<<>>>><<<<><<><<<<>>>><<<>><>><<>>>><<><><<<<>><<<<>><<<>>>><<<<>><<>>>><<<><<<<>>><>>><<<<><<<>>><<<>>>><<<><>><>><>>>><<<<>>>><<<>><<<<>><<<><<<<>>>><<<>><>>>><<<<>>><<<>>><<>><<<<>>><<<>><<<><>>>><>>><<<<><><><<<<>><<>><<<>>><<<<>><<>>><<>>>><<<>><<<><<>>><<<>>>><<>>><<<<>><<>>>><>><><<<<>><<<<>>>><>>>><<<>>>><<<<><<>>>><>>>><<<><<<>>>><<<>>>><<>><<>><<<>>>><>>><<<>>>><<<<>>><>>><<><<<><<<<>>><<>><<<<>>>><<<<>>>><<>><>><<>>><<<<><>>>><<<>>><<><<<<>>><>>><<>><<<<><<<>>><<<>><<<><<<>><<><>>>><<<><<<><<<>><<>>>><>>>><>><<<<>>>><<>><<<><><<>>>><<>>>><<<>><<<><<<>>>><<<>>><<>><<<>>>><<<<><<<<>><<>>><><<>>>><<<<>><<<<><<<><<<>><<>>>><<<<>>><<<><<<>>>><<<>>>><<>><<<><<<<>>><>>>><<<<><<<<>>><<<<>><<<><<<>>><<>>>><<>>>><<<<>>><<<>>>><<<<><><<<<>>><<<<>><<>><<><<>><<>><<<>><>>>><<<>><>><>><<<<>><><><>><><<<<>>><<<>>>><<>>>><<<>><<><<<>><<<>>>><>>><<<><>>>><>>>><<><>>>><<<>><<<>>><<<<>><<>><<<<>>>><<<>>><<>>>><<>>><<<><<<<><<>>><<<<>>>><<>>>><>><<>>><<<<>>>><<<>>><<>><<>>>><<<>><<>>>><<>>>><<<<>>><><<<>>>><<<<>>>><><<>>><<<>><>>><>>><<<<>>><><<>><<<<><<>>>><>>>><<<>>><<>><>><<<<>>><><<<<><>>><<<><<<>>><<<>>>><>><<<<>>><<<>>><<<>><>><<<<><<>>>><<<<>><>>>`;
let jetindex = 0;
let jet = jetData[jetindex];

draw();

function draw() {

    currentRock.forEach(index => {
        squares[index + position].classList.add('block')
    })
}

function undraw() {
    currentRock.forEach(index => {
        squares[index + position].classList.remove('block')
    })
}

function moveLeft() {
    const isOccupiedOrAgainstWall = currentRock.some(index => {
        return ((position + index) % width === 0) ||
        squares[position + index - 1].classList.contains('occupied') 
    });

    if(!isOccupiedOrAgainstWall)
        position -= 1;
}

function moveRight() {
    const isOccupiedOrAgainstWall = currentRock.some(index => {
        return ((position + index) % width === width - 1) ||
        squares[position + index + 1].classList.contains('occupied') 
    });

    if(!isOccupiedOrAgainstWall)
        position += 1;
}

function moveDown() {

    
    
    const isOccupied = currentRock.some(index => squares[position + index + width].classList.contains('occupied'))
    
    if(!isOccupied)
        position += width;
    else {
        currentRock.forEach(index => {
            squares[index + position].classList.add('occupied');
        })
        
        index = (index+1) % rocks.length;
        currentRock = rocks[index];
        position = 2;

        let floorsToAdd = 7;
        floorsToAdd -= Math.floor(squares.findIndex(square => square.classList.contains('occupied')) / width)
        addFloors(floorsToAdd);

        updateStats();
    }

}

function updateStats() {
    itemsAdded++;
    
}

function addFloors(num) {
    for(let i = 0; i < num * 7; i++) {
        grid.insertBefore(document.createElement('div'), grid.firstChild)
    }
    squares = Array.from(document.querySelectorAll('.grid div'))
}

function update() {
    undraw();

    if(jet === '>')
        moveRight();
    else if(jet === '<')
        moveLeft();
    

    moveDown();

    draw();

    jetindex = (jetindex+1) % jetData.length;
    jet = jetData[jetindex];
}

while(itemsAdded != 2022) {
    update();
}

itemsAddedSpan.textContent = itemsAdded;
let height = grid.children.length / width - 8;
heightSpan.textContent = height;
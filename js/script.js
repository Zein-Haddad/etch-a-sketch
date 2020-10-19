let grid = document.querySelector('#grid');
let boxes = [];
generateGrid(16);
document.querySelector('#grid-tool').addEventListener('click', gridTool)

function gridTool () {
  clearGrid();

  let newSize = parseInt(prompt('Enter Grid Size: ', '16'));
  if (newSize > 100) {
    alert('Maximum size is 100!');
    gridTool();
    return;
  }

  generateGrid(newSize)
}

function generateGrid (size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.classList.add('grid-row');
  
    for (let j = 0; j < size; j++) {
      let box = document.createElement('div');
      box.classList.add('box');
  
      boxes.push(box);
      row.appendChild(box);
    }
  
    grid.appendChild(row);
  }
  
  generateEventListener();
}

function generateEventListener () {
  boxes.forEach ((elem) => {
    elem.addEventListener('mouseenter', () => {
      elem.style.backgroundColor = `rgb(${rand(0, 256)}, ${rand(0, 256)}, ${rand(0, 256)})`;
    })
  })
}

function clearGrid () {
  if (grid.childElementCount > 0) {
    grid.removeChild(grid.childNodes[0]);
    clearGrid();
    return;
  }

  boxes = [];
}

// Min inclusive, Max exclusive
function rand (min, max) {
  return min + Math.floor(Math.random() * (max - 1));
}

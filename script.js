const container = document.querySelector('.grid-container');
const resizeBtn = document.getElementById('resize');
const clearBtn = document.getElementById('clear');

function makeGrids(size) {
  for (let i = 0; i < size; i++) {
    let gridColumn = document.createElement('div');
    gridColumn.setAttribute('class', 'grid-element');
    for (let j = 1; j <= size; j++) {
      let gridRow = document.createElement('div');
      gridRow.style.border = '1px solid hsl(0, 0%, 79%)';
      gridColumn.appendChild(gridRow);
    }
    container.appendChild(gridColumn);
  }
}

window.onload = makeGrids(16);

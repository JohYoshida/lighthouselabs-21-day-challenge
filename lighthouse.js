const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "v", "", "~", "", "", "", "", ""],
  ["", "v", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "v", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

function countRows() {
  let count = 0;
  GRID.forEach(row => {
    count++;
  });
  return count;
}

function countColumns() {
  let count = 0;
  const row = GRID[0];

  row.forEach(column => {
    count++;
  });

  return count;
}

function gridSize() {
  const cols = countColumns();
  const rows = countRows();
  const size = `${cols} x ${rows}`;
  return size;
}

function totalCells() {
  const cols = countColumns();
  const rows = countRows();
  const total = cols * rows;
  return total;
}

function convertColumn(coord) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const column = coord[0];
  return alphabet.indexOf(column);
}

function lightCell(coord) {
  const gridRows = countRows();
  const gridCols = countColumns();
  const rows = coord.slice(1) - 1;
  const cols = convertColumn(coord);
  if (rows >= gridRows || cols >= gridCols) return false;
  const cell = GRID[rows][cols];
  return cell;
}

function isRock(coord) {
  const cell = lightCell(coord);
  if (cell === "^") {
    return true;
  } else {
    return false;
  }
}

function isCurrent(coord) {
  const cell = lightCell(coord);
  if (cell === "~") {
    return true;
  } else {
    return false;
  }
}

function isShip(coord) {
  const cell = lightCell(coord);
  if (cell === "v") {
    return true;
  } else {
    return false;
  }
}

function lightRow(row) {
  const results = [];
  GRID[row - 1].forEach(cell => {
    results.push(cell);
  });
  return results;
}

function lightColumn(column) {
  const results = [];
  const col = convertColumn(column);
  GRID.forEach(row => {
    results.push(row[col])
  })
  return results;
}

function allRocks() {
  const results = [];
  let row = 0;
  let col = 0;
  GRID.forEach(line => {
    row++;
    col = 0;
    line.forEach(cell => {
      col++;
      if (cell === "^") {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const alpha = alphabet[col - 1];
        const coord = `${alpha}${row}`;
        results.push(coord);
      }
    });
  });
  return results;
}

function allCurrents() {
  const results = [];
  let row = 0;
  let col = 0;
  GRID.forEach(line => {
    row++;
    col = 0;
    line.forEach(cell => {
      col++;
      if (cell === "~") {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const alpha = alphabet[col - 1];
        const coord = `${alpha}${row}`;
        results.push(coord);
      }
    });
  });
  return results;
}

function allShips() {
  const results = [];
  let row = 0;
  let col = 0;
  GRID.forEach(line => {
    row++;
    col = 0;
    line.forEach(cell => {
      col++;
      if (cell === "v") {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const alpha = alphabet[col - 1];
        const coord = `${alpha}${row}`;
        results.push(coord);
      }
    });
  });
  return results;
}

function firstRock() {
  const rocks = allRocks();
  return rocks[0];
}

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
  const width = countColumns();
  const height = countRows();
  const size = `${width} x ${height}`;
  return size;
}

function totalCells() {
  const width = countColumns();
  const height = countRows();
  const total = width * height;
  return total;
}

function convertColumn(coord) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const column = coord[0];
  return alphabet.indexOf(column);
}

function lightCell(coord) {
  const width = convertColumn(coord);
  const height = coord[1] - 1;
  const cell = GRID[height][width];
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

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

// Official grid
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
  ["", "^", "", "", "~", "~", "", "", "", ""]
];

// Variable size test grid
// const GRID = [
//   ["v", "", "", ""],
//   ["", "", "", ""],
//   ["", "~", "", "^"],
//   ["", "", "~", ""]
// ];

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
    results.push(row[col]);
  });
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

function firstCurrent() {
  const currents = allCurrents();
  return currents[0];
}

function shipReport() {
  const ships = allShips();
  const report = [ships[0], ships[ships.length - 1]];
  return report;
}

function howDangerous(str) {
  if (str.length === 2) {
    // treat as a coord
    let cell = lightCell(str);
  } else cell = str;
  let danger;
  switch (cell) {
    case "":
      danger = 0;
      break;
    case "v":
      danger = 0;
      break;
    case "~":
      danger = 50;
      break;
    case "^":
      danger = 100;
      break;
    default:
      // malformed input
      danger = -1;
  }
  return danger;
}

function percentageReport() {
  const cells = countRows() * countColumns();
  const rocks = allRocks().length;
  const currents = allCurrents().length;
  const percentRocks = (rocks / cells * 100).toFixed(2);
  const percentCurrents = (currents / cells * 100).toFixed(2);
  return [percentRocks, percentCurrents];
}

function safetyReport() {
  let report = [];
  GRID.forEach(row => {
    let reportRow = [];
    row.forEach(cell => {
      reportRow.push(howDangerous(cell));
    });
    report.push(reportRow);
  });
  return report;
}

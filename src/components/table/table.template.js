const CODES = {
  A: 65,
  Z: 90,
};

function createCell() {
  return `<div class="cell" contenteditable></div>`;
}

function toColumn(symbol) {
  return `<div class="column">${symbol}</div>`;
}

function createRow(content = '', info = '') {
  return `
    <div class="row">
        <div class="row-info">${info}</div>
        <div class="row-data">${content}</div>
    </div>
    `;
}

function toChar(index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 1) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const colTitles = new Array(colsCount)
    .fill('')
    .map((_, index) => {
      const symbol = toChar(index);
      return toColumn(symbol);
    })
    .join('');

  const contentRows = new Array(colsCount).fill('').map(createCell).join('');

  rows.push(createRow(colTitles));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(contentRows, i + 1));
  }

  return rows.join('');
}

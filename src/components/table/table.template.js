const CODES = {
  A: 65,
  Z: 90,
};

function createCell() {
  return `<div class="cell" contenteditable></div>`;
}

function toColumn(symbol, id) {
  return `
    <div class="column">
      ${symbol}
      <div 
        class="col-resize" 
        data-resize="col" 
        data-idElement=${'col-' + id}></div>
    </div>
  `;
}
export function toResizeColumn(node, width = 120) {
  node.style.width = `${width}px`;
}
function createRow(content = '', info = '', id) {
  return `
    <div class="row">
        <div class="row-info">
          ${info} 
          ${
            info
              ? `<div class="row-resize" data-resize="row" data-idelement=${
                  'row-' + id
                }></div>`
              : ``
          }
        </div>
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
      return toColumn(symbol, index);
    })
    .join('');

  const contentRows = new Array(colsCount).fill('').map(createCell).join('');

  rows.push(createRow(colTitles, '', 0));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(contentRows, i + 1, i + 1));
  }

  return rows.join('');
}

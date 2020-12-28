import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'mouseup'],
    });
    this.resizedNode = undefined;
  }

  toHTML() {
    return createTable(20);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      this.addListener('mousemove');
      this.resizedNode = event.target;
    }
  }
}

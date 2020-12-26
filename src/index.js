import {Excel} from './components/excel/Excel.js';
import {Header} from './components/header/header.js';
import {Toolbar} from './components/Toolbar/Toolbar.js';
import {Formula} from './components/Formula/Formula.js';
import {Table} from './components/Table/Table.js';
import './scss/index.scss';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
});
excel.render();

import {$} from '@core/Dom';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.component = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.component = this.component.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    this.component.forEach((component) => component.init());
  }
}

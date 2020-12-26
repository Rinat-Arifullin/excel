import {capitalize} from './utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No root provided to DomListener`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  noMethodError(method) {
    if (!this[method]) {
      const name = this.name || '';
      throw new Error(`Method ${method} is not implemented in ${name}`);
    }
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.noMethodError(method);
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
import {capitalize} from './utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No root provided to DomListener`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  // method has method or not
  noMethodError(method) {
    if (!this[method]) {
      const name = this.name || '';
      throw new Error(`Method ${method} is not implemented in ${name}`);
    }
  }

  // init all event listeners from $root component
  initDomListeners() {
    this.listeners.forEach((listener) => {
      this.addListener(listener);
    });
  }

  // remove all event listeners
  removeDomListeners() {
    this.listeners.forEach((listener) => {
      this.removeListener(listener);
    });
  }

  // add event listener to $root component
  addListener(listener) {
    const method = getMethodName(listener);
    this.noMethodError(method);
    this[method] = this[method].bind(this);
    this.$root.on(listener, this[method]);
  }
  // remove event listener
  removeListener(listener) {
    const method = getMethodName(listener);
    this.$root.off(listener, this[method]);
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}

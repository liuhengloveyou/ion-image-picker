
// ionimagepicker: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './ionimagepicker.core.js';
import { COMPONENTS } from './ionimagepicker.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}

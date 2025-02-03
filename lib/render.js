import Component from "./Component.js";

/**
 *
 * @param {Component} component
 * @param {HTMLElement} root
 */

export const render = (component, root = document.body) => {
  if (!(component instanceof Component)) {
    throw new Error(`invalid type ${component.constructor.name} for component`);
  }
  if (!(root instanceof HTMLElement)) {
    throw new Error(`invalid type ${root.constructor.name} for root`);
  }
  root.appendChild(component.render());
};

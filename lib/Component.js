class Component {
  element;
  children;

  constructor(element = document.createElement("main"), children = []) {
    if (!(element instanceof HTMLElement))
      throw new Error(`invalid type ${element.constructor.name} for element`);
    if (!Array.isArray(children)) throw new Error("children must be an array");
    for (const child of children) {
      if (!(child instanceof Component))
        throw new Error(`invalid type ${child.constructor.name} for child`);
    }

    this.element = element;
    this.children = children;
  }

  render() {
    for (const child of this.children) {
      this.element.appendChild(child.render());
    }
    return this.element;
  }
}

export default Component;

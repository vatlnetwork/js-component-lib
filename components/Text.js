import Div from "./Div.js";

class Text extends Div {
  constructor(text) {
    super({});
    this.element.innerHTML = text;
  }
}

export default Text;

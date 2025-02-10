import Div from "./Div.js";

class Text extends Div {
  /**
   * 
   * @param {string} text 
   */
  constructor(text) {
    super({});
    this.element.innerHTML = text;
  }
}

export default Text;

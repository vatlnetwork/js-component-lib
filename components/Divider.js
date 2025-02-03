import Component from "../lib/Component.js";

class Divider extends Component {
  constructor() {
    super(document.createElement("hr"));

    this.element.style.color = "rgba(200,200,200,0.3)";
    this.element.style.marginLeft = "10px";
    this.element.style.marginRight = "10px";
  }
}

export default Divider;

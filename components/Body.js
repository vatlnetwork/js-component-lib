import Component from "../lib/Component.js";
import { useTheme } from "../lib/useTheme.js";

class Body extends Component {
  /**
   *
   * @param {{children: Component[];}} props
   */
  constructor(props) {
    const { children } = props;

    super(document.createElement("body"), children);

    this.element.style.width = "100vw";
    this.element.style.height = "100vh";
    this.element.style.boxSizing = "border-box";
    this.element.style.margin = "0px";

    useTheme(
      () => {
        this.element.style.backgroundColor = "#222"; // dark gray
      },
      () => {
        this.element.style.backgroundColor = "#f0f0f0"; // white
      }
    );

    document.body = this.render();
  }
}

export default Body;

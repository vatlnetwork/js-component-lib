import Component from "../lib/Component.js";
import { useTheme } from "../lib/useTheme.js";

class Div extends Component {
  constructor(props) {
    const { styles, onclick, children, className, darkStyles } = props;

    super(document.createElement("div"), children);

    this.element.onclick = onclick;
    this.element.className = className;

    useTheme(
      () => {
        if (darkStyles) {
          for (const key of Object.keys(darkStyles)) {
            this.element.style[key] = darkStyles[key];
          }
        } else if (styles) {
          for (const key of Object.keys(styles)) {
            this.element.style[key] = styles[key];
          }
        }
      },
      () => {
        if (styles) {
          for (const key of Object.keys(styles)) {
            this.element.style[key] = styles[key];
          }
        }
      }
    );
  }
}

export default Div;

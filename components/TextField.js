import Component from "../lib/Component.js";
import { getCurrentTheme, useTheme } from "../lib/useTheme.js";

class TextField extends Component {
  inputId;
  label;
  defaultValue;

  /**
   *
   * @param {{inputId: string; label: string; defaultValue: string;}} props
   */
  constructor(props) {
    const { inputId, label, defaultValue } = props;

    super(document.createElement("div"));

    if (inputId != undefined && inputId != null) {
      this.inputId = inputId;
    } else {
      this.inputId = Math.random().toString();
    }

    if (label == undefined || label == null) {
      this.label = "Untitled Input";
    } else {
      this.label = label.toString();
    }

    if (defaultValue == undefined || defaultValue == null) {
      this.defaultValue = "";
    } else {
      this.defaultValue = defaultValue.toString();
    }

    this.styleContainer();
    this.buildTextField();
    this.buildLabel();

    const textField = this.element.getElementsByTagName("input")[0];

    if (this.defaultValue.length > 0) {
      textField.dispatchEvent(new Event("focusin"));
    }
  }

  styleContainer() {
    this.element.style.position = "relative";
    this.element.style.marginBottom = "20px";
  }

  buildTextField() {
    const textField = document.createElement("input");
    textField.id = this.inputId;
    textField.value = this.defaultValue;

    textField.style.border = "none";
    textField.style.padding = "8px 8px";
    textField.style.fontSize = "16px";
    textField.style.borderRadius = "5px";

    useTheme(
      () => {
        textField.style.color = "white";
        textField.style.backgroundColor = "#222";
        textField.style.outline = "1px solid lightgray";
      },
      () => {
        textField.style.color = "black";
        textField.style.backgroundColor = "#f0f0f0";
        textField.style.outline = "1px solid rgba(0, 0, 0, 0.12)";
      }
    );

    textField.addEventListener("focusin", () => {
      textField.style.outline = "2px solid #1976d2";
    });
    textField.addEventListener("focusout", () => {
      if (textField.value.length > 0) {
        return;
      }

      if (getCurrentTheme() == "dark") {
        textField.style.outline = "1px solid lightgray";
      } else {
        textField.style.outline = "1px solid rgba(0, 0, 0, 0.12)";
      }
    });

    this.element.appendChild(textField);
  }

  buildLabel() {
    const label = document.createElement("label");
    label.htmlFor = this.inputId;
    label.innerHTML = " " + this.label + " ";

    label.style.position = "absolute";
    label.style.left = "0";
    label.style.top = "8px";
    label.style.fontSize = "16px";
    label.style.transition = "all 0.3s ease";
    label.style.pointerEvents = "none";
    label.style.paddingLeft = "5px";
    label.style.paddingRight = "5px";
    label.style.marginLeft = "5px";

    useTheme(
      () => {
        label.style.backgroundColor = "#222";
        label.style.color = "lightgray";
      },
      () => {
        label.style.backgroundColor = "#f0f0f0";
        label.style.color = "rgba(0, 0, 0, 0.6)";
      }
    );

    const textField = this.element.getElementsByTagName("input")[0];

    textField.addEventListener("focusin", () => {
      label.style.top = "-10px";
      label.style.fontSize = "12px";
      label.style.color = "#1976d2";
    });
    textField.addEventListener("focusout", () => {
      if (textField.value.length > 0) {
        return;
      }

      label.style.top = "8px";
      label.style.fontSize = "16px";

      if (getCurrentTheme() == "dark") {
        label.style.color = "lightgray";
      } else {
        label.style.color = "rgba(0, 0, 0, 0.6)";
      }
    });

    this.element.appendChild(label);
  }

  get value() {
    const textField = this.element.getElementsByTagName("input")[0];
    return textField.value;
  }
}

export default TextField;

import ReactDOM from "react-dom/client";
import AppPage from "./App";

import ProjectStyle from "./index.css?inline";
import AppStyle from "./App.css?inline";

class RandomNumberPage extends HTMLElement {
  connectedCallback() {
    // this.id = "root";
    const mountPoint = document.createElement("div");
    mountPoint.id = "root";

    const shadowRoot = this.attachShadow({ mode: "open" });

    // Add styles
    const style = document.createElement("style");
    style.textContent = `
      ${ProjectStyle}
      ${AppStyle}
    `;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<AppPage />);
  }
}

customElements.define("random-number-page", RandomNumberPage);

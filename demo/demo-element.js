class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
        }
      </style>
    `;
  }
}
customElements.define('demo-element', DemoElement);

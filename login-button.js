import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class IconToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* shadow DOM styles go here */
      </style>
      <!-- shadow DOM goes here -->
    `;
  }
  constructor() {
    super();
  }
}

customElements.define('icon-toggle', IconToggle);

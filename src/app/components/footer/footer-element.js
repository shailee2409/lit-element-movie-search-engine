import { LitElement, html } from 'lit-element';
import { footerStyles } from './footer-element-styles.js';

export class FooterElement extends LitElement {
  static get styles() {
    return footerStyles;
  }

  // renders developer details
  render() {
    return html`
      <footer class="footer-container">
        Developed by Shailee Sheth
        <a
          class="git-link"
          href="https://github.com/shailee2409/lit-element-movie-search-engine.git"
          target="_blank"
          >github</a
        >
      </footer>
    `;
  }
}

customElements.define('footer-element', FooterElement);

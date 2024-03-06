import { html, css, LitElement } from 'lit';


function renderMessage(message = "Valor default") {
  return html `<p>${message}</p>`;
}
export class MyComponent extends LitElement {

  constructor() {
    super();
    this.title = 'Hola Fersi';
    this.other = 'Web component';
    this.list = ['lit', 'OpenWC','LitHtml'];
    this.isTrue = true;
    this.age = 18;
  }



  render() { //
    return html`

      <slot></slot> <!-- Se imprimen aqui arriba los slot sin nombre -->
      <h1>${this.title}</h1>

      <p>esto es un ${this.other}</p>

      <ul>
        ${this.list.map((item) => html`<li>${item}</li>`)}
      </ul>

      ${this.isTrue
      ? html `<p>Es cierto </p>`
      : html `<p>Es falso</p>`
      }

      ${this.age >= 18
      ? html `<p>Es mayor </p>`
      : html `<p>Es menor</p>`
      }
      <slot name = "my-slot"></slot> <!-- Se imprimen aqui los slot con nombre -->

      ${renderMessage()}
    `;
    }
}


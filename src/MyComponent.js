import { html, css, LitElement } from 'lit';

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
    `;
    }
}


import { html, css, LitElement } from 'lit';

export class MyComponent extends LitElement {

  constructor() {
    super();
    this.title = 'Hola Fersi';
  }



  render() { //
    return html`
    <h1>Hola todos</h1>
    <p>Esto es un componente</p>
    `;
  }
}

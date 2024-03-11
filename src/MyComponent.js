import { html, css, LitElement } from 'lit';
import { styles } from './styles';


function renderMessage(message = "Valor default") {
  return html `<p>${message}</p>`;
}

const mainColor = css `blue`; //le tenemos que poner css antes para que funcione
export class MyComponent extends LitElement {

  static get styles(){
    return [styles,
      css `
      :host{
        display: flex;
      }
      h1{
        color: red;
      }
      p{
        color: ${mainColor}
      }
      ::slotted(a) {
        text-decoration: none;
      }
    `]
  }

  constructor() {
    super();
    this.title = 'Hola Fersi';
    this.other = 'Web component';
    this.list = ['lit', 'OpenWC','LitHtml'];
    this.isTrue = true;
    this.age = 18;
  }

  firstUpdated(){
    console.log("isTrue",this.isTrue)
  }



  render() { 
    return html`

      
      <h1>${this.title}</h1>

      <p>esto es un ${this.other}</p>

      <ul>
        ${this.list.map((item) => html`<li>${item}</li>`)}
      </ul>


      <slot name = "my-titulo"></slot> 
      <slot name = "my-enlace"></slot> 
      ${this.isTrue
      ? html `<p>Es cierto </p>`
      : html `<p>Es falso</p>`
      }

      ${this.age >= 18
      ? html `<p>Es mayor </p>`
      : html `<p>Es menor</p>`
      }
      <slot name = "my-slot"></slot> <!-- Se imprimen aqui los slot con nombre -->
      <slot></slot> <!-- Se imprimen aqui arriba los slot sin nombre -->
      ${renderMessage()}
    `;
    }
}


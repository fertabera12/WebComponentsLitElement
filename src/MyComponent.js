import { html, css, LitElement } from 'lit';
import { styles } from './styles';


function renderMessage(message = "Valor default") {
  return html `<p>${message}</p>`;
}

const mainColor = css `blue`; //le tenemos que poner css antes para que funcione
export class MyComponent extends LitElement {

  //Los estilos que se definen en el componente no se pueden pisar a menos que esten en el DOM
  static get styles(){
    return [styles,
      css `
      :host{
        display: flex;
      }
      h1{
        color: red;
      }
      p {
        color:var(--p-color, orange); 
      }
      ::slotted(a) {
        text-decoration: none;
      }
    `]
  }


  //Esto define una propiedad llamada title que es de tipo String. La opción reflect: true significa que si cambia el valor de la propiedad en JavaScript, también se reflejará en el atributo HTML correspondiente. attribute: false significa que esta propiedad no se puede configurar desde el HTML.
  static get properties (){
    return {
      title: {type: String, reflect: true, attribute: false},
      age: {type: number},
    }
  }

  //Buena practica inicializar las propiedades en el contructor

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


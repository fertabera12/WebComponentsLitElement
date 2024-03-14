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

  static get properties(){
    return{
      title:{type:String, Reflect:true, attribute: 'my-title'},
      age: {type: Number},
      pagination: {reflect: true, converter: {
        toAttribute(value){
          return value ? 'yes' : 'no';
        },
        fromAttribute(value){
          return value == 'yes';
        }
      }}
    }
  }


  constructor() {
    super();
    this.title = 'Hola Fersi';
    this.other = 'Web component';
    this.list = ['lit', 'OpenWC','LitHtml'];
    this.isTrue = true;
    this.age = 18;
    this.pagination = true;
  }

  connectedCallback(){
    super.connectedCallback();
    console.log ('connectedCallback Ejecutado');
    this.addEventListener('another-event', ( ) => console.log('evento lanzado!!!'))
  }

  disconnectedCallback(){
    this.removeEventListener('another-event');
    super.disconnectedCallback();
  }

  firstUpdated(){
    console.log("isTrue",this.isTrue)
  }

  //manejadores de eventos directamente en tu plantilla HTML utilizando la sintaxis @eventname=${handler}.

  render() { 
    return html`
     
      <h1 @click=${this.handleClick}>${this.title}</h1> 
     

      <p @click =${this.handleEvent}>Edad: ${this.age}</p>

      <p>Pagination: ${this.pagination}</p>

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
      
      <p>Registra un evento de cambio cuando escribes y despues cliequeas fuera</p>
      <input type="text" @change=${(value)=> console.log('Cambiado',value)}/> 
      <p>Registra cada caracter un evento de cambio cuando escribes</p>
      <input type="text" @input=${(value)=> console.log('Cambiado',EventTarget)}/> 
    `;
    }

    handleClick(){

      const event = new CustomEvent ('my-event', {
        detail: {
          message: 'Mensaje para Custom Event'
        },
        bubble:true,
        compored: true
      });

      this.dispatchEvent(event);
    }

    handleEvent(){
      const event = new CustomEvent ('another-event');
      this.dispatchEvent(event);
    }
}


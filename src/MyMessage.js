import {html, LitElement} from 'lit';

export class MyMessage extends LitElement{
    render(){
        return html `
        <p>Mi Mensaje</p>
        `;
    }
}

customElements.define('my-message', MyMessage);
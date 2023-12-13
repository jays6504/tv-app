// import stuff
import { LitElement, html, css } from 'lit';

export class TvChannel extends LitElement {
  // defaults
  constructor() {
    super();
    this.title = '';
    this.presenter = '';
    this.description = '';
    this.video= '';
    this.vidlength = '';
    this.premiertime = '';
  }
  // convention I enjoy using to define the tag's name
  static get tag() {
    return 'tv-channel';
  }
  // LitElement convention so we update render() when values change
  static get properties() {
    return {
      title: { type: String },
      description: {type: String},
      presenter: { type: String },
      video: {type: String},
      vidlength: {type: String},
      premiertime: {type: String}
    };
  }
  // LitElement convention for applying styles JUST to our element
  static get styles() {
    return css`
      :host {
        text-rendering: optimizeLegibility;
        box-sizing: fit-content;
        display: inline-block;
        line-height: 1.2;
        font-size: 1em;
        font-weight: 400;
        min-width: 500px;
        margin: 0;
        padding: 0;
        transition: all 0.25s ease-in-out;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .wrapper {
        margin: .5rem;
        padding: .5rem;
        padding-left: 16px;
        padding-right: 16px;
        border-radius: 6px;
        border-color: #4a4a4a;
        box-shadow: 0px 0px 0px 1px #dbdbdb;
        background-color: #ffffff;
      }
      p {
        font-size: 12px;
      }
      .title,
      .time{
        display: inline-block;
      }
      
      .premierwrapper {
        display: block;
        background-color: #000000;
        color: #ffffff;
        border: 10px solid #000000;
        border-radius: 6px;
        margin-right: 10px;
      }

      .lengthwrapper {
        display: block;
        background-color: #ffffff;
        color: #000000;
        border: 10px solid #ffffff;
        border-radius: 6px;
        margin-right: 10px;
      }

    `;
  }
  // LitElement rendering template of your element
  render() {
    return html`
      <div class="wrapper">
        <div class="time">
          <div class="premierwrapper">
            <span class="premier">${this.premiertime}</span>
          </div>
          <div class="lengthwrapper">
            <span class="length">${this.vidlength}</span>
          </div>
        </div>
        <div class="title">
          <h4>${this.title}</h4>
          <p>${this.description}</p>
        </div>
        <slot></slot>
      </div>  
      `;
  }
}
// tell the browser about our tag and class it should run when it sees it
customElements.define(TvChannel.tag, TvChannel);
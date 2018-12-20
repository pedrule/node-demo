import { html, PolymerElement } from "@polymer/polymer/polymer-element";
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';

export class SvgBase extends PolymerElement {
    static get properties() {
        return{
            size: {
                type: Number
            },
            family: {
                type: String,

            }
        }
        
    }

    static get template() {
        return html`
        <iron-iconset-svg name="[[family]]" size="[[size]]">
            ${this.svgTemplate}
        </iron-iconset-svg>
        <!-- <iron-icon icon="my-icons:clin" ></iron-icon> -->
        
        `
    }

    static get svgTemplate() {
        return html`
        <div></div>
        
        `
    }
} 
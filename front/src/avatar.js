import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/iron-flex-layout/iron-flex-layout-classes';
import '@polymer/paper-toast/paper-toast';
import '@polymer/iron-icon/iron-icon.js';

import { SvgMixin } from "./svgMiwin";

export class Avatar extends SvgMixin(PolymerElement) {
    static get properties() {
        return {
            color: {
                type: String,
                value: 'green',
                observer: 'onColorChanged'
            },

            name: {
                type: String,
                value: "guest"
            },

            message: {
                type: String,
                observer: 'messageChanged'
            },

            type: {
                type: String,
                value: 'my-icons9:smiley',
            }
        }
    }
    static get template() {
        return html`
        <style include="iron-flex iron-flex-alignment">
            :host{
                min-width: 150px;
                min-height:150px;
                @apply --layout-vertical;
            }

            iron-icon{
                width: 100%;
                @apply --layout-flex;
            }

            #name{
                padding: 5px;
                font-weight: bolder;
                font-family: sans-serif;
                text-transform: uppercase;
                font-style: italic;
                height: 30px;
                font-stretch: condensed;
                color: #837f7f;
                font-size: xx-large;
            }
        </style>

        <div id="name" class="layout vertical center-center">[[name]]</div>
        ${this.svgTemplate}
        <iron-icon id="avatar" icon="[[onChangeType(type)]]" role="img" aria-label="A shape" class="flex"></iron-icon>
        <paper-toast id="toast" class="fit-bottom" text=""></paper-toast>
        `;
    }
    
    connectedCallback() {
        super.connectedCallback();
        this.$.toast.fitInto = this;
    }

    onColorChanged(arg) {
        this.$.avatar.style.color = arg;
    }

    messageChanged(arg) {
        this.$.toast.text = arg;
        this.$.toast.open();
    }

    onChangeType(arg) {
        return arg;
    }
}
customElements.define('demo-avatar', Avatar);
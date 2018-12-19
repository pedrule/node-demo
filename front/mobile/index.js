import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/iron-flex-layout/iron-flex-layout-classes';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-input/paper-input';

export class DemoMobile extends PolymerElement {
    static get properties() {
        return {
            socket: {
                type: Object,
                observer: '_onSocketChanged'
            },
            name: {
                type: String,
            },
            disabled: {
                type: Boolean,
                computed: 'setDisabled(name)',
                reflectToAttribute: true
            },
            message: {
                type: String
            }
        }
    }

    static get template() {
        return html`
        <style include="iron-flex iron-flex-alignment iron-flex-factors">
            :host{
                height: 100vh;
                @apply --layout-horizontal;
            }
            #message{
                @apply --layout-flex;
            }
            paper-button {
                background: var(--paper-yellow-200);
                margin-left: 24px;

            }
            #container {
                padding-bottom: 62px;
                background: var(--paper-grey-100);
            }

            @media screen and (max-width: 640px) {
                :host{
                    @apply --layout-vertical;
                }
            }
        </style>
        <div id="message" class="flex-2 layout horizontal center-center">
            <paper-input value="{{message}}"></paper-input>
            <paper-button on-tap="onValidateMessage">validate</paper-button>
        </div>
        <div class="layout vertical center end-justified" id="container">
            <paper-input placeholder="Please enter your name or pseudo" value="{{name}}"></paper-input>
            <paper-button disabled="[[disabled]]" on-tap="onTap">Connect</paper-button>
        </div>
        `
    }

    constructor() {
        super();
        this.socket = io();
    }

    _onSocketChanged(arg) {
        // this.socket.emit('message', 'this is a message from a new client');
    }

    onValidateMessage(event) {
        if(!!this.message)this.socket.emit('message', this.message);
        this.message = "";
    }

    setDisabled(name) {
        return !!!name;
    }

    onTap(event) {
        console.log(event);
        this.socket.emit('newUserName', this.name);
    }
}
customElements.define('demo-mobile', DemoMobile);
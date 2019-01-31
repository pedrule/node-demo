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
                /* margin-left: 24px; */
                width: 150px;
                margin: 10px;

            }
            #container {
                padding-bottom: 62px;
                background: var(--paper-grey-100);
            }

            @media screen and (max-width: 640px) {
                :host{
                    @apply --layout-vertical;
                    width: 100%
                }
            }
        </style>
        <div on-tap="avatarChange" class="layout horizontal wrap">
            <paper-button id="my-icons8:pensif" disabled="[[disabled]]" >Pensif</paper-button>
            <paper-button id="my-icons5:happy" disabled="[[disabled]]" >Happy</paper-button>
            <paper-button id="my-icons6:nohappy" disabled="[[disabled]]" >No Happy</paper-button>
            <!-- <paper-button id="my-icons7:panic" disabled="[[disabled]]" >Panic</paper-button> -->
            <paper-button id="my-icons1:clin" disabled="[[disabled]]" >Clin d'oeil</paper-button>
            <paper-button id="my-icons3:confused" disabled="[[disabled]]" >Confus</paper-button>
            <paper-button id="my-icons4:devil" disabled="[[disabled]]" >Diablotin</paper-button>
            <paper-button id="my-icons9:smiley" disabled="[[disabled]]" >Smiley</paper-button>
            <paper-button id="my-icons2:angel" disabled="[[disabled]]" >Ange</paper-button>
            <paper-button id="my-icons10:poule" disabled="[[disabled]]" >Poule</paper-button>
        </div>
        <div id="message" class="flex-2 layout horizontal center-center">
            <paper-input value="{{message}}" placeholder="your message"></paper-input>
            <paper-button on-tap="onValidateMessage" >validate</paper-button>
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

    avatarChange(event) {
        this.socket.emit('avatar-change', event.target.id);
    }
}
customElements.define('demo-mobile', DemoMobile);
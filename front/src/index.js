import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/iron-flex-layout/iron-flex-layout-classes';

import './avatar';

export class DemoApp extends PolymerElement {
    static get properties() {
        return {
            socket: {
                type: Object,
                observer: '_onSocketChanged'
            }
        }
    }

    static get template() {
        return html`
            <style include="iron-flex iron-flex-alignment">
                :host{
                    background: #cecaca;
                    border-radius: 12px;
                    border: grey solid thin;
                    margin: 12px;
                    @apply --layout-fit;
                    @apply --layout-horizontal;
                }

                demo-avatar{
                    margin: 32px;
                    width: 150px;
                    height: 150px;
                }
            </style>
            <div class="flex layout horizontal" id="container">
            </div>
        `
    }

    constructor() {
        super();
        this.socket = io();
    }

    _onSocketChanged(arg) {
        this.socket.on('new-user', (data) => this.addNewUser(data));
        this.socket.on('remove-user', (data) => this.removeUser(data));
        this.socket.on('message', (data) => this.transmitMessage(data));
    }

    addNewUser(data) {
        if(!data.name || !data.id) return;
        const el = this.retrieveUserOrCreate(data);
        el.name = data.name;
        el.socketId = data.id;
    }

    removeUser(data) {
        const user = this.retrieveUser(data);
        if(user) this.$.container.removeChild(user);
    }

    retrieveUser(id) {
        return Array.prototype.reduce.call(this.$.container.querySelectorAll('demo-avatar'),(prev, avatar) => avatar.socketId === id ? avatar : prev, false);
    }

    transmitMessage(data) {
        const { message, id } = data;
        const avatar = this.retrieveUser(id);
        if(avatar)avatar.message = message;
    }

    retrieveUserOrCreate(data) {
        const { id } = data;
        let el = this.retrieveUser(id);
        if(!el) {
            el = document.createElement('demo-avatar');
            this.$.container.appendChild(el);
        } 
        return el;
    }
}
customElements.define('demo-app', DemoApp);
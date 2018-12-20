import { SvgBase } from "./SvgBaseClass";
import { html } from "@polymer/polymer/polymer-element";


export class NoHappyAvatar extends SvgBase {
    static get svgTemplate() {
        return html`
        <svg id="nohappy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48 " ><defs><linearGradient id="grad0" gradientUnits="userSpaceOnUse" y1="653.96" x2="0" y2="301.3"><stop offset="0" stop-color="#c52828"/><stop offset="1" stop-color="#ff5454"/></linearGradient></defs><g transform="matrix(2.87497 0 0 2.87497-7.921-2972.05)" fill="#fff" fill-opacity=".851" enable-background="new"><circle cx="-325.89" cy="478.75" r="173.45" transform="matrix(.04813 0 0 .04813 26.788 1019.08)" fill="url(#grad0)" fill-opacity="1"/><g fill="#fff" fill-opacity=".851"><path d="m7.179 1039.23c0-.646.524-1.169 1.169-1.169.645 0 1.169.524 1.169 1.169 0 .646-.524 1.17-1.169 1.17-.646 0-1.169-.524-1.169-1.17m5.302 0c0-.646.524-1.169 1.17-1.169.645 0 1.169.524 1.169 1.169 0 .646-.523 1.17-1.169 1.17-.646 0-1.17-.524-1.17-1.17"/><path d="m15.335 1045.27c-.725-1.676-2.422-2.759-4.323-2.759-1.943 0-3.65 1.088-4.349 2.773-.12.288.017.62.305.739.071.029.144.043.217.043.222 0 .432-.131.523-.349.524-1.261 1.821-2.075 3.304-2.075 1.45 0 2.74.815 3.285 2.076.124.287.457.419.744.295.287-.124.419-.457.295-.744"/></g></g></svg>
        `
    }

    constructor() {
        super();
        this.size = 48;
    }
}
customElements.define('avatar-nohappy', NoHappyAvatar);
            
import { html } from "@polymer/polymer/polymer-element";
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import './svgs/angel';
import './svgs/clin';
import './svgs/confused';
import './svgs/devil';
import './svgs/happy';
import './svgs/noHappy';
import './svgs/panic';
import './svgs/pensif';
import './svgs/smiley';

export const SvgMixin = Superclass => class extends Superclass {
    static get svgTemplate() {
        return html`    
        <avatar-clin       family="my-icons1" ></avatar-clin>
        <avatar-angel      family="my-icons2" ></avatar-angel>
        <avatar-confused   family="my-icons3" ></avatar-confused>
        <avatar-devil      family="my-icons4" ></avatar-devil>
        <avatar-happy      family="my-icons5" ></avatar-happy>
        <avatar-nohappy    family="my-icons6" ></avatar-nohappy>
        <avatar-panic      family="my-icons7" ></avatar-panic>
        <avatar-pensif     family="my-icons8" ></avatar-pensif>
        <avatar-smiley     family="my-icons9" ></avatar-smiley>
        `
    }
}
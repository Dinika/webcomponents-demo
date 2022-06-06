import { TemplateRenderer } from './template-renderer.js';

class WorkThumbnail extends TemplateRenderer {
    constructor() {
        super();

        this.name = 'HelpAlarm';
        this.role = 'Developer';
    }

    static get observedAttributes() {
        return ['name', 'role'];
    }

    attributeChangedCallback(attrName) {
        if (attrName === 'name' || attrName === 'role') {
            this.render();
        }
    }

    get template() {
        return `
            <style>
                :host {
                    background: var(--primary-300);
                    border-radius: 12px;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    width: 194px;
                    height: 194px;
                    justify-content: center;
                    padding-left: 24px;
                    box-sizing: border-box;
                }

                h3, p {
                    font-family: 'Quicksand', sans-serif;;
                    letter-spacing: 0em;
                    margin: 0;
                }

                h3 {
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 25px;
                    margin-bottom: 4px;
                }
            
                p {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 23px;
                }
                
            
            </style>
            <h3>${this.name}</h3>
            <p>${this.role}</p>
        `
    }

    set name(val) {
        !!val ? this.setAttribute('name', val) : this.removeAttribute('name', val);
    }

    get name() {
        return this.getAttribute('name');
    }


    set role(val) {
        !!val ? this.setAttribute('role', val) : this.removeAttribute('role', val);
    }

    get role() {
        return this.getAttribute('role');
    }


}

customElements.define('work-thumbnail', WorkThumbnail);
import { TemplateRenderer } from './template-renderer.js';

class WorkThumbnail extends TemplateRenderer {
    constructor() {
        console.log('WorkThumbnail constructor');

        super();
    }

    static get observedAttributes() {
        return ['project'];
    }

    attributeChangedCallback(attrName, newValue) {
        console.log('WorkThumbnail attribute change callback', attrName);
        if (attrName === 'project') {
            this.project = JSON.parse(decodeURIComponent(newValue));
            this.removeAttribute('project');
        }
        this.render();
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
            ${this.project
                ? `
                    <h3>${this.project.name}</h3>
                    <p>${this.project.role}</p>`
                : ''
            }
        `
    }

}

customElements.define('work-thumbnail', WorkThumbnail);
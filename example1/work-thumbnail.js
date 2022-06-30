import { TemplateRenderer } from './template-renderer.js';

class WorkThumbnail extends TemplateRenderer {

    static get observedAttributes() {
        return ['project'];
    }

    attributeChangedCallback(attrName, newValue) {
        if (attrName === 'project') {
            this.project = JSON.parse(decodeURIComponent(newValue));
            this.removeAttribute('project');
        }
        this.render();
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('openDialog', { bubbles: true, composed: true }))
        })
    }

    get template() {
        return `
            <style>
                .parent {
                    position: relative;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    width: 194px;
                    height: 194px;
                    justify-content: center;
                    padding-left: 24px;
                    box-sizing: border-box;
                    margin: 60px 68px;
                    cursor: pointer;
                }

                .parent::before {
                    content: "";
                    background: var(--primary-300);
                    position: absolute;
                    width: 194px;
                    height: 194px;
                    z-index: -1;
                    left: 0px;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                }

                .parent:hover::before {
                    transform: scale(1.5);
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
                <div class="parent">    
                    <h3>${this.project.name}</h3>
                    <p>${this.project.role}</p>
                </div>
                    `
                : ''
            }
        `
    }

}

customElements.define('work-thumbnail', WorkThumbnail);
import { TemplateRenderer } from './template-renderer.js';

class WorkDialog extends TemplateRenderer {

    open() {
        this.shadowRoot.querySelector('dialog').showModal();
        this.addEventListener('click', () => this.shadowRoot.querySelector('dialog').close());
    }

    get template() {
        return `
            <style>
                dialog {
                    min-width: 50rem;
                    border-radius: 8px;
                    min-height: 30rem;    
                }

                dialog::backdrop {
                    background: rgba(0,0,0,0.8)
                }

            </style>
            
            <dialog>Suck this</dialog>
        `
    }

}

customElements.define('work-dialog', WorkDialog);
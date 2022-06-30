import { TemplateRenderer } from './template-renderer.js';

class WorkSection extends TemplateRenderer {

    connectedCallback() {
        super.connectedCallback();
        this.shadowRoot.querySelector('slot').addEventListener('slotchange', e => this.animate());
    }

    animate() {
        const workThumbnails = [...this.querySelectorAll('work-thumbnail')];
        workThumbnails.map((thumbnail, index) => {
            const animation = thumbnail.animate({
                opacity: [0, 1],
                transform: ['scale(0.8)', 'scale(1)']
            }, {
                duration: 150,
                iterations: 1,
                delay: 50 * index
            });

            animation.onfinish = () => thumbnail.style.opacity = 1;
        });
    }

    get template() {
        return `
            <style>
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                }
            </style>
            
            <slot></slot>
        `
    }

}

customElements.define('work-section', WorkSection);

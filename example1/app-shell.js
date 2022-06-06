import { TemplateRenderer } from './template-renderer.js';
import './work-thumbnail.js';

class AppShell extends TemplateRenderer {
    constructor() {
        super();
        this.noShadow = true;

    }

    get template() {
        return `
            <work-thumbnail></work-thumbnail>
        `
    }

}

customElements.define('app-shell', AppShell);

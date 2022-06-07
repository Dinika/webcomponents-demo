import { TemplateRenderer } from './template-renderer.js';
import './work-thumbnail.js';

const projects = [
    {
        name: 'WRAP',
        role: 'Developer',
        description: 'A figma like app that allows users to design dashboards that can subscribe to several devices in LHC',
        link: ''
    },
    {
        name: 'HelpAlarm',
        role: 'Lead Developer',
        description: 'Application used at the CCC to observe and manage alarms around CERN',
        link: ''
    },
    {
        name: 'ACW',
        role: 'Developer',
        description: 'Java and JS framework used to power all GUI applications in our section',
        link: ''
    },
    {
        name: 'TI Logbook',
        role: 'Tech Lead',
        description: 'Applications used by operators to manage and log events, work-orders, calls around the LHC',
        link: ''
    },
    {
        name: 'LHC Checklist',
        role: 'Developer',
        description: 'Used to test machine before the start of the LHC runs.',
        link: ''
    }
];

class AppShell extends TemplateRenderer {
    constructor() {
        super();
        this.noShadow = true;
    }

    str = projects.map(p => `
        <work-thumbnail project="${encodeURIComponent(JSON.stringify(p))}"></work-thumbnail>
    `);

    get template() {
        return this.str;
    }

}

customElements.define('app-shell', AppShell);

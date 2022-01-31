import { TemplateResult } from 'lit';
export declare function createTestElement(template?: TemplateResult): Promise<HTMLElement>;
export declare function removeTestElement(element: HTMLElement): void;
export declare function getComponentSlotContent(component: HTMLElement): {
    [name: string]: string;
};
export declare function componentIsStable(component: any): Promise<any>;
export declare function emulatedClick(component: HTMLElement): void;
/** helpful for capturing a single event in a async test rather than Jasmine `done()` */
export declare function onceEvent(element: HTMLElement, event: string): Promise<any>;

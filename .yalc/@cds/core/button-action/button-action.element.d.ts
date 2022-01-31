import { PropertyValues } from 'lit';
import { CdsBaseButton } from '@cds/core/internal';
/**
 * Action Button
 *
 * ```typescript
 * import '@cds/core/button-action/register.js';
 * ```
 *
 * ```html
 * <cds-button-action></cds-button-action>
 * ```
 * @beta
 * @element cds-button-action
 * @slot - For projecting text content or cds-icon
 * @cssprop --icon-width
 * @cssprop --icon-height
 * @cssprop --width
 * @cssprop --height
 * @cssprop --cursor
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --background
 * @cssprop --padding
 * @cssprop --outline
 * @cssprop --outline-offset
 */
export declare class CdsButtonAction extends CdsBaseButton {
    shape: string;
    action: string;
    i18n: {
        [key: string]: string | undefined;
    };
    protected cdsButtonAction: boolean;
    static styles: import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    updated(props: PropertyValues): void;
}

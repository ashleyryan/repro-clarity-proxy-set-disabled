import { CdsControl } from '@cds/core/forms';
/**
 * Time Input
 *
 * ```typescript
 * import '@cds/core/file/register.js';
 * ```
 *
 * ```html
 * <cds-file>
 *   <label>file</label>
 *   <input type="file" />
 * </cds-file>
 * ```
 *
 * @element cds-file
 * @slot - For projecting file input and label
 */
export declare class CdsFile extends CdsControl {
    i18n: {
        browse: string;
        files: string;
        removeFile: string;
    };
    private buttonLabel;
    protected fixedControlWidth: boolean;
    protected supportsPrefixSuffixActions: boolean;
    static get styles(): import("lit").CSSResultGroup[];
    protected get inputTemplate(): import("lit-html").TemplateResult<1>;
    protected get clearFilesControlTemplate(): import("lit-html").TemplateResult<1>;
    firstUpdated(props: Map<string, any>): void;
    /** @private */
    clearFiles(fireEvent?: boolean): void;
    /** @private */
    updateLabelAndFocus(files?: FileList): void;
}

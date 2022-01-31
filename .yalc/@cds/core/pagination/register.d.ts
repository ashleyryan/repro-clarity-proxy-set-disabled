import '@cds/core/button/register.js';
import '@cds/core/icon/register.js';
import '@cds/core/input/register.js';
import { CdsPaginationButton } from './pagination-button.element.js';
import { CdsPagination } from './pagination.element.js';
declare global {
    interface HTMLElementTagNameMap {
        'cds-pagination': CdsPagination;
        'cds-pagination-button': CdsPaginationButton;
    }
}

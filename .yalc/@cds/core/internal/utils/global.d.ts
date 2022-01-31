import { FeatureSupportMatrix } from './supports.js';
import { MotionRegistry } from '../motion/interfaces.js';
export interface CDSGlobal {
    _version: string[];
    _react: {
        version: string;
    };
    _supports: FeatureSupportMatrix;
    _isStateProxied: boolean;
    _state: Readonly<CDSState>;
    getDetails: () => any;
    logDetails: () => void;
    environment: {
        /** Set to true for production env to disable dev time logging and tooling */
        production: boolean;
    };
}
export interface CDSState {
    focusTrapItems: Readonly<{
        focusTrapId: string;
    }[]>;
    i18nRegistry: Readonly<Record<string, unknown>>;
    elementRegistry: Readonly<{
        [key: string]: any;
    }>;
    iconRegistry: Readonly<Record<string, unknown>>;
    motionRegistry: Readonly<MotionRegistry>;
}
declare global {
    interface Window {
        CDS: CDSGlobal;
    }
}
export declare function setupCDSGlobal(): void;

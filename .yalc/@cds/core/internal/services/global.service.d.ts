import { CDSState } from '../utils/global.js';
export declare class GlobalStateService {
    static stateUpdates: import("../utils/event-subject.js").EventObservable<any>;
    static get state(): CDSState;
    static getValue(key: keyof CDSState): readonly {
        focusTrapId: string;
    }[] | Readonly<Record<string, unknown>> | Readonly<{
        [key: string]: any;
    }> | Readonly<import("@cds/core/internal").MotionRegistry>;
    static setValue(key: keyof CDSState, val: CDSState[keyof CDSState]): void;
    static log(): void;
}

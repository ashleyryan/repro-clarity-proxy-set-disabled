import { ReactiveElement } from 'lit';
import { EventEmitter } from '../decorators/event';
export declare enum AnimationStatus {
    ready = "ready",
    active = "active",
    start = "starting",
    end = "done"
}
export declare const CLARITY_MOTION_ENTER_LEAVE_PROPERTY = "hidden";
export declare const CLARITY_MOTION_REVERSE_ANIMATION_LABEL = "reverse";
export declare const CLARITY_MOTION_REVERSE_ANIMATION_SUFFIX: string;
export declare const CLARITY_MOTION_FALLBACK_DURATION_IN_MS = 300;
export declare const CLARITY_MOTION_FALLBACK_EASING = "linear";
export declare const PRIVATE_ANIMATION_STATUS_ATTR_NAME = "_cds-animation-status";
export declare type AnimationOptions = {
    [key: string]: string | number;
};
export declare type AnimationKeyframes = Keyframe[] | PropertyIndexedKeyframes;
export interface TargetedAnimation {
    target?: string;
    onlyIf?: string;
    animation: AnimationKeyframes;
    options?: KeyframeAnimationOptions;
    playback?: {
        reverse?: boolean;
    };
}
export interface TargetedAnimationByPropertyValue {
    [key: string]: string;
}
export declare type TargetedAnimationAsPropertyTuple = [string, TargetedAnimationByPropertyValue];
export interface PropertyDrivenAnimation {
    [key: string]: TargetedAnimationByPropertyValue;
}
export interface AnimationConfig {
    [key: string]: TargetedAnimation[];
}
export interface MotionRegistry {
    [key: string]: TargetedAnimation[];
}
export declare type AnimatableElement = ReactiveElement & {
    cdsMotion: string;
    cdsMotionChange: EventEmitter<string>;
    _animations?: PropertyDrivenAnimation;
    '_cds-animation-status'?: string;
};

import { AnimatableElement, PropertyDrivenAnimation } from '../motion/interfaces.js';
export declare function animate(config: PropertyDrivenAnimation): <T extends new (...args: any[]) => AnimatableElement>(constructor: T) => T;

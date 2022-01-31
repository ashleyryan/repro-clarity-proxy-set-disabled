import { AnimatableElement, AnimationKeyframes, PropertyDrivenAnimation, TargetedAnimation, TargetedAnimationAsPropertyTuple } from './interfaces.js';
/**
 * runPropertyAnimations() is a utility function called by the @animate(). It is a single point of entry
 * to execute the property-driven animations found in components like the accordion and overlay.
 *
 * Other utilities here are exported to break up the unit tests covering the animation/motion
 * library. While they could be called or used in isolation, it is not recommended for most use cases.
 *
 * runPropertyAnimations returns a boolean so that we know if it ran successfully or not. This is
 * mostly to make testing the function easier.
 *
 * @internal
 */
export declare function runPropertyAnimations(props: Map<string, any>, hostEl: AnimatableElement): Promise<boolean>;
export declare function setAnimationStartStatus(animatedPropertyValueAsString: string, hostEl: AnimatableElement): void;
export declare function resolveAnimationEndStatus(animatedPropertyValueAsString: string, hostEl: AnimatableElement): void;
export declare function setAnimationConfigOptions(motionName: string, motionForMyValue: TargetedAnimation[], hostEl: AnimatableElement): TargetedAnimation[];
export declare function getAnimationPromiseInstructions(animatedPropertyValueAsString: string, motionConfigs: TargetedAnimation[], hostEl: AnimatableElement): Promise<unknown>[];
export declare function getAnimationTarget(hostEl: HTMLElement, targetSelector?: string): Element;
export declare function getAnimationKeyframesOrPropertyIndexedFrames(animationConfig: AnimationKeyframes | PropertyIndexedKeyframes, hostEl: HTMLElement): AnimationKeyframes | PropertyIndexedKeyframes;
export declare function animationIsReversed(nameOfAnimation: string): boolean;
export declare function reverseAnimationConfig(config: TargetedAnimation[]): TargetedAnimation[];
export declare function reverseAnimation(animationName: string): string;
export declare function getInlineOverride(cdsMotionValue: string, propName: string, propValue: string): string;
export declare function extractAnimationNameIfReversed(name: string): string;
export declare function getAnimationFromOverrideOrDecorator(decoratorValue: string, overrideValue?: string): string;
export declare function getAnimationConfigForPropertyValue(nameOfAnimationFromObject: string, cdsMotionOverride?: string): [string, TargetedAnimation[]];
export declare function setAnimationDuration(config: TargetedAnimation[], hostEl: AnimatableElement): TargetedAnimation[];
export declare function setAnimationEasing(config: TargetedAnimation[], hostEl: AnimatableElement): TargetedAnimation[];
export declare function zeroOutAnimationConfig(config: TargetedAnimation[]): TargetedAnimation[];
export declare function setAnimationProperty(propertyName: string, hostEl: AnimatableElement, config: TargetedAnimation[], staticFallback: string | number, valueConverter?: (arg: string) => string | number): TargetedAnimation[];
export declare function sizeDimensionKeyframes(animationKeyframes: AnimationKeyframes, hostEl: HTMLElement): AnimationKeyframes;
export declare function filterAnimationsByUpdatedProperties(animations: PropertyDrivenAnimation, updatingProps: Map<string, any>): PropertyDrivenAnimation | null;
declare type TupleOfHiddenAndOtherAnimations = [TargetedAnimationAsPropertyTuple[], TargetedAnimationAsPropertyTuple[]];
export declare function flattenAndSortAnimations(hiddenAndNotAnimationTuple: TupleOfHiddenAndOtherAnimations, isHiding: boolean): TargetedAnimationAsPropertyTuple[];
export declare function getHidingAndNonHidingPropertyAnimations(animations: PropertyDrivenAnimation): [TargetedAnimationAsPropertyTuple[], TargetedAnimationAsPropertyTuple[]];
export declare function getPropertyAnimations(animations: PropertyDrivenAnimation, updatingProps: Map<string, any>): TargetedAnimationAsPropertyTuple[];
export {};

/**
 * @author WMXPY
 * @namespace Lazy
 * @description Lazy
 */

import { LazyValueFunction, LazyValueGetter } from "./declare";

export const EmptySymbol = Symbol('sudoo-lazy-empty');

export const lazy = <T extends any = any>(func: LazyValueFunction<T>): LazyValueGetter<T> => {

    let cache: T | typeof EmptySymbol = EmptySymbol;

    return () => {

        if (cache !== EmptySymbol) {
            return cache;
        }

        const value: T = func();
        cache = value;

        return value;
    };
};

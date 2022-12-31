interface Mods {
    [key: string]: any;
}
/**
 *
 * @param {Mods} mods
 * @returns {string[]}
 * @note This is assumed to be placed into a call to classNames.
 *
 */
export declare const generateMods: (mods: Mods) => "" | string[];
export declare const smoothScrollTo: (elementId: string) => void;
export {};

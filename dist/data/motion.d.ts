import type { Variant } from "framer-motion";
export interface Variants {
    hidden: Variant;
    visible: Variant;
    exit?: Variant;
}
export declare const variants: {
    readonly fade: {
        readonly default: {
            readonly hidden: {
                readonly opacity: 0;
            };
            readonly visible: {
                readonly opacity: 1;
            };
        };
        readonly in: {
            readonly up: {
                readonly hidden: {
                    readonly opacity: 0;
                    readonly y: 16;
                };
                readonly visible: {
                    readonly opacity: 1;
                    readonly y: 0;
                };
            };
            readonly right: {
                readonly hidden: {
                    readonly opacity: 0;
                    readonly x: -16;
                };
                readonly visible: {
                    readonly opacity: 1;
                    readonly x: 0;
                };
            };
        };
    };
    readonly scale: {
        readonly full: {
            readonly hidden: {
                readonly opacity: 0;
                readonly scale: 0;
            };
            readonly visible: {
                readonly opacity: 1;
                readonly scale: 1;
            };
        };
        readonly half: {
            readonly hidden: {
                readonly opacity: 0;
                readonly scale: 0.5;
            };
            readonly visible: {
                readonly opacity: 1;
                readonly scale: 1;
            };
        };
        readonly partial: {
            readonly hidden: {
                readonly opacity: 0;
                readonly scale: 0.85;
            };
            readonly visible: {
                readonly opacity: 1;
                readonly scale: 1;
            };
        };
        readonly subtle: {
            readonly hidden: {
                readonly opacity: 0;
                readonly scale: 0.95;
            };
            readonly visible: {
                readonly opacity: 1;
                readonly scale: 1;
            };
        };
    };
    readonly ui: {
        readonly menu: {};
    };
};
export declare const transition: {
    readonly tween: (duration?: number, delay?: number) => {
        type: string;
        duration: number;
        delay: number;
    };
    readonly spring: (duration: number | undefined, delay: number | undefined, { stiffness, damping }: {
        stiffness?: number | undefined;
        damping?: number | undefined;
    }) => {
        type: string;
        duration: number;
        delay: number;
        stiffness: number;
        damping: number;
    };
    readonly ui: {
        readonly menu: {
            readonly type: "spring";
            readonly duration: 0.3;
        };
    };
};
export declare const spring: {
    smooth: {
        stiffness: number;
        damping: number;
    };
    smoother: {
        stiffness: number;
        damping: number;
    };
    smoothest: {
        stiffness: number;
        damping: number;
    };
};

# Hydra

A multi-headed component library for React.

## Development Documentation

In Hydra, components are separate from their styles. This allows us to use the same components in different contexts, and to use the same styles in different contexts. Hydra is not a headless component library, but a multi-headed one (thus the name).

### Customizing

Hydra is built with customization in mind. There are a number of ways to customize Hydra. They range from one-off customizations on a per-component basis to full-on custom builds.

#### Global Customization

TBD

#### Customizing Individual Components

Although the styles are all global, Hydra's component styles are scoped, so there are really only a few top-level classes (like `.hydra-button`). This fact has a few implications, discussed in the customization methods below.

**Styling**

- Most components accept a `className` prop, which is merged with the default classname. This allows you to modify things without overwriting the default styles.
- The components that accept `className` also accept an `altClass` prop, which will override the default class. This is useful if you want to completely replace the default styles.
- Most components implicitly inherit from `React.HTMLAttributes`, which includes things like `style` by default. If you choose to do so, you can style them this way. I don't recommend this for many reasons.

### Scripts

- `yarn start:react` - Start watching the `react` package
- `yarn build:react` - Build the `react` package (compiles to `dist/`)
- `yarn start:styles` - Start watching the `styles` package
- `yarn build:styles` - Build the `styles` package (compiles to `dist/hydra.css`)

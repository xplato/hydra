# Hydra

A multi-headed component library for React.

## Documentation

### Installation

```bash
yarn add @xplato/hydra
```

or

```bash
npm install @xplato/hydra
```

### Basic Usage

```jsx
import { Button, Switch } from '@xplato/hydra';

const App = () => (
	<div>
		<Button>Click Me</Button>
		<Switch label={(on) => on ? "On" : "Off"} />
	</div>
);
```

### Component Documentation

I know it's not exactly conventional, but the documentation for each component is in the component's file. You can find them easily in the `packages/react/components` directory. The `props` of every component are documented in the `[Component]Props` interface just above the component itself. They are always structured the same way and written as simply as possible. Plus, it's a good idea to see how they work under-the-hood.

[**View the components**](https://github.com/xplato/hydra/tree/main/packages/react/components)

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

### Development Notes

- `dist/` is committed so that this package can be installed directly from GitHub.
- `react/` and `styles/` are separate packages so that they can be published independently and used interchangeably.
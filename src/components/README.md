# Components

All components are auto-registered by default.
For auto-imports to properly work, 
component names should be in PascalCase and the default export.

Example:
```tsx
// ~/components/HelloWorld.tsx
// ...
const HelloWorld = ({ name }) => {
    return <div>Hello, {name}</div>
}

export default HelloWorld
```

You can safely delete this directory if you don't need it.
If you do, also make sure to remove the auto-import resolver from `vite.config.ts`.

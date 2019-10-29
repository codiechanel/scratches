## Types or Interfaces?
interfaces are different from types in TypeScript, but they can be used for very similar things as far as common React uses cases are concerned. Here's a helpful rule of thumb:

- always use interface for public API's definition when authoring a library or 3rd party ambient type definitions.
- consider using type for your React Component Props and State, because it is more constrained.

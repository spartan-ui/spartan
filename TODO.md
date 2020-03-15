## MVP

- [ ] Use lerna to release
- [ ] Set up CI via Github Actions

## NEXT

- [ ] Create a logo for project
- [ ] Use `@testing-library/react` for testing components
- [ ] Generate documentation for each component (MDX?)
- [ ] Use barrelsby to generate src/index.tsx in `spartan-core`
- [ ] Expose all overrideable properties
    - [ ] `className`
    - [ ] `style`

## Long-term

- [ ] Collapsible sidebar using https://bootstrapious.com/p/bootstrap-sidebar as a guide
- [ ] Sidebar item groups, dividers, labels
- [ ] Sidebar should be responsive - `isVisible` should take a list of valid breakpoints like `sm`, `lg` etc. https://github.com/react-restart/hooks
- [ ] Add lint rule for no default exports as per Palmer Group guidelines
- [ ] Scaffold all sub-packages
    - [ ] `@spartan-ui/datagrid`
    - [ ] `@spartan-ui/datepicker`
    - [ ] `@spartan-ui/drag-n-drop`
    - [ ] `@spartan-ui/select`
    - [ ] `@spartan-ui/table`
- [ ] Theming? Dark mode would be awesome
- [ ] Typescript incremental builds
- [ ] Add eslint-prettier
- [ ] Move all eslint-related stuff to a private package in the monorepo
- [ ] https://github.com/wagoid/commitlint-github-action

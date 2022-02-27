# Holium Frontend Engineer Assessment

## Overview

This assessment is meant to understand core competencies of a frontend candidate:

1. An understanding of React syntax.
2. Ability to build UIs in a [component-driven](https://www.componentdriven.org/) way.
3. Working with [Storybook](https://storybook.js.org/).
4. Storing and manipulating React state.
5. Ability to accurately translate designs to code.

## What you need

Hopefully, you already have these things installed, but if not:

- [Node.js & npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- A code editor ([VS Code](https://code.visualstudio.com/))

## Getting started

1. Fork this repository.
2. Install dependencies with `yarn` or `npm install`.
3. Start the project with `yarn start` or `npm start`.
4. Start storybook with `yarn storybook` or `npm run storybook`.

## Assessment

Your goals with this assessment is to implement the provided designs in a component-driven way. How you break out the various components is up to you. Part of this is to understand how you think about the tasks. Do you consider the broader use-cases of the various components?

After implementing the components, you will add some interactivity to them by manipulating state in an efficient and simple pattern.

### Designs

Look at this [Figma link](https://www.figma.com/file/jGo2tjvI6Epj8sa5gXyMjr/Frontend-assessment?node-id=0%3A1).

A few example components are included that will be needed to help you build out this design.

### Requirements

- Build the post component (you may need to build multiple smaller components to build the assembled component)
  - You can use any image url for the image post
  - Write any sample data for the text post
- Implement a simple store using react state or another method.
  - Put fake data in that store to faciliate the top posts page.
- Make the heart button interactive, updating the store, and the UI.
- Make the top posts page scrollable with some sample posts.
- All components should have storybook stories with various examples (see included components).

The goal here is to see how you can break out components into sub-components and deduce potential variants.

Being a startup, there may be times where all variants of the component are not fully designed.

Another goal is to make the code as simple as possible, and where complex, make sure comments, documentation, or examples showcase how things work.

## Libraries

- react
- storybook
- styled-system
- styled-components
- polished

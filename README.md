# Webflow React Template

A simple template that can be used for quickly adding react components to Webflow websites. This template exports the entire react bundle to `dist/entry.js`, so you can easily inject that into a Webflow div by importing.

See https://webflow.com/blog/react-components-in-webflow#:~:text=Add%20component%20to%20Webflow for more

## Features

1. React + TypeScript
2. Single-file output (including CSS)

## Customization

By default, it looks for a div with id `react-root`. You should change this in `main.tsx`, as if you want to handle multiple imports on a Webflow page then you need to have different targets for the bundles.

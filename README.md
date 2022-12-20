# Webflow React Template

A simple template that can be used for quickly adding react components to Webflow websites. This template exports the entire react bundle to `dist/entry.js`, so you can easily inject that into a Webflow div by importing as seen in the tutorial: https://webflow.com/blog/react-components-in-webflow#:~:text=Add%20component%20to%20Webflow

## Customization

By default, it looks for a div with id `react-1`. You should change this in `main.tsx`, as if you want to handle multiple imports on a Webflow page then you need to have different targets for the bundles.

If you want to have the output file change names on every build (if you use long TTL or perma-caching) you can comment out the `entryFileNames:` line in `vite.config.ts`. You will need to update your Webflow import accordingly to use the new file name once hosted.

## Hosting

You can host this on any CDN provider you might normally host a react app on like Vercel or Firebase. You can also opt to host the file directly on object storage such as AWS S3 or Cloudflare R2 and either allow public reading of the file, or use a CDN like CloudFront or Cloudflare to serve the file.

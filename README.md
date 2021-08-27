# Knowledge Futures Group site

Auto-deployed from `main` to: [https://www.knowledgefutures.org](https://www.knowledgefutures.org)

## To Install

```
npm install
```

## To Run Dev Mode

```
npm run dev
```

## To Test RSS Builds

```
netlify build
```

Requires installing [Netlify Dev](https://www.netlify.com/products/dev/) and running `netlify link` one time.

Uses the [Netlify Fetch Feeds](https://github.com/philhawksworth/demo-netlify-plugin-fetch-feeds) Build Plugin.
Feeds and options are set in `netlify.toml`, cached, and regenerated on each build depending on the TTL setting.
To completely reset cache, delete `.netlify/cache` directory and rebuild.

## To Build and Run Production

```
npm start
```

# Static Files

Static files such as images, robots.txt, manifest.json, etc are stored in the /public folder. The contents of this folder are copied to the /dist folder during the production build. The contents, not the folder itself, are copied, so that robots.txt, etc will be at the top-level of the deployed application.

# RSS Builds

RSS is regenerated hourly on the :15 via an IFTTT and a Netlify deploy hook.

# Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://github.com/knowledgefutures/general/blob/master/CODE_OF_CONDUCT.md)

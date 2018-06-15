# Refined GitHub for Safari

[![Build Status](https://travis-ci.org/mathieudutour/refined-github.svg?branch=master)](https://travis-ci.org/mathieudutour/refined-github)

> Browser extension that simplifies the GitHub interface and adds useful features

This is a Safari version of [Refined GitHub](https://github.com/sindresorhus/refined-github).

## Install

[Install from the Safari Extensions Gallery](https://safari-extensions.apple.com/details/?id=me.dutour.mathieu.refined-github-8SEPFSC7S3)

or

[Download latest release](https://github.com/mathieudutour/refined-github/releases)

## Development

Before starting, git submodules should be checked out (`git submodule update --init`) and [Node](https://nodejs.org/en/) should be installed.

Then, install required dependencies with

```bash
npm install
```

After this, running

```bash
npm run build
```

will build the extension files to "refined-github.safariextension" directory. This directory can be loaded with [Extension Builder](https://developer.apple.com/library/content/documentation/Tools/Conceptual/SafariExtensionGuide/UsingExtensionBuilder/UsingExtensionBuilder.html) to Safari.

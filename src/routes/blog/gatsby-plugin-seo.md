---
title: Gatsby Plugin Seo
date: '2020-01-05'
tags:
  - gatsby
  - open source
  - react
category: Technology
draft: true
---

Having mostly worked with NextJS in the past, I've been learning a lot about the gatsby ecosystem over the
past few days.

One of the main things that I've missed is an equivalent gatsby version of the next-seo plugin. It's a really
well thought out utility that makes optimising static websites for SEO and social sharing very simple. While
it's possible to get the same results by adding your own meta tags, it's tedious to do that for every website.

To solve this minor pain point I've created a new plugin called `gatsby-plugin-seo`. Most of the code is a
direct port from the `next-seo` codebase, although I've changed a few minor details.

It's using `react-helmet-async` for managing head tags.

## Features

- Supports server-side-rendering
- Identical API to `next-seo`

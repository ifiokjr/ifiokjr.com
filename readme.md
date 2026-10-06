# Ifiok Jr.'s Blog

> A collection of thoughts on development and personal life. Welcome to my blog!

_created with [`scaffold`](https://github.com/ifiokjr/scaffold)_

Run locally with Deno 2 using `deno task dev`. Run the production server with `deno task serve` and check formatting, types, and lint with `deno task check`.

The site deploys through the GitHub integration in [Deno Deploy](https://console.deno.com/ifiokjr). Use the repository root, no build command, and `main.ts` as the entrypoint. The server uses `Deno.serve()`, which the current Deploy platform requires. Configure the `ifiokjr.com` production domain in the app settings and manage its DNS records in Squarespace Domains.

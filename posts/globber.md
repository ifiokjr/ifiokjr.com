---
title: globber
publish_date: 2022-08-04
---

Earlier this week I published my first rust crate; [`package_json_schema`](https://crates.io/crates/package_json_schema).

Today I've followed up by publishing a small package for filtering files via globs.

I named it [`globber`](https://github.com/ifiojr/globber).

Surprisingly, I found learning about [Deno](https://deno.land) tooling far more interesting that working on the published project.

The [`rust`](https://www.rust-lang.org/) ecosystem has led the way, showing what great tooling can look like. For example, in [`rust`](https://www.rust-lang.org/) you can run tests against comments and markdown files. This is currently missing from the JavaScript ecosystem and is something I've envied for a while.

Today, however, I discovered that [Deno](https://deno.land) has a wonderful utility for verifying that all code examples are valid.

```bash
deno test --doc readme.md
```

This is great!

It parses all JavaScript and TypeScript snippets in the `readme.md` file and runs them. If any fail, the test fails. It even provides accurate source maps pointing out exactly where the failures happened.

Genius, and almost perfect.

In order to perfect the process of discovering relevant files I wrote a [small script](https://github.com/ifiokjr/globber/blob/3415ffc46e538c12d31452e4a31b7c5a15b68f32/scripts/test_docs.ts#L49-L61). This script uses the `globber` module to search for relevant `.md` and `.ts` files to test.

```ts
// scripts/deno_test.ts
import { globber } from "https://deno.land/x/globber@0.1.0/mod.ts";

const cwd = new URL("../", import.meta.url).pathname;
// Store the relevant file paths
const files: string[] = [];
const iterator = globber({
  cwd,
  // Only search for markdown and typescript files
  extensions: [".ts", ".md"],
  exclude: ["**/fixtures/", "**/tests/", "**/scripts/"],
  excludeDirectories: true,
});

for await (const file of iterator) {
  files.push(file.relative);
}

await Deno
  .run({
    cmd: ["deno", "test", "--doc", "--check", `--allow-read=${cwd}`, ...files],
    cwd,
  }).status();
```

The command can be run like so:

```bash
deno run -A scripts/deno_test.ts
```

I've added this command to the `deno.jsonc` tasks.

```bash
deno task test:docs
```

When the command was first run it immediately highlighted several bugs in the documentation. I've fixed them and will be adding this flow to all future continuous integration pipelines.

Little surprises like this make me love 💖 [Deno](https://deno.land) even more.

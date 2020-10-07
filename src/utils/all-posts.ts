import 'prism-svelte';

import { execSync } from 'child_process';
import frontMatter from 'front-matter';
import fs from 'fs';
import marked from 'marked';
import path from 'path';
import Prism from 'prismjs';
import readingTime from 'reading-time';

import { formatDate } from './dates';
import type { FrontMatterOptions, Post } from './types';

require('prismjs/components/prism-jsx.min');
require('prismjs/components/prism-tsx.min');
require('prismjs/components/prism-typescript.min');
require('prismjs/components/prism-markup.min');
require('prismjs/components/prism-css.min');
require('prismjs/components/prism-markdown.min');
require('prismjs/components/prism-bash.min');
require('prismjs/components/prism-json.min');

const blogFolder = path.join(__dirname, '../routes/blog');
const dev = process.env.NODE_ENV !== 'production';

export const posts: Post[] = fs
  .readdirSync(blogFolder)
  .filter((elem) =>
    ['.svx', '.md'].some((extension) => elem.endsWith(extension)),
  )
  .map((postFilename) => {
    const filePath = path.join(blogFolder, postFilename);

    // The last time the file was modified in git
    const dateModified = execSync(
      `git --no-pager log --max-count=1 --format="%ad" --follow --date=iso -- ${filePath}`,
    )
      .toString()
      .trim();

    // The date the file was first added to git.
    const dateCreated = execSync(
      `git --no-pager log --max-count=1  --format="%ad" --follow --diff-filter=A --date=iso -- ${filePath}`,
    )
      .toString()
      .trim();
    const postContent = fs.readFileSync(filePath, {
      encoding: 'utf8',
    });

    const postFrontMatter = frontMatter<FrontMatterOptions>(postContent);
    const renderer = new marked.Renderer();

    renderer.code = (source: string, lang: string) => {
      const html = Prism.highlight(source, Prism.languages[lang], lang);
      return `<pre class='language-${lang}'><code class='language-${lang}'>${html}</code></pre>`;
    };

    const html = marked(postFrontMatter.body, { renderer });
    const excerpt = html.split('<!-- truncate -->')[0];
    const dates = {
      published: formatDate(
        postFrontMatter.attributes.datePublished ?? dateModified,
      ),
      modified: formatDate(dateModified),
      created: formatDate(dateCreated),
    };

    return {
      ...postFrontMatter.attributes,
      excerpt,
      html,
      dates,
      dateCreated,
      dateModified,
      readingTime: readingTime(postFrontMatter.body).text,
    };
  })
  .filter((post) => post.datePublished || dev)
  .sort(
    (a, z) =>
      new Date(a.datePublished ?? a.dateModified).getTime() -
      new Date(z.datePublished ?? z.dateModified).getTime(),
  );

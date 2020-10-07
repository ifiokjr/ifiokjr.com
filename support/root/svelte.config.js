const sveltePreprocess = require('svelte-preprocess');
const image = require('svelte-image');
const { mdsvex } = require('mdsvex');
const postcss = require('./postcss.config');

const extensions = ['.svelte', '.svx', '.md'];

/**
 * @param {string} sourceMap
 * @returns {import('svelte/types/compiler/preprocess').PreprocessorGroup[]}
 */
function sharedPreprocessor(sourceMap) {
  return [
    mdsvex({
      extensions: ['.md', '.svx'],
      remarkPlugins: [
        require('remark-slug'),
        require('remark-footnotes'),
        require('remark-autolink-headings'),
      ],
    }),
    image({ placeholder: 'blur', optimizeRemote: true }),
    sveltePreprocess({
      defaults: { script: 'typescript', style: 'postcss' },
      sourceMap,
      postcss,
      preserve: ['ld+json'],
    }),
  ];
}

exports.sharedPreprocessor = sharedPreprocessor;

module.exports = {
  // Options for `svelte-check` and the VS Code extension
  preprocess: sharedPreprocessor(true),
  extensions,
};

<script context="module" lang="ts">
  import type { Page, PreloadContext } from '@sapper/common';
  import type { Post } from '../../utils/types';

  export function preload(this: PreloadContext, { params, query }: Page) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script lang="ts">
  export let posts: Post[];
</script>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item-date {
    color: #aaa;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container">
  <h1>Blog</h1>
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></h2>
      <p>{post.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.datePublished}</span>
      </div>
    </div>
  {/each}
</div>

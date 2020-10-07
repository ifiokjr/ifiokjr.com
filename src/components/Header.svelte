<script lang="ts">
  import Logo from './Logo.svelte';
  import Nav from './Nav.svelte';
  import type { Segment } from './types';

  export let segment: Segment | undefined;
</script>

<style>
  header {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    padding: 2em;
    width: 100%;
  }
</style>

<header>
  <Logo />
  <Nav {segment} />
</header>

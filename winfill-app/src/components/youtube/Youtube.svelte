<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import Iframe from "./Iframe.svelte";
  import Image from "./Image.svelte";

  type YoutubeJSON = {
    html: string,
    title: string,
    thumbnail_height: number,
    provider_name: string,
    author_url: string,
    thumbnail_width: number,
    height: number,
    provider_url: string,
    type: string,
    width: number,
    version: string,
    author_name: string,
    thumbnail_url: string
  }

  export let id = '';
  export let altThumb = '';
  export let mute = false;
  export let autoplay = false;

  let title = "";
  let width = 0;
  let height = 0;

  let videoInfo: YoutubeJSON;
  onMount(async () => {
    const res = await fetch(
      `//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
    );
    videoInfo = await res.json();
    title = videoInfo?.title;
    width = videoInfo?.width;
    height = videoInfo?.height;
  });

  //let play = false;
  let play = autoplay;
  const isCustomPlayButton = $$slots.default;
  const isCustomThumbnail = $$slots.thumbnail;
</script>

<div
  class="you__tube"
  style="--aspect-ratio:{width / height || '16/9'}"
  {title}
>
  {#if play}
    <Iframe {id} {title} {mute}/>
  {:else}
    {#if isCustomThumbnail}
      <slot name="thumbnail" />
    {:else}
      <Image {id} {title} {altThumb} {play} />
    {/if}
    <div class="b__overlay" on:click={() => (play = true)} on:keypress={() => (play = true)} />
    <div class="v__title"><h3>{title}</h3></div>
  {/if}
  {#if !play}
    <Button on:click={() => (play = true)} {isCustomPlayButton}>
      <slot />
    </Button>
  {/if}
</div>

<style>
  .you__tube {
    position: relative;
    aspect-ratio: 1.76991;
    overflow: hidden;
  }

  .v__title {
    position: absolute;
    top: 0;
    width: 100%;
    background: linear-gradient(to bottom, hsla(0, 0%, 0%, 0.1), transparent);
    pointer-events: none;
  }
  .v__title h3 {
    font-family: var(
      --title-font-family,
      "Segoe UI",
      Geneva,
      Verdana,
      sans-serif
    );
    color: var(--title-color, #ffffff);
    padding: 0 2ch;
    font-weight: 400;
    text-shadow: 0px 1px 3px var(--title-shadow-color, rgb(0, 0, 0, 0.2));
  }
  .b__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: var(--aspect-ratio);
    cursor: pointer;
    transition: var(--overlay-transition, all 250ms ease-in-out);
  }
  .you__tube:hover .b__overlay {
    background: var(--overlay-bg-color, #00000030);
  }
</style>

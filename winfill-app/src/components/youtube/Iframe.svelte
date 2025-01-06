<script>
  import { scale } from "svelte/transition";
  export let title = "";
  export let id = "";
  export let mute = false;
</script>

<iframe
  src="https://www.youtube.com/embed/{id}?autoplay=1&rel=0{mute ? "&mute=1" : ""}"
  {title}
  frameborder="0"
  allow="autoplay; picture-in-picture; clipboard-write"
  allowfullscreen
  
/>

<style>
  iframe {
    height: auto;
    aspect-ratio: var(--aspect-ratio);
    width: 100%;
  }
</style>

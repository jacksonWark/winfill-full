<script lang="ts">
    export let extraStyles: string = "";
    let style = "break-word text-justify hyphens-auto" + extraStyles;
</script>

<p class={style} lang="de">
    <slot />
</p>
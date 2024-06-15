<script lang="ts">
    export let title: string | undefined = undefined;
    export let text: string;
    export let extraStyles: string = "";
    let style = "break-word text-justify hyphens-auto " + extraStyles;
</script>

<p class={style} lang="en">
    {#if title}
    <b>{title}</b>
    {/if}
    {@html text}
</p>
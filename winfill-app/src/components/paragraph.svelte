<script lang="ts">
    export let text: string;
    export let extraStyles: string = "";
    let style = "break-word text-justify hyphens-auto " + extraStyles;
</script>

<p class={style} lang="en">
    {@html text}
</p>
<script lang="ts">
    import Paragraph from "./paragraph.svelte";
    export let name: string;
    export let id: string;
    export let text: string;
    export let imagesPerRow: number;
    export let numImages: number;

    let rowSpan: string =  `lg:row-span-${Math.ceil(numImages / imagesPerRow)}`;
</script>

<div id={id} class={`col-span-full row-span-1 pt-6 lg:col-span-2 lg:col-start-1  ${rowSpan}` }>
    <h2 class="text-xl mb-4">{name}</h2>
    <Paragraph text={text} />
</div>
<script lang="ts">
    import Paragraph from "./paragraph.svelte";
    export let name: string;
    export let id: string;
    export let text: string;
    export let images: number;
    export let imageSize: number;

    let rowSpan: string =  `md:row-span-${Math.ceil(images / (6 / imageSize))}`;
</script>

<div id={id} class={`col-span-1 pt-6 md:col-start-1 md:col-span-2 ${rowSpan}` }>
    <h2 class="text-xl mb-4">{name}</h2>
    <Paragraph>
        {text}
    </Paragraph>
</div>
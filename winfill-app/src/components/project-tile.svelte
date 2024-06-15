<script lang="ts">
    export let alt: string;
    export let source: string;
    export let route: string;
    export let imagesPerRow: number;
    export let index: number;
    
    import { imagePath } from '$lib/project-consts';

    let sizeMedium = Math.floor(10 / imagesPerRow);
    let sizeLarge = Math.floor(6 / imagesPerRow);
    let rowIndex = index % imagesPerRow;
    let startMedium = (rowIndex*sizeMedium) + 1; // The index in tailwind's column layout is 1-indexed, index is 0-indexed
    let startLarge = (rowIndex*sizeLarge) + 4; // The category takes up 3 columns on large displays
    let firstRow : string = index < imagesPerRow ? "md:pt-6" : "";
    let style: string = `col-span-1 md:col-span-${sizeMedium} md:col-start-${startMedium} ${firstRow} lg:col-span-${sizeLarge} lg:col-start-${startLarge}`;
    
    let active: boolean = false;
</script>


<div class={style}>
    {#if !(source === '')}
    <a href={route} class="block relative" on:mouseenter={()=>{active = true}} on:mouseleave={()=>{active = false}}>
        <img src={imagePath+source} alt={alt} class="w-full">
        <div class={(active == true ? "md:flex" : "md:hidden") + " absolute bottom-0 w-full h-8 md:size-full md:top-0 items-center transition backdrop-brightness-50"}>
            <h1 class="text-orange font-bold text-xl text-center w-full">{alt}</h1>
        </div>
    </a>
    {:else}
    <div class="block relative">
        <img src={imagePath+'/empty.webp'} alt={alt} class="w-full border">
        <div class="flex absolute bottom-0 w-full h-8 md:size-full md:top-0 items-center">
            <h1 class="font-bold text-xl text-center w-full">{alt}</h1>
        </div>
    </div>
    {/if}
</div>
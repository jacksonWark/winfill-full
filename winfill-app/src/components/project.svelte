<script lang="ts">
    import { text } from "@sveltejs/kit";
import Paragraph from "./paragraph.svelte";

    //Props
    export let project: {
        name: string;
        location: string;
        started: number; 
        status: string;
        designer: string;
        imageFolder: string;
        conceptImage: string;
        text: string[];
        video: string,
        images: string[]
    }
    

</script>


<div class="md:order-1 md:col-span-4 text-xl md:text-2xl">
    <p class='text-orange inline mr-2'>Projects:</p><p class="inline">{project.name}</p> 
</div>

<div class="hidden justify-self-end text-md md:order-2 md:flex md:col-span-6 md:flex-row md:text-2xl">
    <p class='mr-1 '>Follow The Builds:</p>
    <a href="https://www.instagram.com/winfill_developments/" target="_blank" rel="noopener noreferrer" class="underline decoration-orange hover:text-orange text-right">Instagram</a> 
</div>

<div class="col-span-full font-bold text-sm md:order-3 md:text-md">
    <h1>{project.location}</h1>
    <h1>Year: {project.started}, {project.status}</h1>
    <h1>In House Design by: {project.designer}</h1>
</div>

<div class="md:order-5 md:col-start-9 md:col-span-2">
    <img src={project.imageFolder+project.conceptImage} alt={project.name}>
</div>

<div class="md:order-4 md:columns-2 md:col-span-8">
    {#each project.text as paragraph}
        <Paragraph extraStyles={" mb-4"}>
            {paragraph}
        </Paragraph>
    {/each}
</div>

<div class="md:col-span-8 md:col-start-2 md:order-6">
    <img src={project.video} alt={project.name}>
</div>

{#each project.images as image, i}
    <div class={`mt-4 md:order-last md:mx-4 md:col-span-5 md:col-start-${((i % 2) == 0 ? "1" : "6")}`}>
        <img src="{project.imageFolder+image}" alt="{project.name}">
    </div>
{/each}
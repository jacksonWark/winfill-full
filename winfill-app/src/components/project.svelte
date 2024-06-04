<script lang="ts">
    import Paragraph from "./paragraph.svelte";
    import Youtube from "./youtube/Youtube.svelte";
    import type { Project } from '$lib/project-types';
    
    //Props
    export let project: Project;

    const imageFolder: string = `/images/projects/${project.route}/`;    

    function MapSide(side: 'left' | 'right', start?: number): number { 
        if (start) 
            return start
        else {
            if (side ==='left') return 1
            else return 7;
        }
    }
</script>


<div class="md:order-1 md:col-span-6 text-xl md:text-2xl">
    <p class='text-orange inline mr-2'>Projects:</p><p class="hidden lg:inline"> > {project.category} > </p><p class="inline">{project.name}</p> 
</div>

<div class="hidden justify-self-end md:order-2 md:flex md:flex-row md:col-span-4 md:text-md lg:col-span-4 lg:text-2xl">
    <p class='mr-1 '>Follow The Builds:</p>
    <a href="https://www.instagram.com/winfill_developments/" target="_blank" rel="noopener noreferrer" class="underline decoration-orange hover:text-orange text-right">Instagram</a> 
</div>

<div class="col-span-full font-bold text-sm md:order-3 md:text-md">
    {#if project.location} <h1>{project.location}</h1> {/if}
    {#if project.started}<h1>Year: {project.started}, {project.status}</h1>{/if}
    {#if project.designer}<h1>{#if project.inHouse}In House {/if}Design by: {project.designer}</h1>{/if}
</div>

{#if project.conceptImage}
<div class="my-4 md:my-0 md:order-4 md:col-start-2 md:col-span-8 lg:order-5 lg:col-start-8 lg:col-span-3">
    <img src={imageFolder+project.conceptImage} alt={project.name}>
</div>
    {#if project.text}
        <div class="mb-8 md:order-5 md:col-start-1 md:col-span-10 lg:order-4 lg:columns-2 lg:col-span-7">
            {#each project.text as paragraph}
                <Paragraph extraStyles={"mb-4"} text={paragraph} />
            {/each}
        </div>
    {/if}
{:else}
    {#if project.text}
        <div class="mb-8 md:order-4 md:columns-2 md:col-span-10">
            {#each project.text as paragraph}
                <Paragraph extraStyles={"mb-4"} text={paragraph} />
            {/each}
        </div>
    {/if}
{/if}


{#if project.video}
<div class="mb-16 md:col-span-10 md:col-start-1 md:order-6 lg:col-start-2 lg:col-span-8">
    <Youtube id={project.video.id} altThumb={project.video.altThumb} />
</div>
{/if}

{#if project.images}
    {#each project.images as image, i}
        <div class={` md:order-last md:col-span-${image.width} md:col-start-${MapSide(image.side, image.start)} md:row-span-${image.height}`}>
            <img src="{imageFolder+image.path}" alt="{project.name}">
        </div>
    {/each}
{/if}
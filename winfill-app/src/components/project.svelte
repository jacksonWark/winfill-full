<script lang="ts">
    import Paragraph from "./paragraph.svelte";
    import { page } from "$app/stores";
    //Props
    export let project: {
        name: string;
        category: string;
        location: string;
        started: number; 
        status: string;
        designer: string;
        inHouse: boolean;
        route: string;
        conceptImage: string;
        text: string[];
        video: string,
        images: string[]
    }

    //let n = $page.url.pathname.split('/').length;
    //let prefix = "";
    //for (let i = 0; i < n; i++) 
    //    prefix = prefix + "../";
    const imageFolder: string = `/images/projects/${project.route}`;
    
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
    <h1>Year: {project.started}, {project.status}</h1>
    <h1>{#if project.inHouse}In House {/if}Design by: {project.designer}</h1>
</div>

{#if project.conceptImage}
<div class="md:order-5 md:col-start-7 md:col-span-4 lg:col-start-9 lg:col-span-2">
    <img src={imageFolder+project.conceptImage} alt={project.name}>
</div>

<div class="md:order-4 lg:columns-2 md:col-span-6 lg:col-span-8">
    {#each project.text as paragraph}
        <Paragraph extraStyles={" mb-4"}>
            {paragraph}
        </Paragraph>
    {/each}
</div>
{:else}
    <div class="md:order-4 md:columns-2 md:col-span-10">
        {#each project.text as paragraph}
            <Paragraph extraStyles={" mb-4"}>
                {paragraph}
            </Paragraph>
        {/each}
    </div>
{/if}


{#if project.video}
<div class="md:col-span-8 md:col-start-2 md:order-6">
    <img src={project.video} alt={project.name}>
</div>
{/if}

{#each project.images as image, i}
    <div class={`mt-4 md:order-last md:mx-4 md:col-span-5 md:col-start-${((i % 2) == 0 ? "1" : "6")}`}>
        <img src="{imageFolder+image}" alt="{project.name}">
    </div>
{/each}
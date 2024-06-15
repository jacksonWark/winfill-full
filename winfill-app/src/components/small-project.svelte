<script lang="ts">
    import Paragraph from "./paragraph.svelte";
    import { imagePath } from "$lib/project-consts"
    import type { ImageGallery, SmallProject, SmallProjects } from '$lib/project-types';
    import { IsBulletList } from "$lib/project-types";
    import Image from "./youtube/Image.svelte";
    
    //Props
    export let projects: SmallProjects;

    const imageFolder: string = `${imagePath}${projects.route}/`;    

    function MapSide(side: 'left' | 'right', start?: number): number { 
        if (start) 
            return start
        else {
            if (side ==='left') return 2
            else return 5;
        }
    }

    function GetRowSpan(images : ImageGallery) : number {
        let count = 0;
        for (let i = 0; i < images.length; i++) {
            if (images[i].side === 'left') count += images[i].height;
        }
        return count;
    }

</script>


<div class="md:col-span-6 text-xl md:text-2xl">
    <p class='text-orange inline mr-2'>Small Projects:</p><p class="inline">{projects.groupName}</p> 
</div>

<div class="hidden justify-self-end md:flex md:flex-row md:col-span-4 md:text-md lg:col-span-4 lg:text-xl">
    <p class='mr-1 '>A little look at what our team designs and builds in our free time...</p> 
</div>

{#each projects.group as project}
    
    <div class={'lg:mt-12 lg:col-start-1 col-span-full mb-8 lg:col-span-3' + (project.images ? ' row-span-' + (GetRowSpan(project.images)+1) : '')}>
        {#if project.name}<h1 class=" text-2xl mb-6">{project.name}</h1>{/if}
        {#if project.designer}<div><h1 class="font-bold inline pr-1">{#if project.inHouse}In House {/if}Design by:</h1><h1 class="inline">{project.designer}</h1></div>{/if}
        {#if project.materials} <div class="mb-6"><h1 class="font-bold inline pr-1">Materials:</h1><h1 class="inline">{project.materials}</h1></div> {/if}
    
        {#if project.text}
            {#each project.text as paragraph, i}
                {#if IsBulletList(paragraph)}
                    <ul class="list-disc list-outside ms-8">
                        {#each paragraph as bullet} <li>{bullet}</li> {/each}
                    </ul>
                {:else}
                    <Paragraph extraStyles={"mb-4"} text={paragraph} title={i == 0 ? 'Description: ' : ''}/>
                {/if}
            {/each}
        {/if}

    </div>

    {#if project.images}
        <div class={"col-span-full lg:mt-12 lg:grid lg:grid-cols-subgrid lg:gap-6 lg:col-span-7" + (project.images ? ' lg:row-span-' + GetRowSpan(project.images) : '')}>
        {#each project.images as image, i}
            <div class={`md:col-span-full lg:col-span-${image.width} lg:col-start-${MapSide(image.side, image.start)} lg:row-span-${image.height}`}>
                <img src="{imageFolder+image.path}" alt="{project.name}">
            </div>
        {/each}
        </div>
    {/if}

{/each}
<script>
    import { projectGroups } from './data';
    import ProjectTile from '../../components/project-tile.svelte';
    import ProjectCategory from '../../components/project-category.svelte';

</script>


<div class="md:col-span-4 text-xl md:text-2xl xl:text-3xl">
    <p class='text-orange inline mr-2'>Projects:</p> 
</div>

<div class="hidden justify-self-end md:flex md:col-span-6 md:flex-row text-xl md:text-2xl xl:text-3xl">
    <p class='mr-1 '>Follow The Builds:</p>
    <a href="https://www.instagram.com/winfill_developments/" target="_blank" rel="noopener noreferrer" class="underline decoration-orange hover:text-orange text-right">Instagram</a> 
</div>

{#each projectGroups as section}
    <ProjectCategory name={section.name} id={section.id} text={section.text} numImages={section.projects.length} imagesPerRow={section.imagesPerRow}/>
    {#each section.projects as project, i}
        <ProjectTile alt={project.alt} source={project.source} route={project.route} imagesPerRow={section.imagesPerRow} index={i} />
    {/each}
{/each}
<script lang="ts">
    import ProjectComponent from '../../../components/project.svelte';
    import SmallProjectComponent from '../../../components/small-project.svelte'
    import type { Project, SmallProjects } from '$lib/project-types';
    import { projects } from '../data';
    import { page } from '$app/stores'; 

	export let project: Project | SmallProjects | undefined = projects.find((project) => project.route === $page.params.slug);

    if (!project) project = {
        name: 'Not Found',
        category: 'Not Found',
        location: '',
        status: '',
        route: ''
    }

    function isSmall(project: Project | SmallProjects): project is SmallProjects {
        return (<SmallProjects>project).group !== undefined;
    }
    
</script>

{#if isSmall(project)}
    <SmallProjectComponent projects={project}/>
{:else}
    <ProjectComponent project={project}/>
{/if}
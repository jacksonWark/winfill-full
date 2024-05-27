<script lang="ts">
    import ProjectComponent from '../../../components/project.svelte';
    import type { Project } from '$lib/project-types';
    import { projects } from '../data';
    import { page } from '$app/stores'; 

	export let project: Project | undefined = projects.find((project) => project.route === $page.params.slug);

    if (!project) project = {
        name: 'Not Found',
        category: 'Not Found',
        location: '',
        status: '',
        route: ''
    }
    
</script>

<ProjectComponent project={project}/>
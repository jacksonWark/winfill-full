<script>
    import ProjectTile from '../../components/project-tile.svelte';
    import ProjectCategory from '../../components/project-category.svelte';

    

    let imagePath = "./images/projects/";

    let data = [
            {
                name: "Homes",
                id: "homes",
                text: "Crafting distinctive homes that bring your vision to life, we're not just building houses &mdash; we're creating the backdrop for a lifetime of memories.",
                imageSize: 3,
                images: [
                    { source: "BoxHouse.webp", route: "box-house", alt: "Box House"},
                    { source: "PointyHouse.webp", route: "pointy-house", alt: "Pointy House"},
                    { source: "Husky.webp", route: "husky", alt: "Husky"},
                    { source: "Goliath.webp", route: "goliath", alt: "Goliath"},
                    { source: "AAA.webp", route: "aaa", alt: "AAA"},
                    { source: "Wedge.webp", route: "wedge", alt: "Wedge"},
                    { source: "RiverdaleResidence.webp", route: "riverdale-residence", alt: "Riverdale Residence"}
                ]
            },
            {
                name: "Multi-Family",
                id: "multi-family",
                text: "Building Multi-Family developments where every detail is designed and built with the tenant and owner in mind, we create spaces that foster connections and turn neighbors into lifelong friends.",
                imageSize: 3,
                images: [
                    { source: "Trplex.webp", route: "trplex", alt: "Trplex"}
                ]
            },
            {
                name: "Small Projects",
                id: "small-projects",
                text: "Small-scale projects that matter, we bring your ideas to life from playhouses to custom furniture. All are designed and built in-house with a personal touch, crafted to your exact needs.",
                imageSize: 2,
                images: [
                    { source: "PlayHouse.webp", route: "lets-play", alt: "Play House"},
                    { source: "Concrete.webp", route: "concrete", alt: "Concrete"},
                    { source: "Furniture.webp", route: "furniture", alt: "Furniture"},
                ]
            },
            {
                name: "For Sale",
                id: "for-sale",
                text: "Looking for a move-in ready home or plot for your dream home? We may be able to help.",
                imageSize: 3,
                images: [
                    { source: "Allendale.webp", route: "allendale", alt: "Allendale"},
                    { source: "Strathearn.webp", route: "strathearn", alt: "Strathearn"},
                ]
            },
        ];
</script>



{#each data as section}
    <ProjectCategory name={section.name} id={section.id} text={section.text} images={section.images.length} imageSize={section.imageSize}/>
    {#each section.images as image, i}
        <ProjectTile alt={image.alt} source={imagePath+image.source} route={`/projects/${section.id}/${image.route}`} size={section.imageSize} index={i} />
    {/each}
{/each}
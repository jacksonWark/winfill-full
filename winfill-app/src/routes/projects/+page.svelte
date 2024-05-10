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
                    { source: "BoxHouse.webp", route: "/projects/box-house", alt: "Box House"},
                    { source: "PointyHouse.webp", route: "/projects/pointy-house", alt: "Pointy House"},
                    { source: "Husky.webp", route: "/projects/husky", alt: "Husky"},
                    { source: "Goliath.webp", route: "/projects/goliath", alt: "Goliath"},
                    { source: "AAA.webp", route: "/projects/aaa", alt: "AAA"},
                    { source: "Wedge.webp", route: "/projects/wedge", alt: "Wedge"},
                    { source: "RiverdaleResidence.webp", route: "/projects/riverdale-residence", alt: "Riverdale Residence"}
                ]
            },
            {
                name: "Multi-Family",
                id: "multi-family",
                text: "Building Multi-Family developments where every detail is designed and built with the tenant and owner in mind, we create spaces that foster connections and turn neighbors into lifelong friends.",
                imageSize: 3,
                images: [
                    { source: "Trplex.webp", route: "/projects/trplex", alt: "Trplex"}
                ]
            },
            {
                name: "Small Projects",
                id: "small-projects",
                text: "Small-scale projects that matter, we bring your ideas to life from playhouses to custom furniture. All are designed and built in-house with a personal touch, crafted to your exact needs.",
                imageSize: 2,
                images: [
                    { source: "PlayHouse.webp", route: "/projects/lets-play", alt: "Play House"},
                    { source: "Concrete.webp", route: "/projects/concrete", alt: "Concrete"},
                    { source: "Furniture.webp", route: "/projects/furniture", alt: "Furniture"},
                ]
            },
            {
                name: "For Sale",
                id: "for-sale",
                text: "Looking for a move-in ready home or plot for your dream home? We may be able to help.",
                imageSize: 3,
                images: [
                    { source: "Allendale.webp", route: "/projects/allendale", alt: "Allendale"},
                    { source: "Strathearn.webp", route: "/projects/strathearn", alt: "Strathearn"},
                ]
            },
        ];
</script>



{#each data as section}
    <ProjectCategory name={section.name} id={section.id} text={section.text} images={section.images.length} imageSize={section.imageSize}/>
    {#each section.images as image, i}
        <ProjectTile alt={image.alt} source={imagePath+image.source} route={image.route} size={section.imageSize} index={i} />
    {/each}
{/each}
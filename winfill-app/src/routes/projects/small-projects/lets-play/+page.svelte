
<script>
    import Project from "../../../../components/project.svelte";

    let playhouse = {
        name: "Let's Play",
        category: "Small Projects",
        location: "",
        started: 2024,
        status: "Completed",
        designer: "Kurtis Wiun",
        inHouse: false,
        route: "small-projects/lets-play/",
        conceptImage: "",
        text: [
            ""
        ],
        video: "",
        images: [
            "3.webp",
            "5.webp",
            "7.webp",
            "2.webp"
        ]
    }
</script>

<Project project={playhouse}/>

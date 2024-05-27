<script>
    import Project from "../../../../components/project.svelte";

    let riverdaleResidence = {
        name: "Riverdale Residence",
        category: "Homes",
        location: "Gold Bar, Edmonton, AB",
        started: 2020,
        status: "Completed",
        designer: "Brenden Wiun & Kurtis Wiun",
        inHouse: true,
        route: "homes/riverdale-residence/",
        conceptImage: "scan.webp",
        text: [
            "Description: "   
        ],
        video: {
            id: "SLBspkzG9s8",
            altThumb: "/video/video-screenshot.webp",
            animations: true
        },
        images: [
            "1.webp",
            "2.webp",
            "3.webp",
            "4.webp",
            "5.webp"
        ]
    }
</script>

<Project project={riverdaleResidence}/>
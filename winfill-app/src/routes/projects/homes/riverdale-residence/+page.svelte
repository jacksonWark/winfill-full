<script>
    import Project from "../../../../components/project.svelte";

    let riverdaleResidence = {
        name: "Riverdale Residence",
        location: "Gold Bar, Edmonton, AB",
        started: 2020,
        status: "Completed",
        designer: "Brenden Wiun & Kurtis Wiun",
        imageFolder: "/images/projects/homes/riverdale-residence/",
        conceptImage: "scan.webp",
        text: [
            "Description: "   
        ],
        video: "/video/video-screenshot.webp",
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
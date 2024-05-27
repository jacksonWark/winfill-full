
<script>
    import Project from "../../../../components/project.svelte";

    let aaa = {
        name: "AAA",
        category: "Homes",
        location: "Alberta Ave, Edmonton, AB",
        started: 2024,
        status: "Under Construction",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "homes/aaa/",
        conceptImage: "scan.webp",
        text: [
            "Description: Currently in permitting, this rear addition will be situated on a beautiful 110-year-old home in the Alberta Ave neighborhood. Winfill will replace an existing addition while bringing the design more in line with the traditional style of the home and improving the exterior envelope to allow the clients to enjoy their home for years to come.",
            "The addition takes styling cues from the rooflines of the facade of the home while interfacing with existing second-floor windows. The interior floor plan was also optimized to the current owners needs. The addition will be clad in traditional cedar painted white, cedar shakes, and burgundy accents."
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
            "5.webp",
            "6.webp"
        ]
    }
</script>

<Project project={aaa}/>


<script>
    import Project from "../../../../components/project.svelte";

    let inglewood = {
        name: "Inglewood 3+3",
        category: "Multi-Family",
        location: "Inglewood, Edmonton, AB",
        started: 2024,
        status: "Under Construction",
        designer: "Thomas Perl",
        inHouse: false,
        route: "multi-family/inglewood-triplex/",
        conceptImage: "scan.webp",
        text: [
            "Description: Currently under construction the Inglewood Triplex will feature 6 individual units (above ground and 3 basement suites) totaling 5,299 s.f. of total finished living space. The structure will include 6 kitchens, 6 laundry rooms, 9 bedrooms, and 12 bathrooms. The exterior of this building will feature stucco and cedar accents as well as several skylights, and a complex basement courtyard entryway. Winfill will oversee the project to completion including building a 3-car garage and completing the full landscaping scope.",
            "Although, Winfill did not complete the design for our client on this project we were brought in early in the project development phase as a pre-construction advisor consulting on constructability and providing value engineering suggestions."
        ],
        video: {
            id: "SLBspkzG9s8",
            altThumb: "/video/video-screenshot.webp",
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

<Project project={inglewood}/>



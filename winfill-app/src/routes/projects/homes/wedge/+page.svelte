<script>
    import Project from "../../../../components/project.svelte";

    let wedge = {
        name: "Wedge",
        category: "Homes",
        location: "Beverly, Calgary, AB",
        started: 2023,
        status: "Under Construction",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "homes/wedge/",
        conceptImage: "scan.webp",
        text: [
            "Description: Currently under construction, this Four Seasons Room will be situated on a beautiful Midcentury home in the Belaire neighborhood. Large setbacks enforced by the restricted covenant led us to follow the property line on an angled addition to maximize space. The Four Seasons room will contain a swim spa wood-burning fireplace and exercise equipment allowing the owners to enjoy their favorite activities close to home in their forever home.",
            "The addition strived to integrate this unique footprint into the existing home, beginning with a miter glass corner softening the front and ending with access to the backyard for entertainment. Clad in stucco and stone, the addition fits into the pallet while introducing wood gives the addition a warm feeling, blending it into the heavily treed side yard with 10\’ setback."
        ],
        video: "/video/video-screenshot.webp",
        images: [
            "1.webp",
            "2.webp",
            "3.webp",
            "4.webp",
            "5.webp",
            "6.webp",
            "7.webp",
            "8.webp",
            "9.webp",
            "10.webp",
            "11.webp",
            "12.webp"
        ]
    }
</script>

<Project project={wedge}/>
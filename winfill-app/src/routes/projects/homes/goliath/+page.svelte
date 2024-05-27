
<script>
    import Project from "../../../../components/project.svelte";

    let goliath = {
        name: "Goliath",
        category: "Homes",
        location: "Gold Bar, Edmonton, AB",
        started: 2021,
        status: "Completed",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "homes/goliath/",
        conceptImage: "scan.webp",
        text: [
            "As the neighboring home of the Husky, we pulled design cues from of the Husky but strived to create a unique offering. The custom 2-storey home offers something rare to the lot split market with its stepped design at 34 feet wide vs. the standard 17-foot lot split. 10623 features 3 Bedrooms, 2.5 Bathrooms, an office workspace, and over 2150 sq.ft of high-quality finished living space. The main entertaining level is truly open concept designed. Hence, the main floor functions cyclically, while interior design decisions provide clear breaks in space usage. The main floor showcases engineered white oak flooring, 10\’ ceilings, a gas fireplace, custom metal railings, and a dry bar with a beverage center. The two-tone custom kitchen features a quartz island, upgraded KitchenAid appliances, a gas range, and a sizeable linear pantry with a floor-to-ceiling window. An office workspace overlooking the oversized backyard, complete with custom metal french doors, is located at the back of the house. The upper level features open-rise stairs and spacious secondary bedrooms. The owner\’s suite is accompanied by an oversized ensuite with a custom wet room (waterproofed with the Schluter system and backed up by cement board). The exterior features black James Hardie board and batten, a natural cedar accent nook with seamlessly wrapped cedar on the soffit with a custom fabricated metal column, and a custom concrete deck. Complete with double car garage and rough grading."
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
            "6.webp",
            "7.webp",
            "8.webp",
            "9.webp",
            "10.webp",
            "11.webp",
            "12.webp",
            "13.webp",
            "14.webp",
            "15.webp",
            "16.webp",
            "17.webp"
        ]
    }
</script>

<Project project={goliath}/>



<script>
    import Project from "../../../../components/project.svelte";

    let husky = {
        name: "Husky",
        location: "Gold Bar, Edmonton, AB",
        started: 2020,
        status: "Completed",
        designer: "Brenden Wiun & Kurtis Wiun",
        imageFolder: "/images/projects/homes/husky/",
        conceptImage: "scan.webp",
        text: [
            "Description: Custom 2-storey home, located on a cul-de-sac in Gold Bar. Features 3 Bedrooms, 2.5 Bathrooms, and over 2100 sq.ft of high-quality finished living space. The main entertaining level showcases engineered white oak flooring, 10’ ceilings, a gas fireplace, custom steel railings, and a dry bar/study with a beverage center. The kitchen features a 15\’ quartz island, upgraded KitchenAid appliances, a gas range, and a large pantry with a custom barn door. A generous mudroom with multiple closets and built-in seating is located at the back of the house. The upper level features a large open stairwell with open riser stairs and ample windows to serve as a light well for all levels of the home, including the basement. Spacious secondary bedrooms feature oversized built-in closets. The owner\’s suite is accompanied by an oversized ensuite with a stand-alone tub and built-in shower (waterproofed with the Schluter system and backed up by cement board). The exterior features James Hardie, board and batten, cedar accents with custom metal flashing, and an impressive custom concrete deck/planter. Complete with double car garage and landscaping."   
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
            "12.webp",
            "13.webp",
            "14.webp",
            "15.webp",
            "16.webp",
            "17.webp"
        ]
    }
</script>

<Project project={husky}/>

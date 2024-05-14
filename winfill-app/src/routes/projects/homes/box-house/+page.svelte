
<script>
    import Project from "../../../../components/project.svelte";

    let boxHouse = {
        name: "Box House",
        category: "Homes",
        location: "Riverdale, Edmonton, AB",
        started: 2020,
        status: "Completed",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "homes/box-house/",
        conceptImage: "scan.webp",
        text: [
            "Description: This versatile 2400 s.f. home features 3 Bedrooms and 2.5 Baths designed around a unique mid-home courtyard. On the main floor, the courtyard brings abundant natural light to the chefs inspired kitchen and the formal dining room while providing a secluded outdoor cooking, living, and dining space off the kitchen. Finishes on the main floor include engineered hardwood flooring, 10’ ceilings, and a gas fireplace. The kitchen features quartz countertops, an oversized island, upgraded KitchenAid appliances, a gas range, and a built-in breakfast nook for informal dining. At the back of the home, you will find a formal dining room, an office overlooking a treed backyard, a half bath, and a generous mudroom with multiple storage closets.",
            "The staircase features a floor-to-ceiling glass wall keeping the main floor open, as well as engineered hardwood waterfall risers complete with custom nosing and matching white oak rail. On the upper level, the courtyard creates a private ensuite at the back of the home, separate from the secondary living space, bedrooms, and laundry room. The owner’s suite overlooks the backyard, with custom built-in wardrobes and a walk-in closet. A bright oversized ensuite with a wet room with a freestanding tub, built-in shower, and heated floors accompanies the owner’s suite. The secondary bedrooms include large built-in closets and a shared ensuite. All aspects of this home were meticulously designed to enhance the livable space; high-end plumbing and light fixtures, along with their optimized layout, are evident as soon as you enter the house.",
            "The front façade features a towering brick feature wall complemented by a dark cedar alcove. A 24-foot-tall custom-fabricated steel column perched on top of a custom concrete deck ties together the frontelevation strikingly. Complete with a double-car garage, oversized backyard, and rough grading."
        ],
        video: "/video/video-screenshot.webp",
        images: [
            "e1.webp",
            "e2.webp",
            "e3.webp",
            "e4.webp",
            "e5.webp",
            "e6.webp",
            "yeg.webp",
            "e7.webp",
            "e8.webp",
            "e9.webp",
            "i1.webp",
            "e10.webp",
            "e11.webp",
            "i2.webp",
            "i3.webp",
            "i4.webp",
            "i5.webp",
            "i6.webp",
            "i7.webp",
            "i8.webp",
            "i9.webp",
            "i10.webp",
            "e12.webp",
            "i11.webp"
        ]
    }
</script>

<Project project={boxHouse}/>
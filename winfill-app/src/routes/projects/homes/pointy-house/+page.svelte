<script>
    import Project from "../../../../components/project.svelte";

    let pointyHouse = {
        name: "Pointy House",
        category: "Homes",
        location: "Riverdale, Edmonton, AB",
        started: 2023,
        status: "Under Construction",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "homes/pointy-house/",
        conceptImage: "scan.webp",
        text: [
            "Description: The neighboring home of the Box House, this custom 2350 s.f. 2-Storey infill home features a unique minimal gable design. 10044 features 3 bedrooms, 2.5 bathrooms, and an office workspace. The main entertaining level takes advantage of open concept design, creating a flowing space from semi-private office, to living, to dining, to the kitchen, while interior design decisions provide clear breaks in space usage. Finishes on the main floor include engineered flooring, 10\’ ceilings, and a gas fireplace. The galley kitchen features a quartz island, upgraded KitchenAid appliances, a gas range, bar seating, and a large pantry with custom shelving and a barn door. The kitchen opens onto the back deck for easy outdoor cooking and a view of the oversized backyard. The staircase features floor-to-ceiling glass wall keeping the main floor open, and engineered hardwood waterfall risers complete with custom nosing.",
            "On the upper level, the owners\’ suite looks onto the tree-lined streets of Riverdale with huge floor-to-ceiling windows that are nestled into the 14\’ vaulted ceiling. Directly off the owner’s suite is a covered deck to take in all Riverdale offers. The owner’s suite has an oversized ensuite with a custom shower, a freestanding tub, and an attached walk-in closet that will not disappoint. The secondary bedrooms feature large built-in closets and a shared ensuite.",
            "The exterior features an all cedar front, complete with cedar soffit encompassing the inset second level front deck. The second-storey deck has a custom cedar privacy screen and topless glass railing. A custom concrete deck ties together the front elevation on the ground level for maximum street engagement. Complete with double car garage and rough grading."
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
            "8.webp"
        ]
    }
</script>

<Project project={pointyHouse}/>
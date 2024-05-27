import type { Project, Projects, ProjectGroups } from '$lib/project-types';

export const imagePath = "./images/projects/";

export const projectGroups: ProjectGroups = [
    {
        name: 'Homes',
        id: 'homes',
        text: "Crafting distinctive homes that bring your vision to life, we're not just building houses &mdash; we're creating the backdrop for a lifetime of memories.",
        imagesPerRow: 2,
        projects: [
            { source: "BoxHouse.webp", route: "box-house", alt: "Box House"},
            { source: "PointyHouse.webp", route: "pointy-house", alt: "Pointy House"},
            { source: "Husky.webp", route: "husky", alt: "Husky"},
            { source: "Goliath.webp", route: "goliath", alt: "Goliath"},
            { source: "AAA.webp", route: "aaa", alt: "AAA"},
            { source: "Wedge.webp", route: "wedge", alt: "Wedge"},
            { source: "RiverdaleResidence.webp", route: "riverdale-residence", alt: "Riverdale Residence"}
        ]
    },
    {
        name: "Multi-Family",
        id: "multi-family",
        text: "Building Multi-Family developments where every detail is designed and built with the tenant and owner in mind, we create spaces that foster connections and turn neighbors into lifelong friends.",
        imagesPerRow: 1,
        projects: [
            { source: "Triplex.webp", route: "inglewood-triplex", alt: "Inglewood Triplex"}
        ]
    },
    {
        name: "Small Projects",
        id: "small-projects",
        text: "Small-scale projects that matter, we bring your ideas to life from playhouses to custom furniture. All are designed and built in-house with a personal touch, crafted to your exact needs.",
        imagesPerRow: 3,
        projects: [
            { source: "PlayHouse.webp", route: "lets-play", alt: "Play House"},
            { source: "Concrete.webp", route: "concrete", alt: "Concrete"},
            { source: "Furniture.webp", route: "furniture", alt: "Furniture"},
        ]
    },
    {
        name: "For Sale",
        id: "for-sale",
        text: "Looking for a move-in ready home or plot for your dream home? We may be able to help.",
        imagesPerRow: 2,
        projects: [
            { source: "Allendale.webp", route: "allendale", alt: "Allendale"},
            { source: "Strathearn.webp", route: "strathearn", alt: "Strathearn"},
        ]
    }
];

export const projects: Projects = [
    // Homes
    {
        name: "AAA",
        category: "Homes",
        location: "Alberta Ave, Edmonton, AB",
        started: 2024,
        status: "Under Construction",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "aaa",
        conceptImage: "scan.webp",
        text: [
            "Description: Currently in permitting, this rear addition will be situated on a beautiful 110-year-old home in the Alberta Ave neighborhood. Winfill will replace an existing addition while bringing the design more in line with the traditional style of the home and improving the exterior envelope to allow the clients to enjoy their home for years to come.",
            "The addition takes styling cues from the rooflines of the facade of the home while interfacing with existing second-floor windows. The interior floor plan was also optimized to the current owners needs. The addition will be clad in traditional cedar painted white, cedar shakes, and burgundy accents."
        ],
        video: {
            id: "SLBspkzG9s8",
            altThumb: "/video/video-screenshot.webp"
        },
        images: [
            "1.webp",
            "2.webp",
            "3.webp",
            "4.webp",
            "5.webp",
            "6.webp"
        ]
    },
    {
        name: "Box House",
        category: "Homes",
        location: "Riverdale, Edmonton, AB",
        started: 2020,
        status: "Completed",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "box-house",
        conceptImage: "scan.webp",
        text: [
            "Description: This versatile 2400 s.f. home features 3 Bedrooms and 2.5 Baths designed around a unique mid-home courtyard. On the main floor, the courtyard brings abundant natural light to the chefs inspired kitchen and the formal dining room while providing a secluded outdoor cooking, living, and dining space off the kitchen. Finishes on the main floor include engineered hardwood flooring, 10’ ceilings, and a gas fireplace. The kitchen features quartz countertops, an oversized island, upgraded KitchenAid appliances, a gas range, and a built-in breakfast nook for informal dining. At the back of the home, you will find a formal dining room, an office overlooking a treed backyard, a half bath, and a generous mudroom with multiple storage closets.",
            "The staircase features a floor-to-ceiling glass wall keeping the main floor open, as well as engineered hardwood waterfall risers complete with custom nosing and matching white oak rail. On the upper level, the courtyard creates a private ensuite at the back of the home, separate from the secondary living space, bedrooms, and laundry room. The owner’s suite overlooks the backyard, with custom built-in wardrobes and a walk-in closet. A bright oversized ensuite with a wet room with a freestanding tub, built-in shower, and heated floors accompanies the owner’s suite. The secondary bedrooms include large built-in closets and a shared ensuite. All aspects of this home were meticulously designed to enhance the livable space; high-end plumbing and light fixtures, along with their optimized layout, are evident as soon as you enter the house.",
            "The front façade features a towering brick feature wall complemented by a dark cedar alcove. A 24-foot-tall custom-fabricated steel column perched on top of a custom concrete deck ties together the frontelevation strikingly. Complete with a double-car garage, oversized backyard, and rough grading."
        ],
        video: {
            id: "SLBspkzG9s8",
            altThumb: "/video/video-screenshot.webp"
        },
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
    },
    {
        name: "Goliath",
        category: "Homes",
        location: "Gold Bar, Edmonton, AB",
        started: 2021,
        status: "Completed",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "goliath",
        conceptImage: "scan.webp",
        text: [
            "As the neighboring home of the Husky, we pulled design cues from of the Husky but strived to create a unique offering. The custom 2-storey home offers something rare to the lot split market with its stepped design at 34 feet wide vs. the standard 17-foot lot split. 10623 features 3 Bedrooms, 2.5 Bathrooms, an office workspace, and over 2150 sq.ft of high-quality finished living space. The main entertaining level is truly open concept designed. Hence, the main floor functions cyclically, while interior design decisions provide clear breaks in space usage. The main floor showcases engineered white oak flooring, 10\’ ceilings, a gas fireplace, custom metal railings, and a dry bar with a beverage center. The two-tone custom kitchen features a quartz island, upgraded KitchenAid appliances, a gas range, and a sizeable linear pantry with a floor-to-ceiling window. An office workspace overlooking the oversized backyard, complete with custom metal french doors, is located at the back of the house. The upper level features open-rise stairs and spacious secondary bedrooms. The owner\’s suite is accompanied by an oversized ensuite with a custom wet room (waterproofed with the Schluter system and backed up by cement board). The exterior features black James Hardie board and batten, a natural cedar accent nook with seamlessly wrapped cedar on the soffit with a custom fabricated metal column, and a custom concrete deck. Complete with double car garage and rough grading."
        ],
        video: {
            id: "SLBspkzG9s8",
            altThumb: "/video/video-screenshot.webp"
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
    },
    {
        name: "Husky",
        category: "Homes",
        location: "Gold Bar, Edmonton, AB",
        started: 2020,
        status: "Completed",
        designer: "Brenden Wiun & Kurtis Wiun",
        inHouse: true,
        route: "husky",
        conceptImage: "scan.webp",
        text: [
            "Description: Custom 2-storey home, located on a cul-de-sac in Gold Bar. Features 3 Bedrooms, 2.5 Bathrooms, and over 2100 sq.ft of high-quality finished living space. The main entertaining level showcases engineered white oak flooring, 10’ ceilings, a gas fireplace, custom steel railings, and a dry bar/study with a beverage center. The kitchen features a 15\’ quartz island, upgraded KitchenAid appliances, a gas range, and a large pantry with a custom barn door. A generous mudroom with multiple closets and built-in seating is located at the back of the house. The upper level features a large open stairwell with open riser stairs and ample windows to serve as a light well for all levels of the home, including the basement. Spacious secondary bedrooms feature oversized built-in closets. The owner\’s suite is accompanied by an oversized ensuite with a stand-alone tub and built-in shower (waterproofed with the Schluter system and backed up by cement board). The exterior features James Hardie, board and batten, cedar accents with custom metal flashing, and an impressive custom concrete deck/planter. Complete with double car garage and landscaping."   
        ],
        video: {
            id: "SLBspkzG9s8",
            altThumb: "/video/video-screenshot.webp"
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

    },
    {
        name: "Pointy House",
        category: "Homes",
        location: "Riverdale, Edmonton, AB",
        started: 2023,
        status: "Under Construction",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "pointy-house",
        conceptImage: "scan.webp",
        text: [
            "Description: The neighboring home of the Box House, this custom 2350 s.f. 2-Storey infill home features a unique minimal gable design. 10044 features 3 bedrooms, 2.5 bathrooms, and an office workspace. The main entertaining level takes advantage of open concept design, creating a flowing space from semi-private office, to living, to dining, to the kitchen, while interior design decisions provide clear breaks in space usage. Finishes on the main floor include engineered flooring, 10\’ ceilings, and a gas fireplace. The galley kitchen features a quartz island, upgraded KitchenAid appliances, a gas range, bar seating, and a large pantry with custom shelving and a barn door. The kitchen opens onto the back deck for easy outdoor cooking and a view of the oversized backyard. The staircase features floor-to-ceiling glass wall keeping the main floor open, and engineered hardwood waterfall risers complete with custom nosing.",
            "On the upper level, the owners\’ suite looks onto the tree-lined streets of Riverdale with huge floor-to-ceiling windows that are nestled into the 14\’ vaulted ceiling. Directly off the owner’s suite is a covered deck to take in all Riverdale offers. The owner’s suite has an oversized ensuite with a custom shower, a freestanding tub, and an attached walk-in closet that will not disappoint. The secondary bedrooms feature large built-in closets and a shared ensuite.",
            "The exterior features an all cedar front, complete with cedar soffit encompassing the inset second level front deck. The second-storey deck has a custom cedar privacy screen and topless glass railing. A custom concrete deck ties together the front elevation on the ground level for maximum street engagement. Complete with double car garage and rough grading."
        ],
        video: {
            id: "SLBspkzG9s8",
            altThumb: "/video/video-screenshot.webp"
        },
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
    },
    {
        name: "Riverdale Residence",
        category: "Homes",
        location: "Gold Bar, Edmonton, AB",
        started: 2020,
        status: "Completed",
        designer: "Brenden Wiun & Kurtis Wiun",
        inHouse: true,
        route: "riverdale-residence",
        conceptImage: "scan.webp",
        text: [
            "Description: "   
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
            "5.webp"
        ]
    },
    {
        name: "Wedge",
        category: "Homes",
        location: "Beverly, Calgary, AB",
        started: 2023,
        status: "Under Construction",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "wedge",
        conceptImage: "scan.webp",
        text: [
            "Description: Currently under construction, this Four Seasons Room will be situated on a beautiful Midcentury home in the Belaire neighborhood. Large setbacks enforced by the restricted covenant led us to follow the property line on an angled addition to maximize space. The Four Seasons room will contain a swim spa wood-burning fireplace and exercise equipment allowing the owners to enjoy their favorite activities close to home in their forever home.",
            "The addition strived to integrate this unique footprint into the existing home, beginning with a miter glass corner softening the front and ending with access to the backyard for entertainment. Clad in stucco and stone, the addition fits into the pallet while introducing wood gives the addition a warm feeling, blending it into the heavily treed side yard with 10\’ setback."
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
            "6.webp",
            "7.webp",
            "8.webp",
            "9.webp",
            "10.webp",
            "11.webp",
            "12.webp"
        ]
    },
    // Multi Family
    {
        name: "Inglewood 3+3",
        category: "Multi-Family",
        location: "Inglewood, Edmonton, AB",
        started: 2024,
        status: "Under Construction",
        designer: "Thomas Perl",
        inHouse: false,
        route: "inglewood-triplex",
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
    },
    // For Sale
    {
        name: "Strathearn",
        category: "For-Sale",
        location: "",
        started: 0,
        status: "For Sale",
        designer: "",
        inHouse: false,
        route: "strathearn",
        conceptImage: "",
        text: [
            "Description:"
        ],
        video: {
            id: "SLBspkzG9s8",
            altThumb: "/video/video-screenshot.webp",
        },
        images: [
            ""
        ]
    },
    {
        name: "Allendale",
        category: "For-Sale",
        location: "",
        started: 0,
        status: "For Sale",
        designer: "",
        inHouse: false,
        route: "allendale",
        conceptImage: "",
        text: [
            "Description:"
        ],
        video: {
            id: "SLBspkzG9s8",
            altThumb: "/video/video-screenshot.webp",
        },
        images: [
            ""
        ]
    },
    // Small Projects
    {
        name: "",
        category: "Small-Projects",
        location: "",
        status: "Small Projects",
        designer: "",
        route: "small-project",
    }
]
import type { MixedProjects, ProjectGroups } from '$lib/project-types';

export const projectGroups: ProjectGroups = [
    { //Homes
        name: 'Homes',
        id: 'homes',
        text: "Crafting distinctive homes that bring your vision to life, we are not just building houses &mdash; we're creating the backdrop for a lifetime of memories.",
        imagesPerRow: 2,
        projects: [
            { source: "BoxHouse.webp", route: "box-house", alt: "Box House" },
            { source: "PointyHouse_2.webp", route: "pointy-house", alt: "Pointy House" },
            { source: "Husky.webp", route: "husky", alt: "Husky" },
            { source: "Goliath.webp", route: "goliath", alt: "Goliath" },
            
            { source: "RiverdaleResidence.webp", route: "riverdale-residence", alt: "Riverdale Residence" }
        ]
    },
    { //Multi Family
        name: "Multi-Family",
        id: "multi-family",
        text: "Building Multi-Family developments where every detail is designed and built with the tenant and owner in mind, we create spaces that foster connections and turn neighbours into lifelong friends.",
        imagesPerRow: 2,
        projects: [
            { source: "inglewood-triplex/01.webp", route: "inglewood-triplex", alt: "Inglewood Triplex" }
        ]
    },
    { //Renovations
        name: "Renovations",
        id: "renovations",
        text: "Tailoring existing homes to your needs and wants. We take pride in integrating a cohesive design language into renovations, ensuring harmony between new additions and existing conditions.",
        imagesPerRow: 2,
        projects: [
            { source: "AAA.webp", route: "aaa", alt: "AAA" },
            { source: "Wedge.webp", route: "wedge", alt: "Wedge" }
        ]
    },
    { //Small Projects
        name: "Small Projects",
        id: "small-projects",
        text: "Small-scale projects that matter, we bring your ideas to life from playhouses to custom furniture. All are designed and built in-house with a personal touch, crafted to your exact needs.",
        imagesPerRow: 3,
        projects: [
            { source: "Furniture.webp", route: "furniture", alt: "Furniture" },
            { source: "PlayHouse.webp", route: "lets-play", alt: "Play House" },
            { source: "Concrete.webp", route: "concrete", alt: "Concrete" },   
        ]
    },
    { //For Sale
        name: "For Sale",
        id: "for-sale",
        text: "Looking for a move-in ready home or plot for your dream home? We may be able to help.",
        imagesPerRow: 2,
        projects: [
            { source: "", route: "", alt: "No Inventory" },
        ]
    }
];

export const projects: MixedProjects = [
    // Homes
    { //AAA
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
            "Currently under construction, this rear addition will be situated on a beautiful 110-year-old home in the Alberta Ave neighbourhood. Winfill will replace an existing addition while bringing the design more in line with the traditional style of the home and improving the exterior envelope to allow the clients to enjoy their home for years to come.",
            "The addition takes styling cues from the rooflines of the facade of the home while interfacing with existing second-floor windows. The interior floor plan was also optimized to the current owners needs. The addition will be clad in recycled cedar painted white, cedar shakes, and burgundy accents."
        ],
        images: [
            { path: "1.webp", width: 5, height: 4, side: 'left' },
            { path: "5.webp", width: 4, height: 4, side: 'right' },
            { path: "3.webp", width: 5, height: 5, side: 'left' },
            { path: ["6.webp","4.webp"], width: 4, height: 1, side: 'right' },
            //{ path: "4.webp", width: 2, height: 1, side: 'right', start: 9 },
            { path: "2.webp", width: 4, height: 4, side: 'right' }
        ]
    },
    { //Box House
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
            "This versatile 2400 s.f. home features 3 Bedrooms and 2.5 Baths designed around a unique mid-home courtyard. On the main floor, the courtyard brings abundant natural light to the chefs inspired kitchen and the formal dining room while providing a secluded outdoor cooking, living, and dining space off the kitchen. Finishes on the main floor include engineered hardwood flooring, 10’ ceilings, and a gas fireplace. The kitchen features quartz countertops, an oversized island, upgraded KitchenAid appliances, a gas range, and a built-in breakfast nook for informal dining. At the back of the home, you will find a formal dining room, an office overlooking a treed backyard, a half bath, and a generous mudroom with multiple storage closets.",
            "The staircase features a floor-to-ceiling glass wall keeping the main floor open, as well as engineered hardwood waterfall risers complete with custom nosing and matching white oak rail. On the upper level, the courtyard creates a private ensuite at the back of the home, separate from the secondary living space, bedrooms, and laundry room. The owner’s suite overlooks the backyard, with custom built-in wardrobes and a walk-in closet. A bright oversized ensuite with a wet room with a freestanding tub, built-in shower, and heated floors accompanies the owner’s suite. The secondary bedrooms include large built-in closets and a shared ensuite. All aspects of this home were meticulously designed to enhance the livable space; high-end plumbing and light fixtures, along with their optimized layout, are evident as soon as you enter the house.",
            "The front façade features a towering brick feature wall complemented by a dark cedar alcove. A 24-foot-tall custom-fabricated steel column perched on top of a custom concrete deck ties together the frontelevation strikingly. Complete with a double-car garage, oversized backyard, and landscaping."
        ],
        video: {
            id: "880fEYFqtMA",
            altThumb: "/images/youtube/box.webp"
        },
        images: [
            { path: "e1.webp", width: 5, height: 6, side: 'left' },
            { path: "e2.webp", width: 4, height: 3, side: 'right' },
            { path: ["e3.webp","e4.webp"], width: 4, height: 2, side: 'right' },
            //{ path: "e4.webp", width: 2, height: 2, side: 'right', start: 9 },
            { path: "e6.webp", width: 4, height: 5, side: 'right' },
            { path: "e5.webp", width: 5, height: 5, side: 'left' },
            { path: "e7.webp", width: 4, height: 3, side: 'right' },
            { path: "yeg.webp", width: 5, height: 4, side: 'left' },
            { path: "e9.webp", width: 4, height: 4, side: 'right' },
            { path: "e8.webp", width: 5, height: 4, side: 'left' },
            { path: ["e10.webp","e11.webp"], width: 4, height: 3, side: 'right' },
            //{ path: "e11.webp", width: 2, height: 3, side: 'right', start: 9 },
            { path: "i1.webp", width: 5, height: 4, side: 'left' },
            { path: "i2.webp", width: 4, height: 3, side: 'right' },
            { path: "i3.webp", width: 5, height: 4, side: 'left' },
            { path: "i4.webp", width: 4, height: 4, side: 'right' },
            { path: "i5.webp", width: 5, height: 5, side: 'left' },
            { path: "i6.webp", width: 4, height: 3, side: 'right' },
            { path: "i8.webp", width: 4, height: 5, side: 'right' },
            { path: "i7.webp", width: 5, height: 3, side: 'left' },
            { path: "i9.webp", width: 5, height: 5, side: 'left' },
            { path: "i10.webp", width: 4, height: 4, side: 'right' },
            { path: "i11.webp", width: 4, height: 5, side: 'right' },
            { path: "e12.webp", width: 5, height: 4, side: 'left' }
        ]
    },
    { //Goliath
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
            "As the neighboring home of the Husky, we pulled design cues from of the Husky but strived to create a unique offering. The custom 2-storey home offers something rare to the lot split market with its stepped design at 34 feet wide vs. the standard 17-foot lot split. The Goliath features 3 Bedrooms, 2.5 Bathrooms, an office workspace, and over 2150 sq.ft of high-quality finished living space. The main entertaining level is truly open concept designed. Hence, the main floor functions cyclically, while interior design decisions provide clear breaks in space usage. The main floor showcases engineered white oak flooring, 10' ceilings, a gas fireplace, custom metal railings, and a dry bar with a beverage center. The two-tone custom kitchen features a quartz island, upgraded KitchenAid appliances, a gas range, and a sizeable linear pantry with a floor-to-ceiling window. An office workspace overlooking the oversized backyard, complete with custom metal french doors, is located at the back of the house. The upper level features open-rise stairs and spacious secondary bedrooms. The owner's suite is accompanied by an oversized ensuite with a custom wet room (waterproofed with the Schluter system and backed up by cement board). The exterior features black James Hardie board and batten, a natural cedar accent nook with seamlessly wrapped cedar on the soffit with a custom fabricated metal column, and a custom concrete deck."
        ],
        video: { 
            id: "7frGnAvON5A",
            altThumb: "/images/youtube/goliath.webp"
        },
        images: [
            { path: "1.webp", width: 5, height: 4, side: 'left' },
            { path: "2.webp", width: 4, height: 5, side: 'right' },
            { path: "3.webp", width: 5, height: 3, side: 'left' },
            { path: "4.webp", width: 2, height: 2, side: 'right' },
            { path: "5.webp", width: 2, height: 2, side: 'right', start: 9 },
            { path: "6.webp", width: 5, height: 4, side: 'left' },
            { path: "7.webp", width: 4, height: 5, side: 'right' },
            { path: "8.webp", width: 5, height: 3, side: 'left' },
            { path: "9.webp", width: 4, height: 3, side: 'right' },
            { path: "10.webp", width: 5, height: 5, side: 'left' },
            { path: "11.webp", width: 4, height: 5, side: 'right' },
            { path: "12.webp", width: 5, height: 5, side: 'left' },
            { path: "13.webp", width: 2, height: 2, side: 'right' },
            { path: "14.webp", width: 2, height: 2, side: 'right', start: 9 },
            { path: "15.webp", width: 4, height: 3, side: 'right' },
            { path: "16.webp", width: 5, height: 4, side: 'left' },
            { path: "17.webp", width: 4, height: 4, side: 'right' }
        ]
    },
    { //Husky
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
            "Custom 2-storey home, located on a cul-de-sac in Gold Bar. Features 3 Bedrooms, 2.5 Bathrooms, and over 2100 sq.ft of high-quality finished living space. The main entertaining level showcases engineered white oak flooring, 10’ ceilings, a gas fireplace, custom steel railings, and a dry bar/study with a beverage center. The kitchen features a 15' quartz island, upgraded KitchenAid appliances, a gas range, and a large pantry with a custom barn door. A generous mudroom with multiple closets and built-in seating is located at the back of the house. The upper level features a large open stairwell with open riser stairs and ample windows to serve as a light well for all levels of the home, including the basement. Spacious secondary bedrooms feature oversized built-in closets. The owner's suite is accompanied by an oversized ensuite with a stand-alone tub and built-in shower (waterproofed with the Schluter system and backed up by cement board). The exterior features James Hardie, board and batten, cedar accents with custom metal flashing, and an impressive custom concrete deck/planter. Complete with double car garage and landscaping."
        ],
        video: {
            id: "B4bZSz7c9Ds",
            altThumb: "/images/youtube/husky.webp"
        },
        images: [
            
            { path: "1.webp", width: 5, height: 5, side: 'left' },
            { path: "2.webp", width: 4, height: 3, side: 'right' },
            { path: "3.webp", width: 4, height: 3, side: 'right' },
            { path: "4.webp", width: 5, height: 4, side: 'left' },
            { path: "5.webp", width: 4, height: 3, side: 'right' },
            { path: "6.webp", width: 5, height: 5, side: 'left' },
            { path: "7.webp", width: 4, height: 4, side: 'right' },
            { path: "9.webp", width: 4, height: 3, side: 'right' },
            { path: "8.webp", width: 5, height: 4, side: 'left' },
            { path: "11.webp", width: 4, height: 3, side: 'right' }, 
            { path: "10.webp", width: 5, height: 4, side: 'left' },
            { path: "13.webp", width: 4, height: 5, side: 'right' },
            { path: "12.webp", width: 5, height: 5, side: 'left' },
            { path: "15.webp", width: 4, height: 3, side: 'right' },
            { path: "14.webp", width: 5, height: 4, side: 'left' },
            { path: "17.webp", width: 4, height: 5, side: 'right' },
            { path: "16.webp", width: 5, height: 3, side: 'left' }
        ]

    },
    { //Pointy House
        name: "Pointy House",
        category: "Homes",
        location: "Riverdale, Edmonton, AB",
        started: 2023,
        status: "Complete",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "pointy-house",
        conceptImage: "scan.webp",
        text: [
            "The neighboring home of the Box House, this custom 2350 s.f. 2-Storey infill home features a unique minimal gable design. The Pointy House features 3 bedrooms, 2.5 bathrooms, and an office workspace. The main entertaining level takes advantage of open concept design, creating a flowing space from semi-private office, to living, to dining, to the kitchen, while interior design decisions provide clear breaks in space usage. Finishes on the main floor include engineered flooring, 10' ceilings, and a gas fireplace. The galley kitchen features a quartz island, upgraded KitchenAid appliances, a gas range, bar seating, and a large pantry with custom shelving and a barn door. The kitchen opens onto the back deck for easy outdoor cooking and a view of the oversized backyard. The staircase features floor-to-ceiling glass wall keeping the main floor open, and engineered hardwood waterfall risers complete with custom nosing.",
            "On the upper level, the owners' suite looks onto the tree-lined streets of Riverdale with huge floor-to-ceiling windows that are nestled into the high vaulted ceiling. Directly off the owner’s suite is a covered deck to take in all Riverdale offers. The owner’s suite has an oversized ensuite with a custom shower, a freestanding tub, and an attached walk-in closet. The secondary bedrooms feature large built-in closets and a shared ensuite.",
            "The exterior features an all cedar front, complete with cedar soffit encompassing the inset second level front deck. The second-storey deck has a custom cedar privacy screen and topless glass railing. A custom concrete deck ties together the front elevation on the ground level for maximum street engagement."
        ],
        video: {
            id: "GcUH7OyY8nQ",
            altThumb: "/images/youtube/pointy.webp"
        },
        images: [
            { path: "Pointy-1.webp", width: 5, height: 6, side: 'left' },
            { path: "PointyHouse_2.webp", width: 4, height: 4, side: 'right' },
            { path: "2.webp", width: 4, height: 3, side: 'right' },
            { path: "4.webp", width: 5, height: 4, side: 'left' },
            { path: "_DSC1250.webp", width: 4, height: 3, side: 'right' },
            { path: "_DSC1244.webp", width: 5, height: 7, side: 'left' },
            { path: "_DSC1239.webp", width: 4, height: 3, side: 'right' },

            { path: "_DSC1247.webp", width: 4, height: 3, side: 'right' },
            { path: "_DSC1238.webp", width: 4, height: 6, side: 'right' },
            { path: "IMG_8849.webp", width: 5, height: 4, side: 'left' },
            
            { path: "_DSC1214.webp", width: 5, height: 4, side: 'left' },
            { path: ["_DSC1353.webp","_DSC1256.webp"], width: 4, height: 3, side: 'right' },
            { path: "_DSC1192.webp", width: 5, height: 7, side: 'left' },
            { path: "_DSC1228.webp", width: 4, height: 5, side: 'right' },
            { path: ["IMG_8823.webp","_DSC1196.webp"], width: 4, height: 3, side: 'right' },
            { path: "_DSC1224.webp", width: 5, height: 4, side: 'left' },
            { path: "_DSC1368.webp", width: 4, height: 5, side: 'right' },
            { path: "IMG_8895.webp", width: 5, height: 4, side: 'left' },
            { path: "IMG_8907.webp", width: 4, height: 3, side: 'right' },
            { path: "_DSC1268.webp", width: 5, height: 4, side: 'left' },
            { path: "_DSC1283.webp", width: 4, height: 6, side: 'right' },
            { path: "IMG_8948.webp", width: 5, height: 4, side: 'left' },
            { path: ["_DSC1362.webp","_DSC1360.webp"], width: 4, height: 2, side: 'right' },
            { path: "_DSC1273.webp", width: 5, height: 6, side: 'left' },
            
            { path: "_DSC1359.webp", width: 4, height: 3, side: 'right' },
            { path: "IMG_8974.webp", width: 4, height: 3, side: 'right' }
        ]
    },
    { //Riverdale Residence
        name: "Riverdale Residence",
        category: "Homes",
        location: "Riverdale, Edmonton, AB",
        status: "Completed",
        designer: "Kurtis Wiun",
        inHouse: true,
        route: "riverdale-residence",
        conceptImage: "scan.webp",
        text: [
            "Located on the slopes of Riverdale overlooking downtown Edmonton, this home blends classic detailing with modern design cues. Its exterior is clad with a blend of brick and vertical cedar, creating a warm, inviting presence thats complements its surroundings in Riverdale's unique mix of housing. Stone accents subtly enhance its facade, offering a nod to traditional craftmanship in a modern context. Its repetition of symmetry calls back to the symmetry of Georgian homes, with the cedar mass reflected in the masonry door build-out.",
            "The home reaches its pinnacle with a third-floor owner's suite with patios at the front and rear. A vaulted cedar roof, cantilevers 3' over the patio with glulam ridge beams and large glass panes to blend interior and exterior space."
        ],
        images: [
            { path: "1.webp", width: 5, height: 5, side: 'left' },
            { path: "2.webp", width: 4, height: 5, side: 'right' },
            { path: "3.webp", width: 5, height: 4, side: 'left' },
            { path: "4.webp", width: 4, height: 4, side: 'right' },
            { path: "5.webp", width: 5, height: 4, side: 'left' }
        ]
    },
    { //Wedge
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
            "Currently under construction, this Four Seasons Room will be situated on a beautiful Midcentury home in the Belaire neighborhood. Large setbacks enforced by the restricted covenant led us to follow the property line on an angled addition to maximize space. The Four Seasons room will contain a swim spa wood-burning fireplace and exercise equipment allowing the owners to enjoy their favorite activities close to home in their forever home.",
            "The addition strived to integrate this unique footprint into the existing home, beginning with a miter glass corner softening the front and ending with access to the backyard for entertainment. Clad in stucco and stone, the addition fits into the pallet while introducing wood gives the addition a warm feeling, blending it into the heavily treed side yard with 10' setback."
        ],
        images: [
            { path: "1.webp", width: 5, height: 5, side: 'left' },
            { path: "3.webp", width: 4, height: 3, side: 'right' },
            { path: "4.webp", width: 4, height: 4, side: 'right' },
            { path: "6.webp", width: 5, height: 4, side: 'left' },
            { path: "7.webp", width: 4, height: 4, side: 'right' },
            { path: "5.webp", width: 5, height: 4, side: 'left' },
            { path: ["8.webp","12.webp"], width: 4, height: 2, side: 'right' },
            //{ path: "12.webp", width: 2, height: 2, side: 'right', start: 9 },
            { path: "11.webp", width: 5, height: 6, side: 'left' },
            { path: "9.webp", width: 4, height: 4, side: 'right' }
        ]
    },
    // Multi Family
    { //Inglewood Triplex
        name: "Inglewood 3+3",
        category: "Multi-Family",
        location: "Inglewood, Edmonton, AB",
        started: 2024,
        status: "Completed",
        designer: "Thomas Perl",
        inHouse: false,
        route: "inglewood-triplex",
        conceptImage: "scan.webp",
        text: [
            "The Inglewood Triplex features 6 individual units above ground and 3 basement suites, totaling 5,299 s.f. of total finished living space. The structure includes 6 kitchens, 6 laundry rooms, 9 bedrooms, and 12 bathrooms. The exterior of the building features stucco and cedar accents as well as three skylights, and a complex basement courtyard entryway. Winfill oversaw the construction a 3-car garage and the full landscaping scope. This project featured the first interior lot Low Impact Development constructed in the City of Edmonton.",
            "Although, Winfill did not complete the design for our client on this project we were brought in early in the project development phase as a pre-construction advisor consulting on constructability and providing value engineering suggestions."
        ],
        video: {
            id: "Wo-FxMZgqH0",
            altThumb: "/images/youtube/triplex.webp" 
        },
        images: [
            { path: "01.webp", width: 5, height: 5, side: 'left' },
            { path: "02.webp", width: 4, height: 3, side: 'right' },
            { path: "03.webp", width: 4, height: 4, side: 'right' },
            { path: "04.webp", width: 5, height: 4, side: 'left' },
            { path: "05.webp", width: 4, height: 5, side: 'right' },
            { path: "06.webp", width: 5, height: 4, side: 'left' },
            { path: "09.webp", width: 4, height: 4, side: 'right' },
            { path: ["07.webp","08.webp"], width: 5, height: 2, side: 'left' },
           // { path: "08.webp", width: 3, height: 4, side: 'left', start: 4 },
            { path: "10.webp", width: 5, height: 4, side: 'left' }, 
            { path: "11.webp", width: 4, height: 5, side: 'right' },
            
            { path: "12.webp", width: 5, height: 4, side: 'left' },
            { path: "13.webp", width: 4, height: 5, side: 'right' },
            { path: "14.webp", width: 5, height: 6, side: 'left' },
            { path: "15.webp", width: 4, height: 3, side: 'right' },
            
            { path: "16.webp", width: 5, height: 4, side: 'left' },
            { path: "17.webp", width: 4, height: 3, side: 'right' },
            { path: "18.webp", width: 4, height: 3, side: 'right' },
            { path: ["19.webp","20.webp"], width: 5, height: 2, side: 'left' },
            //{ path: "20.webp", width: 2, height: 2, side: 'left', start: 4},
            
            { path: "22.webp", width: 5, height: 4, side: 'left' },
            { path: "21.webp", width: 4, height: 3, side: 'right' },
        ]
    },
    // For Sale
    { //Strathearn
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
        images: []
    },
    { //Allendale
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
        images: []
    },
    // Small Projects
    { //Let's Play
        groupName: "Let's Play",
        route: "lets-play",
        group: [
            {
                name: "Let's Play!",
                designer: "Kurtis Wiun",
                inHouse: true,
                materials: "Cedar, Plywood, S.P.F.",
                
                text: [
                    `This mini infill was designed for a young client. This project was fun to design and build with more building details than meets the eye. 
                    The building envelope is a pond liner W.R.B. complete with rain screen, then clad in cedar. The pond liner envelope allowed us to maintain a 
                    watertight roof while continuing the mitered cedar boards on the roof plane to maintain continuous wrap effect. The interior walls are clad in plywood 
                    treated with a water based finish, with chalk wall accents.`
                ],
                images : [
                    { path: "playhouse-1.webp", width: 4, height: 4, side: 'left' },
                    { path: "playhouse-2.webp", width: 3, height: 3, side: 'left' },
                    { path: "playhouse-3.webp", width: 3, height: 3, side: 'right' },
                    { path: "playhouse-4.webp", width: 4, height: 4, side: 'left' }
                ]
            }
        ]
    },
    { //Concrete
        groupName: 'Concrete',
        route: "concrete",
        group: [
            {
                name: "Self-Perform Concrete",
                text: [
                    `One of our self-perform specialties is concrete work. Self-performing concrete allows us to enhance quality, efficiency, and affordability. 
                    By handling concrete tasks in-house, Winfill ensures a higher standard of craftsmanship, as our dedicated team is familiar with their specific 
                    standards and expectations. This control over the concrete process allows for greater precision. Additionally, it streamlines the construction 
                    timeline, eliminating the delays often associated with coordinating third-party contractors. Cost efficiency is another significant advantage, 
                    as we can manage expenses more effectively by avoiding subcontractor markups and optimizing material usage. Ultimately, self-performing concrete 
                    work translates to superior, timely, and cost-effective architectural concrete product.`
                ],
                images : [
                    { path: "concrete-1.webp", width: 3, height: 2, side: 'left' },
                    { path: "concrete-2.webp", width: 3, height: 2, side: 'right' },
                    { path: "concrete-3.webp", width: 3, height: 2, side: 'left' },
                    { path: "concrete-4.webp", width: 3, height: 2, side: 'right' },
                    { path: "concrete-5.webp", width: 3, height: 2, side: 'left' },
                    { path: "concrete-6.webp", width: 3, height: 2, side: 'right' },
                    { path: "concrete-7.webp", width: 3, height: 2, side: 'left' },
                    { path: "concrete-8.webp", width: 3, height: 2, side: 'right' },
                    { path: "concrete-9.webp", width: 3, height: 2, side: 'left' },
                    { path: "concrete-10.webp", width: 3, height: 2, side: 'right' }
                ]
            }
        ]
    },
    { //Furniture
        groupName: "Furniture",
        route: "furniture",
        group: [
            {
                name: "Shopping Cart",
                designer: "Kurtis Wiun",
                inHouse: true,
                materials: "Cold Rolled Steel Tube, Steel Mesh, Maple, Powder Coat, Sheep Skin",
                text: [
                    `Shopping Cart is a Stool plays with notions of proportional balance and industrial production methods. Its Stool, and a half proportion 
                    allows it to stand apart while being functionally more comfortable. Bent steel tubing forms the frame while a gently curved seat made of 
                    rolled welded mesh cradles the user. All parts of the frame are subsequently MIG welded, and then powder coated a gloss white. The cold and 
                    simple lines of the metal frame are warmed by light maple handrails coupled with a circular sheep hide.`
                ],
                images : [
                    
                    { path: "shoppingcart-1.webp", width: 3, height: 2, side: 'left' },
                    { path: "shoppingcart-3.webp", width: 3, height: 4, side: 'right' },
                    { path: "shoppingcart-2.webp", width: 3, height: 2, side: 'left' },
                    
                    
                ]
            },
            {
                name: "Slope",
                designer: "Kurtis Wiun",
                inHouse: true,
                materials: "Maple, Polished Aluminum, Lacquer",
                text: [
                    `Slope is a side table inspired by the work of Konstantin Grcic. It is constructed of maple, polished aluminium accents, and finished lacquer. 
                    Aesthetically, the table plays with the notions of support and weight with its elegant front support and heavy rear tapered dowel stack, allowing 
                    it to change its appearance depending on the angle of viewing. Its clean lines give it a minimalist feel, yet the dowels texture adds a pop of fun
                    to the design.`
                ],
                images : [
                    { path: "slope-1.webp", width: 3, height: 2, side: 'left' },
                    { path: "slope-2.webp", width: 3, height: 2, side: 'right' },
                    { path: "slope-3.webp", width: 3, height: 2, side: 'left' },
                    { path: "slope-4.webp", width: 3, height: 2, side: 'right' },
                ]
            },
            {
                name: "Hang",
                designer: "Kurtis Wiun",
                inHouse: true,
                materials: "Sandblasted Square Aluminium Tube, Sunbrella Fabric, Stainless Steel Rod, Baltic Birch",
                text: [
                    `Hang is a plant stand shelving system designed for mass production and flat packing in mind; built on a modular platform allowing for any combination
                    of shelves and baskets by the swapping of parts. Connectors are cast out of resin, square sandblasted aluminium tube is used throughout allowing for fast finishing.
                    Baskets are made from a heavy-duty outdoor fabric that is then laser cut to transform it into a basket.`
                ],
                images : [
                    
                    { path: "hang-1.webp", width: 3, height: 6, side: 'left' },
                    { path: "hang-2.webp", width: 3, height: 2, side: 'right' },
                    { path: "hang-3.webp", width: 3, height: 2, side: 'right' },
                    
                ]
            },
            {
                name: "Form Study",
                designer: "Kurtis Wiun",
                inHouse: true,
                materials: "Spruce Pine Glulam",               
                text: [
                    `The focus of this exploration was form not function. This chair was fabricated using leftover laminated Spruce Pine Glulam material from Western Archrib.`
                ],
                images : [
                    { path: "form-1.webp", width: 3, height: 4, side: 'left' },
                    { path: "form-2.webp", width: 3, height: 4, side: 'right' },
                ]
            },
            {
                name: "Stretch",
                designer: "Kurtis Wiun",
                inHouse: true,
                materials: "Baltic Birch, Bungie Cord, Acrylic",                
                text: [
                    `Stretch is an interactive and adaptive shelf meant to grow with your child. Stretch allows children to build their own shelf with interchangeable parts; 
                    elastic cord is wrapped around posts by the user allowing them to create their own path where objects are suspended.`,
                    `All posts are threaded allowing for the removal and addition of posts as well as the opportunity to interchange the posts for 1 of 3 sizes, this aids with storage of large
                    or small objects. Sets of colored disks are provided allowing your child to personalize their shelf. Two lengths of cord are also provided for flexibility`
                ],
                images : [
                    { path: "stretch-1.webp", width: 3, height: 4, side: 'left' },
                    { path: "stretch-2.webp", width: 3, height: 4, side: 'right' },
                ]
            },
            {
                name: "Build-O-Bench",
                designer: "Thomas Perl & Kurtis Wiun",
                inHouse: true,
                materials: "Powdercoated Steel Tube, Sunbrella Fabric, Stainless Steel Hardware",
                text: [
                    `To begin our design process for the Benchmarks Competition, we created guiding pillars, the pillars were formulated from the needs and wants set forth by
                    K-days and our secondary research. We explored the pillars through pages of hand-sketched ideation, later refining them in CAD, and then proceeding to render
                    them. Below are the pillars and how we fulfilled them:`,
                    [
                      `Portability: Can be disassembled for storage, has no parts over 15 pounds, and has limited fasteners.`,
                      `Durability: Powdercoated steel, durable, breathable and easy to recoat Sunbrella fabric.`,
                      `Sustainability (economic, social, enviro): Assembled from materials commonly used in local industry. Interchangeable fabric allows expanded use cases. Seat
                      height of 18” meets A.D.A. standards. Raised handles serve as an aid for mobility-impaired users, they also double as a backrest for the end seats.`,
                      `Materiality: Steel tube is featured throughout, referencing its broad use in rides on the Midway, the bright steel tube also references the bright lights that cover
                      the Midway. Bright Sunbrella fabric brings notions of “The Big Top” into our design, giving it the classic carnival aesthetic.`,
                      `Assembly: The assembly and disassembly of the Build O-Bench is meant to emulate that of the Midway rides themselves, breeding a similar aesthetic.`,
                      `Colour: The range of colour pallets is endless, with powdercoating allowing for the possibility to emulate the diversity of colours seen throughout the tents and rides at K-Days.`
                    ]
                ],
                images : [
                    { path: "build-o-bench-1.webp", width: 4, height: 3, side: 'left' },
                    { path: ["build-o-bench-2.webp","build-o-bench-3.webp","build-o-bench-4.webp"], width: 6, height: 2, side: 'left' },
                    //{ path: "build-o-bench-3.webp", width: 2, height: 2, side: 'right', start: 4 },
                    //{ path: "build-o-bench-4.webp", width: 2, height: 2, side: 'right', start: 6},
                    { path: "build-o-bench-5.webp", width: 6, height: 2, side: 'left' },
                ]
            }
        ]
        
    }
]
<script lang="ts">
  import Paragraph from "../../components/paragraph.svelte";
  import Carousel from "../../components/carousel.svelte";

  let carouselImages = [
    {path: "/images/process/assess.webp", alt: "assess"},
    {path: "/images/process/design.webp", alt: "assess"},
    {path: "/images/process/build-1.webp", alt: "assess"},
    {path: "/images/process/build-2.webp", alt: "assess"},
    {path: "/images/process/build-3.webp", alt: "assess"}
  ]
</script>

<div class="md:col-span-4 text-xl md:text-3xl">
  <p class='text-orange inline'>Process:</p> 
</div>

<div class="hidden justify-self-end md:flex md:col-span-6 md:flex-row md:text-2xl lg:text-3xl">
  <p class='mr-1'>Follow The Builds:</p>
  <a href="https://www.instagram.com/winfill_developments/" target="_blank" rel="noopener noreferrer" class="underline decoration-orange hover:text-orange text-right">Instagram</a> 
</div>

<div class="col-span-full mb-6 md:text-lg xl:col-span-6 xl:text-xl">
  <h1 class="text-xl  md:text-2xl lg:text-3xl ">Assess:</h1>

  <Paragraph text={`
    At Winfill Developments, our process begins with a comprehensive assessment to ensure your project is built on a solid foundation. 
    We can guide you through the crucial first steps of finding a suitable building site or assessing your current plot. 
    We evaluate your sites potential and align it with your vision, taking into consideration zoning bylaws, and potential site challenges. 
    By offering expert advice from the outset, we set the stage for a successful build.
  `} extraStyles={"my-4 lg:my-8"} />

  <Paragraph text={`
    If you have a potential project you would like to discuss please reach out: <a href="/contact" class="underline decoration-orange text-orange">Contact us</a>
  `}/>
</div>

<div class="col-span-full xl:col-span-3 xl:col-start-8">
  <img src="/images/process/assess.webp" alt="winfill developments">
</div> 

<div class="col-span-full mb-6 md:order-6 md:text-lg xl:col-span-6 xl:col-start-5 xl:text-xl">
  <h1 class="text-xl  md:text-2xl lg:text-3xl ">Design:</h1>

  <Paragraph text={`
    After a site assessment, we offer true in-house design-build services. Design-build provides the advantage of a seamless, integrated approach to construction, where design and execution are managed under one roof. 
    This method fosters collaboration, reduces potential delays, and streamlines communication, ensuring your vision is realized efficiently and cost-effectively. 
    If you already have a preferred designer/architect we are always willing to collaborate with them and build your project, we also offer pre-construction plan review services.
  `} extraStyles={"my-4 lg:my-8"} />

  <Paragraph text={`
    At the heart of our design philosophy is a holistic approach that considers the architectural details of a building, the interior space and its occupants, and the surrounding landscape, including its formal and ecological environment. 
    This comprehensive approach allows us to create a cohesive and integrated design that is both aesthetically pleasing and environmentally sustainable.
  `} extraStyles={"my-4 lg:mb-8"} />
  
  <Paragraph text={`
    Winfill Developments adheres to a systematic design process that involves multiple phases, ensuring that the client can make well-timed and well-informed decisions in an orderly fashion. 
    We will provide several deliverables for your assessment and endorsement before moving on to the subsequent phase.
  `} extraStyles={"my-4 lg:mb-8"} />

  <Paragraph text={`
    If you would like to learn more about our design process and view previous design work please download our full: <a href="/contact" class="underline decoration-orange text-orange">Corporate Profile</a>
  `} extraStyles={"my-4 lg:mb-8"} />
</div>

<div class="col-span-full md:order-5 xl:col-span-3 xl:col-start-1">
  <img src="/images/process/design.webp" alt="winfill developments">
</div> 

<div class="col-span-full mb-6 md:order-7 md:row-span-3 md:text-lg xl:col-span-6 xl:text-xl">
  <h1 class="text-xl  md:text-2xl lg:text-3xl ">Build:</h1>

  <Paragraph text={`
    When building our philosophy is rooted in bringing the sophisticated tools and practices typically reserved for commercial construction to all our projects, regardless of scale. 
    Outlined below are some of our techniques.
  `} extraStyles={"my-4 lg:my-8"} />

  <h3 class="font-bold">Pre Construction & Value Engineering:</h3>
  <Paragraph text={`
    Prior to construction, Winfill offers preconstruction services. 
    We will complete a comprehensive review of your project where each scope of work is reviewed by our team, we will consider our previous knowledge and experience, current market conditions, historical data, subcontractor input, and more. 
    This process is coupled with proactive value engineering exercises which will provide the owner with additional opportunities to develop solutions to decrease the cost and risk of the project.
  `} extraStyles={"mb-4 lg:mb-8"} />
  
  <h3 class="font-bold">Project planning & Scheduling:</h3>
  <Paragraph text={`
    Project planning is the greatest tool to ensure that the project is completed on budget and on time. We begin our scheduling efforts in our pre-construction sessions with all project stakeholders. 
    Within these partnering sessions, our team will provide leadership and expertise in the planning of the initial site investigations, mobilization strategies, document reviews, development of project plans, site logistics reviews, mobilization dates, and more. 
    Within our project planning partnering sessions, we will identify project goals and critical project milestones. 
    Confirming these milestones will allow the team to commit to specific schedule requirements and allow us to build a comprehensive, integrated plan to meet these scheduled dates.
  `} extraStyles={"mb-4 lg:mb-8"} />

  <Paragraph text={`
    At Winfill two main scheduling techniques are utilized for planning purposes; 
    the first is a master schedule, typically a Gantt chart which can be can be easily circulated to our trade partners, which drives the workflow of the project based on the established milestones. 
    Based on the master schedule and on-site progress, weekly work plans are generated using a 3-week look ahead format which includes input from our trade partners and our Superintendent. 
    This allows us to track committed task status, and link tracked progress to our master schedule.
  `} extraStyles={"mb-4 lg:mb-8"} />

  <h3 class="font-bold">Monthly Reporting:</h3>
  <Paragraph text={`
    Winfill provides monthly reporting on the health of projects once underway. 
    This reporting template may be customized to what is most useful to all parties to capture and communicate project information and outcomes. 
    Our standard template features the following key elements:
  `} extraStyles={"mb-4 lg:mb-8"} />

  <ul class="list-disc list-outside ms-8 mb-4 lg:mb-8">
    <li>Progress summary with progress photos</li>
    <li>Upcoming work plans</li>
    <li>Quality Concerns/Corrections</li>
    <li>Budget update, budget adjustment summaries, change order summaries and cash flow projections</li>
  </ul>

  <h3 class="font-bold">Quality Control:</h3>
  <Paragraph text={`
    Winfill follows a “Quality First” methodology which is the process of building it right the first time. 
    This process goes beyond reporting and repairing deficiencies and focuses on initially preventing deficiencies. 
    Quality is a major factor in subcontractor selection, and our past completed projects have allowed us to build a rolodex of trusted trade partners.
    Regardless of the partner selected, creating a strong working culture on-site is of critical importance. 
    “Do it right the first time” is not only a phrase but a culture that the entire site needs to believe in and take pride in.
  `} extraStyles={"mb-4 lg:mb-8"} />

  <Paragraph text={`
    To ensure quality is maintained weekly quality inspections are performed by our site superintendent to monitor workmanship and installed material. 
    In the event that deficiencies are noted, they are tracked in our digital deficiency log and assigned to the responsible contractor.
  `} extraStyles={"mb-4 lg:mb-8"} />

  <h3 class="font-bold">Project Turn Over:</h3>
  <Paragraph text={`
    Winfill takes pride in the finishing touches and the smallest details. 
    We anticipate where our clients’ eyes will be drawn and make sure what they see is the perfect realization of their original vision. 
    Together with our trade partners, product specialists, and installers, our project team undertakes a thorough commissioning of each residence where we identify, document, and develop action plans for any deficiencies. 
    We conduct rigorous testing of the mechanical and electrical systems to ensure each space is safe and fully functional. 
    As well, Winfill will also assemble residence-specific Master O&M manuals that feature all appliance O&M manuals, fixture manuals, and material care instructions to ensure all information is available in a central location for easy reference. 
    Finally, we perform a deep clean of the space so that we leave no trace once we turn over the keys. 
    Once we are satisfied that everything is as it should be, we schedule a welcome tour of the residence with our clients.
  `} extraStyles={"mb-4 lg:mb-8"} />

  <Paragraph text={`
    If you would like to learn more about our design process and view previous design work please download our full: <a href="/contact" class="underline decoration-orange text-orange">Corporate Profile</a>
  `} extraStyles={"mb-4 lg:mb-8"} />  
</div>

<div class="col-span-full md:order-8 xl:col-span-3 xl:col-start-8">
  <img src="/images/process/build-1.webp" alt="winfill developments">
</div> 

<div class="col-span-full md:order-9 xl:col-span-3 xl:col-start-8">
  <img src="/images/process/build-2.webp" alt="winfill developments">
</div> 

<div class="col-span-full md:order-10 xl:col-span-3 xl:col-start-8">
  <img src="/images/process/build-3.webp" alt="winfill developments">
</div> 


<Carousel images={carouselImages} />
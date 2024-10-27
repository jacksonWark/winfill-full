<script lang="ts">
  import Paragraph from "../../components/paragraph.svelte";


</script>

<div class="md:col-span-4 text-xl md:text-3xl">
  <p class='text-orange inline'>About:</p> 
</div>

<div class="hidden justify-self-end md:flex md:col-span-6 md:flex-row md:text-2xl lg:text-3xl">
  <p class='mr-1'>Follow The Builds:</p>
  <a href="https://www.instagram.com/winfill_developments/" target="_blank" rel="noopener noreferrer" class="underline decoration-orange hover:text-orange text-right">Instagram</a> 
</div>


<div class="col-span-full mt-4 lg:mt-8">
  <h1 class="text-xl md:text-2xl lg:text-3xl ">Background:</h1>
</div>
<div class="col-span-full md:text-lg xl:col-span-5 xl:text-xl">
  <Paragraph text={`
    Established in 2020 by two brothers, an Engineer, and an Industrial Designer, 
    Winfill Developments focuses on designing and building unique structures while maintaining a high standard of construction quality. 
    Winfill is particularly committed to working within mature neighborhoods, where the integration of modern design and construction techniques with the existing character of the area is crucial. 
    This focus ensures that each project enhances the surrounding community but, also respects the established architectural and cultural context.
  `} />

  <h1 class="text-xl my-4 md:text-2xl lg:text-3xl lg:my-8">Philosophy:</h1>

  <Paragraph text={`
    At Winfill Developments, our philosophy is rooted in bringing the sophisticated tools and practices typically reserved for commercial construction to all our projects, regardless of scale. 
    We emphasize in-house capabilities, including comprehensive design and carpentry services, to maintain control and consistency throughout each construction phase. 
    Our commitment to transparency is reflected in our concise project accounting and monthly project reports, ensuring clients are always informed and engaged. 
    Additionally, our quality assurance program is designed to uphold the highest construction standards, guaranteeing that every project meets and exceeds expectations.
  `}/>
</div>

<div class="col-span-full xl:col-span-4 xl:col-start-7">
  <img src="/images/about/winfill-bros.webp" alt="winfill developments">
</div> 

<div class="col-span-full mt-4 lg:mt-8">
  <h1 class="text-xl md:text-2xl lg:text-3xl ">Testimonials:</h1>
</div>

<div class="col-span-full md:text-lg xl:col-span-5 xl:text-xl">

  <Paragraph text={`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis mi eget justo porta, sit amet eleifend nibh semper. Quisque eu suscipit mi, nec gravida metus. 
    Donec euismod velit vel euismod dignissim. Ut ullamcorper, libero vel viverra ullamcorper, ligula ex tempor tortor, a mattis elit velit sed nisl. 
    Fusce quam nunc, mattis malesuada rutrum maximus, ullamcorper sollicitudin odio.
    Vestibulum sit amet ultrices eros, ac posuere tellus. In mauris lectus, pharetra nec vestibulum eu, dapibus eu quam.
    <span class="text-orange"> - Dan Welsh, President of Amber Peak Developments</span>
  `} />

  <Paragraph text={`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis mi eget justo porta, sit amet eleifend nibh semper. Quisque eu suscipit mi, nec gravida metus. 
    Donec euismod velit vel euismod dignissim. Ut ullamcorper, libero vel viverra ullamcorper, ligula ex tempor tortor, a mattis elit velit sed nisl. 
    Fusce quam nunc, mattis malesuada rutrum maximus, ullamcorper sollicitudin odio.
    Vestibulum sit amet ultrices eros, ac posuere tellus. In mauris lectus, pharetra nec vestibulum eu, dapibus eu quam.
    <span class="text-orange"> - Dr John Nesbitt, Owner of <a href="/projects/wedge" class="underline decoration-orange hover:text-black">Wedge</a></span>
  `} extraStyles={"my-4 lg:my-8"} />

  <Paragraph text={`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis mi eget justo porta, sit amet eleifend nibh semper. Quisque eu suscipit mi, nec gravida metus. 
    Donec euismod velit vel euismod dignissim. Ut ullamcorper, libero vel viverra ullamcorper, ligula ex tempor tortor, a mattis elit velit sed nisl. 
    Fusce quam nunc, mattis malesuada rutrum maximus, ullamcorper sollicitudin odio.
    Vestibulum sit amet ultrices eros, ac posuere tellus. In mauris lectus, pharetra nec vestibulum eu, dapibus eu quam.
    <span class="text-orange"> - Ryan Bodner, Owner of <a href="/projects/husky" class="underline decoration-orange hover:text-black">Husky</a></span>
  `} extraStyles={"my-4 lg:my-8"} />
</div>

<div class="col-span-full xl:col-span-4 xl:col-start-7">
  <img src="/images/about/interior.webp" alt="winfill developments">
</div> 
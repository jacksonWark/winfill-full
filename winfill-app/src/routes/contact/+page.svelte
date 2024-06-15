<script lang="ts">
    import Paragraph from "../../components/paragraph.svelte";
    import ProjectTile from "../../components/project-tile.svelte";

</script>



<div class="col-span-full lg:col-span-2">
    <div class="w-full text-xl md:text-2xl">
        <p class='text-orange inline mr-2'>Let's Build</p> 
    </div>

    <Paragraph text={`
        We commence each project with a collaborative introduction.
        Our team will personally visit your site (or assist in finding one) and attentively listen to your ideas, all while sharing our insights and creativity.
        We dedicate time to ideat with you, regardless of the project's scale. 
        Whether it's multi-family developments, custom homes, residential additions, or garages, we have sucessfully constructed them all.
    `}/>

    <ProjectTile alt='contact' source='Husky.webp' route='' imagesPerRow={1} index={0} />

</div>




<div class="flex flex-col col-span-full lg:col-span-4 lg:col-start-4">
    <div class="mb-6">
        <p class="text-md md:text-2xl">
            For project inquiries contact 
        </p>
        <p class="text-md md:text-2xl">
            <b>780 803 2405</b>
             or 
             <a href="mailto:info@winfill.ca" class="underline decoration-orange hover:text-orange">info@winfill.ca</a>
        </p>
    </div>
    <div class="flex justify-self-end text-md mb-16 md:flex-row md:text-2xl">
        <p class='mr-1 '>Follow The Builds:</p>
        <a href="https://www.instagram.com/winfill_developments/" target="_blank" rel="noopener noreferrer" class="underline decoration-orange hover:text-orange text-right">Instagram</a> 
    </div>

    <div class="w-full">
        <form class="bg-white grid md:grid-cols-2 gap-6">
          <div class="flex flex-row justify-start items-center col-span-2 md:col-span-1">
            <label class="inline text-sm font-bold mr-2" for="email">Email</label>
            <input class="inline shadow appearance-none w-full py-1 px-2 leading-tight focus:outline-none focus:border" id="email" type="email">
          </div>
          <div class="flex flex-row justify-start items-center col-span-2 md:col-span-1">
            <label class="inline text-sm font-bold mr-2 align-middle" for="name">Name</label>
            <input class="inline shadow appearance-none w-full py-1 px-2 leading-tight focus:outline-none focus:border" id="name" type="text">
          </div>
          <div class="col-span-2">
            <label class="block text-sm font-bold mb-2" for="message">Message</label>
            <textarea class="shadow appearance-none w-full h-32 py-1 px-2 leading-tight focus:outline-none focus:border" id="message"></textarea>
          </div>
          <div class="flex justify-end col-span-2 items-center">
            <p class='mr-6' id='status'></p>
            <button class="bg-orange hover:text-black text-white font-bold py-1 px-2 focus:outline-none focus:shadow-outline" type="button">Submit</button>
          </div>
        </form>
    </div>

</div>

<div class="col-span-full  flex flex-row justify-center mt-16 lg:mt-0 lg:col-span-1 lg:col-start-9">
    <div class="w-1/2 md:w-1/4 lg:w-full relative">
        <img src="/images/AB-icon.webp" alt="winfill">
        <div class="absolute text-nowrap -right-6 top-0 w-6 rotate-90 lg:text-lg font-bold">Proudly Serving Alberta</div>
    </div>
</div>
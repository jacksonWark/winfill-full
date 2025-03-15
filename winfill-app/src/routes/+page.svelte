<script>
    import Paragraph from '../components/paragraph.svelte';
    import Youtube from '../components/youtube/Youtube.svelte';
    const about = 
    `
        <b>About:</b> 
        Established in 2020 by two brothers, an Engineer, and an Industrial designer, Winfill Developments focuses on residential infill design, construction, and development. 
        We take pride in building unique structures while maintaining a high standard of construction quality in established neighborhoods. 
        Our in-house design team allows us to take a streamlined approach to the design process. Our tailored processes unify the client / designer / builder team.
    `
</script>

<div class="col-span-1 md:col-span-10 lg:col-start-2 lg:col-span-8 relative">

    

    <div class="hidden md:flex">
        <div class="w-8 h-auto border-b"></div>
        <div class="h-8 w-full border-b border-l mr-4">
            <img class="h-8 translate-y-4 -translate-x-4 relative left-full select-none" src="/images/circle-dot-transp-3.webp" alt="">
        </div>
        
    </div>
    <div class="flex flex-col md:flex-row">
        <div class="hidden w-8 border-r md:flex flex-col items-center justify-start"> 
            <p class="md:pt-2 text-orange font-bold whitespace-nowrap [writing-mode:sideways-lr]" >Designers and Builders of Finely Crafted Builds</p>
        </div>
        <div class="w-full pt-6 md:p-6 md:pr-12 ">
            <Youtube id="GcUH7OyY8nQ" altThumb="/youtube/home.webp" mute={true} autoplay={true}/>
        </div>
    </div>
        
</div> 


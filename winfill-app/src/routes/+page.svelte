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

<div class="col-span-1 md:col-span-5  lg:col-span-6 xl:col-span-7 relative">
    <Youtube id="GcUH7OyY8nQ" altThumb="/youtube/home.webp" mute={true} autoplay={true}/>
    <!--<img src='./images/landing-box-house.webp' alt="Box House">-->
</div>
<div class="col-span-1 md:col-span-4 md:col-start-7 lg:col-span-3 lg:col-start-8 xl:col-span-2 xl:col-start-9">
    <Paragraph text={about}>
    </Paragraph>
</div>

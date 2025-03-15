<script lang="ts">

    export let images: { path: string, alt: string}[];

    let currentSlide = "slide0";
</script>

<div class="carousel col-span-full pb-20 w-full h-[80vh] md:h-[70vh] md:order-11 md:pb-0">
    {#each images as image,i}
        {#if currentSlide==("slide"+i)}
            <div id="slide{i}" class="carousel-item relative size-full">
                <div class="h-full bg-cover" style="{`background-image:url('${image.path}')`}">
                    <div class="h-full bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                        <img src={image.path} alt={image.alt} class="size-full p-0 md:pl-20 md:pr-20 object-contain" />
                        <div class="absolute left-5 right-5 top-full translate-y-1/2 md:top-1/2  flex md:-translate-y-1/2 transform justify-between">
                            <a href="#slide{i == 0 ? images.length-1 : i-1}" 
                                class="btn btn-circle text-orange text-4xl md:text-8xl md:drop-shadow-[0_0px_5px_rgba(0,0,0,.8)]" 
                                on:click={() => {currentSlide = "slide" + (i == 0 ? images.length-1 : i-1)}}> ❮ </a>
                            <a href="#slide{i == images.length-1 ? 0 : i+1}"  
                                class="btn btn-circle text-orange text-4xl md:text-8xl md:drop-shadow-[0_0px_5px_rgba(0,0,0,.8)]" 
                                on:click={() => {currentSlide = "slide" + (i == images.length-1 ? 0 : i+1)}}>❯</a>
                        </div>
                    </div>
                </div>
            </div>
        {/if} 
    {/each} 
</div>
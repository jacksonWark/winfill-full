<script lang="ts">

    export let images: { path: string, alt: string}[];

    let currentSlide = "slide0";
</script>

<div class="carousel col-span-full w-full h-screen ">
    {#each images as image,i}
        {#if currentSlide==("slide"+i)}
            <div id="slide{i}" class="carousel-item relative size-full">
                <img src={image.path} alt={image.alt} class="size-full pl-20 pr-20 object-contain" />
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide{i == 0 ? images.length-1 : i-1}" class="btn btn-circle text-orange text-8xl" on:click={() => {currentSlide = "slide" + (i == 0 ? images.length-1 : i-1)}}>❮</a>
                    <a href="#slide{i == images.length-1 ? 0 : i+1}" class="btn btn-circle text-orange text-8xl" on:click={() => {currentSlide = "slide" + (i == images.length-1 ? 0 : i+1)}}>❯</a>
                </div>
            </div>
        {/if} 
    {/each}
</div>
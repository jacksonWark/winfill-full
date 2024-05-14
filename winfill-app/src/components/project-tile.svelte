<script lang="ts">
    export let alt: string;
    export let source: string;
    export let route: string;
    export let size: number;
    export let index: number;


    let start: number = (index % (6/size))*size + 4;
    let firstRow : string = index < (6/size) ? "md:pt-6" : "";
    let style: string = `col-span-1 md:col-span-${size} md:col-start-${start} ${firstRow}`;
    
    let active: boolean = false;
</script>


<div class={style}>
    <a href={route} class="block relative" on:mouseenter={()=>{active = true}} on:mouseleave={()=>{active = false}}>
        <img src={source} alt={alt}>
        <div class={(active == true ? "flex" : "hidden") + " absolute size-full top-0 items-center transition backdrop-brightness-50"}>
            <h1 class="text-orange font-bold text-xl text-center w-full">{alt}</h1>
        </div>
    </a>
</div>
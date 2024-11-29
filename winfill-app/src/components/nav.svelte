<script lang="ts">
    import { base } from "$app/paths";
    import { onNavigate } from "$app/navigation";

    let defStyle = "size-min leading-none font-bold hover:text-orange p-2.5";

    let menuOpen: boolean = false;
    let subMenuOpen: boolean = false;
    onNavigate(() => { menuOpen = false });
    onscroll = () => { menuOpen = false };

    let body = document.getElementById('body');
    body?.addEventListener("click", function () { menuOpen = false }, false);
    
</script>

<!-- NAVIGATION -->
<nav class="flex flex-col mb-6">
    <div class="flex flex-nowrap flex-col border-1 border-b relative md:flex-row">
        <div class="flex justify-between flex-row">
            <a class="block" href="/">
                <img class="w-44 xs:w-36 md:h-14 md:w-min max-w-none" src={base+"/images/Winfill_Logo-Top.png"} alt="Winfill Developments">  
            </a>
            <button id='menu-toggle' class="block cursor-pointer right-0 top-0 z-50 md:hidden" on:click={(ev)=>{menuOpen = !menuOpen; ev.stopPropagation()}}>
                <svg class="fill-current text-black-900" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 20 20">
                    <title>menu</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>
            
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div id="menu" role="navigation" on:click={(ev) => {ev.stopPropagation();}} 
            class=  {`${menuOpen ? 'flex' : 'hidden'} w-full flex-col mb-5 items-center text-center 
                    md:flex md:flex-row md:justify-around md:items-stretch md:grow md:mb-0`} >
            <div class="flex flex-col p-x-8  md:flex-row md:grow md:justify-around md:px-6 xl:px-16">
                <div class="flex flex-col-reverse">
                    <div id="projects" class="size-auto relative translate-y-1.5">
                        <a class={defStyle + " relative"} href="/projects">Projects</a>
                        <button on:click={(ev)=>{subMenuOpen = !subMenuOpen; ev.stopPropagation();}}>
                            <svg class="w-[12px] h-[12px] fill-black hover:fill-orange" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                {#if (subMenuOpen)}
                                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                                {:else}
                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                                {/if}
                            </svg>
                        </button>
                        <div class={`${subMenuOpen ? "flex opacity-100" : "opacity-0 hidden"} bg-white w-40 top-full origin-top flex-col border-y md:border-none md:pl-2.5 md:translate-y-1 md:absolute md:text-left`}>
                            <a class="w-full font-bold hover:text-orange" href="/projects#homes">Homes</a>
                            <a class="w-full font-bold hover:text-orange" href="/projects#multi-family">Multi-Family</a>
                            <a class="w-full font-bold hover:text-orange" href="/projects#small-projects">Small Projects</a>
                            <a class="w-full font-bold hover:text-orange" href="/projects#for-sale">For Sale</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col-reverse">
                    <div id="about" class="size-auto relative group/about translate-y-1.5">
                        <a class={defStyle} href="/about">About</a>
                    </div>
                </div>
                <div class="flex flex-col-reverse">
                    <div id="process" class="size-auto relative group/process translate-y-1.5">
                        <a class={defStyle} href="/process">Process</a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="flex flex-col-reverse">
                    <div id="contact" class="size-auto relative group/contact translate-y-1.5">
                        <a class="size-min leading-none font-bold hover:text-orange p-2.5 md:py-2.5 md:pr-0" href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img class="h-6 w-min md:h-8" src={base+"/images/Winfill_Logo-Bot.png"} alt="Winfill Developments">
</nav>
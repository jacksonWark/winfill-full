<script lang="ts">
    //type Route = 'dashboard' | 'team' | 'projects' | 'calendar';
    import { page } from '$app/stores';
    $: route = $page.url.pathname.split('/').filter(Boolean).pop() || '/';
    let currStyle = "size-min leading-none font-bold hover:text-orange p-2.5 underline decoration-orange decoration-2";
    let defStyle = "size-min leading-none font-bold hover:text-orange p-2.5";
    $: console.log(`page is ${route}`)
</script>

<!-- NAVIGATION -->
<nav class="flex flex-col">
    <div class="flex flex-nowrap flex-col border-1 border-b relative md:flex-row">
        <a class="block" href="/">
            <img class="w-44 xs:w-36 md:h-14 md:w-min max-w-none" src="./images/Winfill_Logo-Top.png" alt="Winfill Developments">  
        </a>
        <label for="menu-toggle" class="cursor-pointer absolute right-0 top-0 md:hidden block">
            <svg class="fill-current text-black-900" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 20 20">
                <title>menu</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle"/>
            
        <div class=
            "hidden w-full flex-col mb-5 items-center text-center 
            md:flex md:flex-row md:justify-around md:items-stretch md:grow md:justify-around md:mb-0" 
        id="menu">
            <div class="flex flex-col p-x-8  md:flex-row md:grow md:justify-around md:px-6 xl:px-16">
                <div class="flex flex-col-reverse">
                    <div id="projects" class="size-auto relative group/projects translate-y-1.5">
                        <a class={(route == "projects" ? currStyle : defStyle) + " relative"} href="/projects">Projects</a>
                        <div class="absolute text-left w-40 pl-2.5 top-full origin-top opacity-0 hidden flex-col group-hover/projects:flex group-hover/projects:opacity-100 translate-y-1 ">
                            <a class="w-full font-bold hover:text-orange" href="/projects#">Homes</a>
                            <a class="w-full font-bold hover:text-orange" href="/projects#">Multi-Family</a>
                            <a class="w-full font-bold hover:text-orange" href="/projects#">Small Projects</a>
                            <a class="w-full font-bold hover:text-orange" href="/projects#">For Sale</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col-reverse">
                    <div id="about" class="size-auto relative group/about translate-y-1.5">
                        <a class={route == "about" ? currStyle : defStyle} href="/about">About</a>
                    </div>
                </div>
                <div class="flex flex-col-reverse">
                    <div id="process" class="size-auto relative group/process translate-y-1.5">
                        <a class={route == "process" ? currStyle : defStyle} href="/process">Process</a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="flex flex-col-reverse">
                    <div id="contact" class="size-auto relative group/contact translate-y-1.5">
                        <a class="size-min leading-none font-bold hover:text-orange p-2.5 md:py-2.5 md:pl-2.5" href="/#">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img class="h-6 w-min md:h-8" src="./images/Winfill_Logo-Bot.png" alt="Winfill Developments">
</nav>
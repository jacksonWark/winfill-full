<script lang="ts">
    import "../app.css"
    import Nav from '../components/nav.svelte';
    import Footer from '../components/footer.svelte';
</script>


<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=''>
    <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
</svelte:head>


<Nav />

<div class="grid grid-cols-1 gap-y-6 overflow-hidden mb-6 mt-12 md:grid-cols-10 md:gap-x-6">
    <slot />    
</div>

<Footer />



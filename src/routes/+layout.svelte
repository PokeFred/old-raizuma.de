<script lang="ts">
    import "../app.css"
    import Sidebar from "$components/Sidebar.svelte"
	import Footer from "$components/Footer.svelte"
    import PageTransition from "$components/PageTransition.svelte"
    import { page } from "$app/stores"
    import { getPageTitle } from "$utils/Routes"
</script>

<svelte:head>
    <title>{getPageTitle($page.route.id)}</title>
</svelte:head>

<div class="w-screen h-screen text-slate-200 relative">
    <div class="top-0 left-0 w-full h-full overflow-hidden absolute">
        <div class="top-0 left-0 w-full h-full bg-[#010c0e] absolute"></div>
        <div class="top-1/4 left-0 w-10/12 h-1/5 bg-[#ff99dd] rounded-l-full -rotate-[10deg] -translate-x-1/4 -translate-y-1/3 blur-3xl opacity-25 absolute"></div>
        <div class="bottom-1/4 left-2/4 w-10/12 h-1/5 bg-[#4ddbff] rounded-l-full rotate-[15deg] -translate-x-1/4 translate-y-1/2 blur-3xl opacity-25 absolute"></div>
    </div>
    <div class="top-0 left-0 w-full h-full flex overflow-hidden absolute">
        <div class="top-0 left-1/2 w-17 h-16 text-3xl bg-slate-800/90 rounded-b-xl flex justify-center items-center -translate-x-1/2 absolute px-8 lg:px-24 z-10">
            <img src="/raizuma-logo.png" alt="" class="mx-auto w-full h-full">
        </div>
        <div class="w-16 h-full shrink-0">
            <Sidebar />
        </div>
        <div class="w-full h-full overflow-y-scroll relative pt-20 pb-2">
            <PageTransition url={$page.url}>
                <div class="w-auto h-auto rounded-2xl px-8 pb-4">
                    <slot />
                </div>
                <Footer />
            </PageTransition>
        </div>
    </div>
</div>

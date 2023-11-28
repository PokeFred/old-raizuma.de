<script lang="ts">
    import { page } from "$app/stores"
    import { goto } from "$app/navigation"
    import { getRoutes } from "$utils/Routes"
</script>

<div class="mx-auto my-2 w-4/5 h-auto border border-neutral-300 rounded-2xl"></div>
<div class="w-w-4/5 mx-auto mb-3 h-auto pl-2 pr-2">
    <div>
        <img src="/raizuma-logo.png" alt="" class="mx-auto w-2/5 h-auto">
    </div>
    <div class="ml-auto mr-auto w-fit font-medium text-center text-lg px-4">Raizuma, das Team der Ewigkeit und deutschen Übersetzungen</div>
</div>
<div class="w-auto h-auto">
    <div class="w-auto h-auto flex justify-center items-center flex-wrap">
        {#each getRoutes() as route}
            <div class={($page.route.id === route.path) ? "opacity-50" : "" }>
                <button on:click={() => goto(route.path)} class="m-2 w-fit h-auto text-xl font-bold border rounded-2xl px-4 py-1">
                    <div class={($page.route.id === route.path) ? "underline" : "" }>{route.name}</div>
                </button>
            </div>
        {/each}
    </div>
</div>
<div class="mx-auto my-2 w-4/5 h-auto border border-neutral-300 rounded-2xl"></div>
<div class="mt-4 sm:mt-2 mx-auto mb-1 w-fit text-xl text-center px-4">© 2023 Raizuma. All rights reserved.</div>

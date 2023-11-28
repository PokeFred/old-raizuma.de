<script lang="ts">
    import { page } from "$app/stores"
    import { goto } from "$app/navigation"
    import { getRoutes } from "$utils/Routes"
    import Icon from "svelte-awesome"
</script>

<div class="w-full h-full flex justify-start items-center">
    <div class="w-full h-auto bg-slate-800 rounded-r-xl py-2">
        {#key $page.route}
            {#each getRoutes() as route}
                <div class="w-full aspect-square p-2">
                    <div class="w-full aspect-square flex justify-center items-center relative group">
                        {#if $page.route.id === route.path}
                            <button on:click={() => goto(route.path)} class="w-full h-full bg-gray-200/25 rounded-xl flex justify-center items-center font-bold underline">
                                <Icon data={route.icon.active} scale=1.5 />
                            </button>
                        {:else}
                            <button on:click={() => goto(route.path)} class="w-full h-full rounded-xl flex justify-center items-center hover:bg-gray-200/10">
                                <Icon data={route.icon.main} scale=1.5 />
                            </button>
                        {/if}

                        <div class="top-1/2 right-0 w-auto h-auto translate-x-full -translate-y-1/2 hidden z-50 absolute pl-2 group-hover:block">
                            <div class="text-xl text-center bg-slate-800 rounded-xl px-4 py-1">{route.name}</div>
                        </div>
                    </div>
                </div>
            {/each}
        {/key}
    </div>
</div>

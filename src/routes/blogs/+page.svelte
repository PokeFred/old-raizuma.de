<script lang="ts">
    import type { PageData } from "./$types"
    import { goto } from "$app/navigation"

    export let data: PageData

    let counter: number = 0
    function leftOrRight(): boolean {
        let remainder: number = counter % 2
        counter++
        return remainder === 0
    }
</script>

<div class="sm:mx-8 md:mx-16 mb-4 w-auto h-auto text-2xl lg:text-4xl text-center bg-slate-800/90 rounded-xl">Blog Posts</div>

<div class="mx-auto w-full max-w-xl h-auto">
    {#if data.status}
        {#each data.posts as post}
            <div class="{leftOrRight() ? "ml-0 mr-auto" : "ml-auto mr-0"} my-6 w-4/5 h-auto border border-neutral-300 rounded-2xl p-4">
                <div class="text-2xl lg:text-3xl">{post.title}</div>
                <div class="my-2 text-base">{post.description}</div>
                <div class="block sm:flex sm:justify-between sm:items-end">
                    <div class="mx-auto sm:ml-0 w-fit h-auto">
                        <button on:click={() => goto(`/blogs/${post.identifier}`)} class="mt-2 w-fit h-auto text-2sm lg:text-xl border rounded-3xl transition duration-300 px-8 py-1 hover:scale-110">Read more</button>
                    </div>
                    <div class="mt-2 sm:mt-0 mr-2 text-center text-2sm lg:text-xl">{post.publish}</div>
                </div>
            </div>
        {/each}
    {:else}
        {@html data.message}
    {/if}
</div>

<script lang="ts">
    import { goto } from "$app/navigation"

    export let id: string = ""
    export let title: string = ""
    export let image: string = ""
</script>

<div class="w-full h-full flex justify-center items-center">
    <button on:click={() => goto(`/projects/${id}`)} class="mx-auto my-4 w-64 h-64 cursor-pointer relative group">
        <div class="top-0 left-0 w-64 h-64 bg-[#ffffff33] border border-[#ffffff4d] rounded-3xl shadow-[0_4px_30px_#0000001a] backdrop-blur transition duration-300 absolute group-hover:rotate-[25deg]"></div>
        <div class="top-0 left-0 w-64 h-64 transition duration-300 absolute">
            <img src="{image}" alt="" class="w-full h-full bg-cover bg-center rounded-3xl" loading="lazy">
        </div>
        <div class="top-0 left-0 w-64 h-64 bg-[#ffffff33] border border-[#ffffff4d] rounded-3xl shadow-[0_4px_30px_#0000001a] backdrop-blur transition duration-700 opacity-0 absolute group-hover:opacity-100">
            <div class="top-0 left-0 w-full h-full text-5xl font-[2500] text-slate-900 text-center flex justify-center items-center absolute p-4">{title}</div>
        </div>
    </button>
</div>

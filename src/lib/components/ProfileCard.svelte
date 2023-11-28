<script lang="ts">
    export let name: string = ""
    export let position: string = ""
    export let image: string = ""
</script>

<div class="m-4 w-40 h-52 relative">
    <div class="left-0 bottom-0 w-40 h-44 bg-slate-900 rounded-xl absolute">
        <div class="-top-8 left-4 w-32 h-32 absolute">
            <img src="{image}" alt="" class="w-32 h-32 bg-cover bg-center rounded-3xl">
        </div>
        <div class="top-24 left-2 right-2 w-auto h-20 flex flex-wrap justify-center items-center absolute">
            <div class="w-full h-8 text-xl flex justify-center items-end">{name}</div>
            <div class="w-full h-12 text-xs text-center flex justify-center items-start pt-1">{position}</div>
        </div>
    </div>
</div>

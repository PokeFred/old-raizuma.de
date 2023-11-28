<script lang="ts">
    import type { PageData } from "./$types"

    export let data: PageData
</script>

<div>
    {#if data.status}
        <div class="text-3xl text-center underline pb-2">{data.post.title}</div>
        <div class="text-lg">{@html data.post.text}</div>
        <div class="text-sm text-right pt-2">Veröffentlicht am {data.post.publish}</div>
    {:else}
        {@html data.message}
    {/if}
</div>

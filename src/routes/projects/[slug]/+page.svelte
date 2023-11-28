<script lang="ts">
    import type { PageData } from "./$types"

    export let data: PageData
</script>

<div>
    {#if data.status}
        <div class="text-3xl text-center underline pb-2">{data.project.title}</div>
        <div class="text-lg">{@html data.project.text}</div>
    {:else}
        {@html data.message}
    {/if}
</div>

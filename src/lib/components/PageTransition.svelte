<script lang="ts">
    import { fly } from "svelte/transition"

    export let url: URL
    const duration: number = 400    // in milliseconds
    const x: number = -75           // in px
    const y: number = 0             // in px
</script>

{#key url}
    <div
        in:fly={{ x: x, y: y, duration: duration, delay: duration }}
        out:fly={{ x: x, y: y, duration: duration }}
    >
        <slot />
    </div>
{/key}

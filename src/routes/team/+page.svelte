<script lang="ts">
    import ProfileCard from "$components/ProfileCard.svelte"
</script>
<div class="sm:mx-8 md:mx-16 mb-4 w-auto h-auto text-2xl lg:text-4xl text-center bg-slate-800/90 rounded-xl">Das Team</div>
<div class="mx-16">
    <div class="w-full h-auto flex flex-wrap justify-center items-center">
        <ProfileCard name="Hachiro" position="CEO" image="/team/hachiro.png" />
        <ProfileCard name="Vidpic" position="Leitung Yokai Watch Deutschland" image="/team/vidpic.png" />
        <ProfileCard name="Sprössling" position="Leitung Yokai Watch Deutschland" image="/team/sprössling.png" />
        <ProfileCard name="Marv" position="Leitung Yokai Watch & Deltarune Deutschland" image="/team/marv.png" />
        <ProfileCard name="Nagisa Shiota" position="Leitung Deltarune Deutschland & Developer" image="/team/sev.jpeg" />
        <ProfileCard name="PokeFred" position="Developer" image="/team/pokefred.png" />
    </div>
</div>

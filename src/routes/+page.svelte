<script lang="ts">
  import Navbar from './Navbar.svelte'
  import Hero from './Hero.svelte'
  import Work from './Work.svelte'
  import Connect from './Connect.svelte'

  let navHeight: number
</script>

<Navbar bind:height={navHeight} />
<main>
  <Hero {navHeight} />
  <Work />
  <Connect />
</main>

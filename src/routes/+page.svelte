<script lang="ts">
  import Navbar from './Navbar.svelte'
  import Hero from './Hero.svelte'
  import Work from './Work.svelte'
  import Connect from './Connect.svelte'
  import Footer from './Footer.svelte'
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import Tools from './Tools.svelte'

  let navHeight: number
  onMount(() => {
    if ($page.url.hash === '#work') goto('/#work')
    if ($page.url.hash === '#connect') goto('/#connect')
  })
</script>

<Navbar bind:height={navHeight} />
<main>
  <Hero {navHeight} />
  <Work />
  <Tools />
  <Connect />
</main>
<Footer />

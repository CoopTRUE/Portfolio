<script lang="ts">
  import ethers from '$lib/svgs/ethers.svg'
  import sass from '$lib/svgs/sass.svg'
  import svelte from '$lib/svgs/svelte.svg'
  import typescript from '$lib/svgs/typescript.svg'
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'

  const images = {
    ethers,
    sass,
    svelte,
    typescript
  } as Record<string, string>
  const entires = Object.entries(images)

  let scroll = 0
  const scrollPerMs = 0.4
  const scrollPerImage = 250
  onMount(() => {
    const id = setInterval(() => (scroll += scrollPerMs), 1)
    return () => clearInterval(id)
  })

  let innerHeight: number = 1000
  export let hidden = false
</script>

<svelte:window bind:innerHeight />
<div class="wrapper" class:hidden>
  <div class="overlay" in:fade={{ duration: 400, delay: 600 }} />
  <div
    class="container"
    style:translate={`0 -${scroll}px`}
    in:fly={{ x: 0, y: 100, delay: 900, duration: 1500 }}
  >
    <!-- perfect timing for only rendering the images that are visible -->
    {#each Array(Math.floor(2 + innerHeight / 300) + Math.floor(scroll / scrollPerImage)) as _, i}
      {@const [name, image] = entires[i % entires.length]}
      <img src={image} alt={name} />
    {/each}
  </div>
</div>

<style lang="scss">
  .wrapper {
    margin: 0 auto;
    height: 100%;
    width: 15rem;
    overflow: hidden;
    position: relative;
    &.hidden {
      display: none;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    overflow: hidden;
  }
  .overlay {
    position: absolute;
    // top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // fade in from the top
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 10%);
    z-index: 10;
  }
</style>

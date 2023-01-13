<script lang="ts">
  import ethers from '$lib/svgs/ethers.svg'
  import sass from '$lib/svgs/sass.svg'
  import svelte from '$lib/svgs/svelte.svg'
  import typescript from '$lib/svgs/typescript.svg'

  const images = {
    ethers,
    sass,
    svelte,
    typescript
  } as Record<string, string>

  export let hovered: string | null = null
</script>

<div class="wrapper">
  <div class="container">
    {#each Array(20) as _}
      {#if !hovered}
        {#each Object.entries(images) as [image, src], i}
          <img {src} alt={image} />
        {/each}
      {:else}
        <img src={images[hovered]} alt={hovered} />
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  .overlay {
    background: linear-gradient(25deg, rgb(230, 196, 236) 0%, rgb(255, 255, 255) 100%);
    height: 100%;
    z-index: 1;
  }
  .wrapper {
    height: 100%;
    width: 15rem;
    position: absolute;
    right: 12.5%;
    top: 0;
    overflow: hidden;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    // make a green background with the top and the bottom faded out
    overflow: hidden;
    // scroll the images but make it seemless
    animation: scroll 60s linear infinite;
  }
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
</style>

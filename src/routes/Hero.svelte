<script lang="ts">
  import ethers from '$lib/svgs/ethers.svg'
  import sass from '$lib/svgs/sass.svg'
  import svelte from '$lib/svgs/svelte.svg'
  import typescript from '$lib/svgs/typescript.svg'
  import { draw, fade, fly, scale } from 'svelte/transition'
  import wheel from '$lib/svgs/wheel.svg'
  import Strip from './Strip.svelte'

  const tools = {
    ethers: { image: ethers, link: 'https://docs.ethers.io/v5/' },
    sass: { image: sass, link: 'https://sass-lang.com/' },
    svelte: { image: svelte, link: 'https://svelte.dev/' },
    typescript: { image: typescript, link: 'https://www.typescriptlang.org/' }
  }
  const images = {
    wheel
  }

  export let navHeight: number
  export let contentHeight: number
  $: height = `max(500px, calc(100vh - ${navHeight}px))`
  let windowWidth: number
</script>

<svelte:window bind:innerWidth={windowWidth} />
<section style:height>
  <div class="content" bind:clientHeight={contentHeight}>
    <h2 in:fly={{ x: 0, y: 25, duration: 400, delay: 300 }} class="based">
      Based in San Francisco, California 🇺🇸
    </h2>
    <h1 class="title" in:fly={{ x: 0, y: 50, duration: 400 }}>
      Trader, developer,<br />and student.
    </h1>
    <div class="tools-i-work-with">
      <h2 in:fade={{ duration: 300, delay: 600 }}>Tools I work with</h2>
      <ul class="tools">
        {#each Object.entries(tools) as [tool, { image, link }], i}
          <li class="tool" in:fly={{ x: 0, y: 25, duration: 400, delay: 600 + i * 100 }}>
            <a href={link} target="_blank" rel="noreferrer">
              <img src={image} alt={tool} />
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <Strip hidden={windowWidth < 1000} />
</section>
<!-- in:scale={{ duration: 500, delay: 600 + i * 100, opacity: 0, start: 0.8 }} -->
<div class="bg" id="home" />

<style lang="scss">
  $mobile: 1000px;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // nice white to light purple gradient
    background: linear-gradient(25deg, rgb(230, 196, 236) 0%, rgb(255, 255, 255) 100%);
    z-index: -10;
  }
  section {
    max-width: var(--max-width);
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    @media (max-width: $mobile) {
      grid-template-columns: auto 0fr;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: min(8.5vw, 4rem);
    @media (max-width: $mobile) {
      align-items: center;
      text-align: center;
    }
  }
  .title {
    font-size: clamp(2rem, 4rem, 10vw);
    margin: 0;
  }
  .based {
    font-size: clamp(0.8rem, 4vw, 1.5rem);
    margin: 0;
  }
  .tools-i-work-with {
    font-size: 1.1rem;
    h2 {
      margin-bottom: 1rem;
    }
    .tools {
      display: flex;
      flex-direction: row;
      list-style: none;
      gap: 1rem;
    }
    .tool {
      img {
        width: 1.875rem;
        height: 1.875rem;
        object-fit: contain;
        transition: scale 0.2s ease;
      }
      &:hover img {
        scale: 1.2;
      }
    }
  }
</style>

<script lang="ts">
  import ethers from '$lib/svgs/ethers.svg'
  import sass from '$lib/svgs/sass.svg'
  import svelte from '$lib/svgs/svelte.svg'
  import typescript from '$lib/svgs/typescript.svg'
  import { draw, fade, fly, scale } from 'svelte/transition'
  import wheel from '$lib/svgs/wheel.svg'
  import Strip from './Strip.svelte'

  const tools = {
    ethers,
    sass,
    svelte,
    typescript
  } as Record<string, string>
  const images = {
    wheel
  }

  export let navHeight: number
  let hoveredTool: string | null = null
</script>

<section id="home" style:height={`calc(100vh - ${navHeight}px)`}>
  <h2 in:fly={{ x: 0, y: 25, duration: 400, delay: 300 }} class="based">
    Based in San Francisco, California 🇺🇸
  </h2>
  <h1 in:fly={{ x: 0, y: 50, duration: 400 }}>Trader, developer,<br />and student.</h1>
  <div class="tools-i-work-with">
    <h2 in:fade={{ duration: 300, delay: 600 }}>Tools I work with</h2>
    <ul class="tools">
      {#each Object.entries(tools) as [tool, src], i}
        <li
          class={tool.toLowerCase()}
          in:fly={{ x: 0, y: 25, duration: 400, delay: 600 + i * 100 }}
        >
          <img
            {src}
            alt={tool}
            on:mouseenter={() => (hoveredTool = tool)}
            on:mouseleave={() => (hoveredTool = null)}
          />
        </li>
      {/each}
    </ul>
  </div>
  <div class="project-images-wrapper">
    <div class="images">
      {#each Object.entries(images) as [image, src], i}
        <svg href={src} />
        <!-- <svg {src} in:draw={{ duration: 400, delay: 600 + i * 100 }} /> -->
      {/each}
    </div>
  </div>
  {#if hoveredTool}
    <img
      src={tools[hoveredTool]}
      alt=""
      class="large-tool"
      in:scale={{ duration: 400, start: 0.5 }}
    />
  {/if}
  <Strip hovered={hoveredTool} />
</section>
<!-- in:scale={{ duration: 500, delay: 600 + i * 100, opacity: 0, start: 0.8 }} -->
<div class="bg" />

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
  .large-tool {
    position: absolute;
    @media (min-width: $mobile) {
      right: 0;
    }
    @media (max-width: $mobile) {
      z-index: -2;
      opacity: 0.3;
    }
    width: min(20rem, 80vw);
    height: min(20rem, 80vw);
    object-fit: contain;
  }
  section {
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: min(8.5vw, 4rem);
    margin: 0 auto;
    position: relative;
    @media (max-width: $mobile) {
      align-items: center;
      text-align: center;
    }
  }
  h1 {
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
    li {
      &:hover {
        cursor: pointer;
      }
    }
    img {
      width: 1.875rem;
      height: 1.875rem;
      object-fit: contain;
    }
  }
  .project-images-wrapper {
    position: relative;
    z-index: -1;
    .images {
      position: absolute;
      bottom: 75%;
      right: 0;
      img {
        width: 20rem;
        height: 20rem;
      }
    }
  }
</style>

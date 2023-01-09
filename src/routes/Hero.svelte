<script lang="ts">
  import { fly } from 'svelte/transition'

  export let navHeight: number
</script>

<section
  id="home"
  style:height={`calc(100vh - ${navHeight}px)`}
  in:fly={{ x: 0, y: 25, duration: 400 }}
>
  <h2 class="based">Based in San Francisco, California 🇺🇸</h2>
  <h1>Designer, developer,<br />and student.</h1>
  <ul class="tools">
    <li class="svelte">
      <span>Svelte</span>
      <img src="" alt="" />
    </li>
    <li class="sass">
      <span>Sass</span>
      <img src="" alt="" />
    </li>
    <li class="typescript">
      <span>TypeScript</span>
      <img src="" alt="" />
    </li>
    <li class="ethers">
      <span>Ethers.js</span>
      <img src="" alt="" />
    </li>
  </ul>
</section>

<style lang="scss">
  section {
    width: var(--max-width);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;
  }
  h1 {
    font-size: 4rem;
    margin: 0;
  }
  h2 {
    font-size: 1.5rem;
    margin: 0;
  }
</style>

<script lang="ts">
  import github from '$lib/svgs/github.svg'
  import { fly } from 'svelte/transition'
  export let height: number
</script>

<nav bind:clientHeight={height} in:fly={{ x: 0, y: -25, duration: 400, delay: 600 }}>
  <a href="https://github.com/coopTRUE" target="_blank" rel="noreferrer" class="github">
    <img src={github} alt="github" />
  </a>
  <ul class="links">
    <li>
      <a href="#home">Home</a>
    </li>
    <a href="#work">Work</a>
    <li>
      <a href="#connect">Connect</a>
    </li>
  </ul>
</nav>

<style lang="scss">
  @media (max-width: 635px) {
    nav {
      justify-content: center !important;
    }
    .links {
      display: none !important;
    }
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: calc(var(--max-width) + 200px);
    padding: 20px 100px;
    margin: 0 auto;
  }

  .github img {
    width: 3rem;
    height: 3rem;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    list-style: none;
    a {
      text-decoration: none;
      color: black;
      font-size: min(1.2rem, 2.7vw);
      // moving underline effect
      position: relative;
      &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: black;
        transition: width 0.3s ease;
      }
      &:hover:after {
        width: 100%;
      }
    }
  }
</style>

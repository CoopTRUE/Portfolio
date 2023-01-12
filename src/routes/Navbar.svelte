<script lang="ts">
  import { fly } from 'svelte/transition'
  export let height: number
</script>

<nav bind:clientHeight={height} in:fly={{ x: 0, y: -25, duration: 400, delay: 600 }}>
  <div class="logo" />
  <div class="links">
    <a href="#home">Home</a>
    <a href="#work">Work</a>
    <a href="#connect">Connect</a>
  </div>
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: calc(var(--max-width) + 200px);
    padding: 20px 100px;
    margin: 0 auto;
  }

  .logo {
    width: 2rem;
    height: 2rem;
    background-color: #000;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
  }
</style>

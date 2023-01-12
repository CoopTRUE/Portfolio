<script>
  import svelte from '$lib/svgs/svelte.svg'
</script>

<footer>
  <p>Created by <a href="https://github.com/coopTRUE">Cooper</a></p>
  <p>
    Made with <a href="https://svelte.dev"><img src={svelte} alt="svelte" /></a> in the Bay Area
  </p>
</footer>

<style>
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
  }
  a {
    margin: 0 0.2rem;
  }
  img {
    width: 1rem;
  }
</style>

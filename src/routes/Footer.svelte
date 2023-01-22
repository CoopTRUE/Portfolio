<script>
  import github from '$lib/svgs/github.svg'
  import svelte from '$lib/svgs/svelte.svg'
</script>

<footer>
  <a href="https://github.com/CoopTRUE/Portfolio">
    <img src={github} alt="project github" class="github" />
  </a>
  <p>Created by <a href="https://github.com/coopTRUE">Cooper</a></p>
  <p>
    Made with
    <a href="https://svelte.dev">
      <img src={svelte} alt="svelte" class="svelte" />
    </a>
    in the Bay Area
  </p>
</footer>

<style>
  footer {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    margin: 0 0.2rem;
  }
  .svelte {
    width: 1rem;
  }
  .github {
    width: 2rem;
    margin-bottom: 0.5rem;
  }
</style>

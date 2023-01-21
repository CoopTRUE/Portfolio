<script lang="ts">
  import express from '$lib/svgs/express.svg'

  const tools = [
    {
      name: 'Expressjs',
      img: express,
      color: '#2361DAFB',
      link: 'https://expressjs.com/',
      description: `Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.`,
      use: `idk`
    }
  ]
</script>

<section id="tools">
  <h2 class="title">Tools I Use</h2>
  <div class="tools">
    <div class="express">
      <img width="350" src={express} alt="expressjs" />
      <p>Express</p>
    </div>
    <div class="express">
      <img width="350" src={express} alt="expressjs" />
      <p>Express</p>
    </div>
    <div class="express">
      <img width="350" src={express} alt="expressjs" />
      <p>Express</p>
    </div>
  </div>
</section>

<style lang="scss">
  #tools {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .title {
    font-size: 2.5rem;
    margin: 5rem 0;
  }
  .tools {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    // every other tool should be on the right
    .express:nth-child(odd) {
      align-self: flex-end;
    }
  }
</style>

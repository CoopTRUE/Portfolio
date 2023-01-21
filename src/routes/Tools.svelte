<script lang="ts">
  import { inview } from 'svelte-inview'
  import tools from './tools'

  const visible = Array(tools.length).fill(false) as boolean[]
</script>

<section id="tools">
  <h2 class="title">Tools I Work With</h2>
  <div class="tools">
    {#each tools as { img, name, color, desc, use }, i}
      <div
        class="tool"
        style="--bg-color: {color}"
        use:inview={{ unobserveOnEnter: true }}
        on:enter={() => (visible[i] = true)}
        class:transitionBg={visible[i]}
      >
        <div class="name-container">
          <img src={img} alt={name} />
          <h2>{name} <span>is a {desc}</span></h2>
        </div>
        <div class="use">
          <p>{use}</p>
        </div>
      </div>
    {/each}
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
  }
  .tool {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 2rem;
    grid-template-rows: 300px;
    grid-template-areas: 'name use';
    // red to white gradient
    border-radius: 20px;
    padding: 1rem 2rem;
    background: linear-gradient(90deg, white 0%, white 30%, var(--bg-color) 100%);
    background-size: 1000% 100%;
    &:nth-child(even) {
      grid-template-columns: 5fr 1fr;
      grid-template-areas: 'use name';
      background: linear-gradient(90deg, var(--bg-color) 0%, white 70%, white 100%);
      background-size: 1000% 100%;
      background-position: 100% 0;
    }
    &.transitionBg {
      animation: transitionBg 0.7s ease forwards;
    }
    @keyframes transitionBg {
      0% {
      }
      100% {
        background-position: 0 0;

        background-size: 100% 100%;
      }
    }
    .name-container {
      grid-area: name;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      h2 {
        font-size: 1.2rem;
        font-weight: 400;
      }

      span {
        font-family: 'AirbnbCereal_W_Lt';
        font-size: 1rem;
        width: 40%;
      }
      // .img-wrapper {
      //   width: 300px;
      //   height: 200px;
      // }
      img {
        width: 300px;
        height: 200px;
        object-fit: contain;
      }
    }
    .use {
      grid-area: use;
      display: grid;
      place-items: center;
      p {
        font-family: 'AirbnbCereal_W_Lt';
        font-size: 1rem;
        width: 80%;
      }
    }
  }
</style>

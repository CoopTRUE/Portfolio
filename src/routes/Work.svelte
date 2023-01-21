<script lang="ts">
  import { inview } from 'svelte-inview'
  import projects from './projects'

  const visible = Array(projects.length).fill(false) as boolean[]
</script>

<section id="work">
  <h2 class="title">My Work</h2>
  <div class="projects">
    {#each projects as { color, img, name, desc }, i}
      <div
        class="project-wrapper"
        style:background={color}
        use:inview={{ unobserveOnEnter: true }}
        on:enter={() => (visible[i] = true)}
        class:transitionRight={visible[i] && i % 2 !== 0}
        class:transitionLeft={visible[i] && i % 2 === 0}
      >
        <div class="project">
          <img src={img} alt={name} />
          <div class="text">
            <h3 class="name">{name}</h3>
            <p class="description">{desc}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  #work {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 2.5rem;
      margin: 5rem 0;
    }
  }
  .projects {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .project-wrapper {
    //980 500
    width: min(60rem, 90vw);
    height: min(30rem, 50vw);
    border-radius: 40px;
    position: relative;
    overflow: hidden;
    visibility: hidden;
    background: linear-gradient(180deg, rgb(85, 32, 148) 0%, rgb(126, 145, 232) 100%);
    &.transitionRight {
      visibility: visible;
      // fast to slow easing
      animation: transitionRight 0.7s ease;
    }
    &.transitionLeft {
      visibility: visible;
      animation: transitionLeft 0.7s ease;
    }
    @keyframes transitionRight {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
    @keyframes transitionLeft {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
    &:nth-child(even) {
      .project {
        grid-template-areas: 'text image';
        img {
          // border-radius: 10px 0 0 0 !important;
          border-top-left-radius: 10px !important;
        }
      }
    }
  }
  .project {
    bottom: 0;
    position: absolute;
    // display: flex;
    // align-items: center;
    display: grid;
    // grid-template-columns: 620px 1fr;
    // grid-template-rows: 1fr;
    grid-template-areas: 'image text';
    @media (max-width: 780px) {
      grid-template-areas: 'text' 'image' !important;
      .name {
        text-align: center;
      }
      img {
        border-radius: 10px 10px 0 0 !important;
      }
    }
    place-items: center;
    .text {
      grid-area: text;
      margin: 0 3.125rem;
    }
    .name {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .description {
      font-size: 1.2rem;
      font-family: 'AirbnbCereal_W_Lt';
    }
    overflow: hidden;
    img {
      margin-top: auto;
      grid-area: image;
      width: min(620px, 50vw);
      border-top-right-radius: 10px;
    }
  }
</style>

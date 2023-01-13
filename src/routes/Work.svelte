<script lang="ts">
  import mvCasino from '$lib/images/mv-casino.png?w=1500&webp'

  const projects = [
    {
      name: 'Miniverse Casino',
      description: `Miniverse Casino is a centralized casino that runs on the Fantom Opera network.`,
      image: mvCasino,
      color: 'rgb(183,131,248)'
    },
    {
      name: 'Grape Casino',
      description: `Grape Casino is a decentralized casino that runs on the Fantom Opera network.`,
      image: mvCasino,
      color: 'rgb(183,131,248)'
    },
    {
      name: 'Miniverse Casino',
      description: `Miniverse Casino is a centralized casino that runs on the Fantom Opera network.`,
      image: mvCasino,
      color: 'rgb(183,131,248)'
    },
    {
      name: 'Grape Casino',
      description: `Grape Casino is a decentralized casino that runs on the Fantom Opera network.`,
      image: mvCasino,
      color: 'rgb(183,131,248)'
    },
    {
      name: 'Miniverse Casino',
      description: `Miniverse Casino is a centralized casino that runs on the Fantom Opera network.`,
      image: mvCasino,
      color: 'rgb(183,131,248)'
    },
    {
      name: 'Grape Casino',
      description: `Grape Casino is a decentralized casino that runs on the Fantom Opera network.`,
      image: mvCasino,
      color: 'rgb(183,131,248)'
    }
  ] as const
</script>

<section id="work">
  <h2 class="title">My Work</h2>
  <div class="projects">
    {#each projects as project}
      <div class="project-wrapper" style:background={project.color}>
        <div class="project">
          <img src={project.image} alt="" />
          <div class="text">
            <h3 class="name">{project.name}</h3>
            <p class="description">{project.description}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: 100vh;
    max-width: var(--max-width);
    margin: 0 auto;
    .title {
      font-size: 2.5rem;
      margin: 5rem 0;
    }
  }
  .projects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .project-wrapper {
    //980 500
    width: 60rem;
    height: 30rem;
    border-radius: 40px;
    position: relative;
    overflow: hidden;
    &:nth-child(even) {
      .project {
        grid-template-areas: 'text image';
        img {
          border-radius: 10px 0 0 0 !important;
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
    place-items: center;
    .text {
      grid-area: text;
      margin: 0 3.125rem;
    }
    .name {
      font-size: 2rem;
    }
    .description {
      font-size: 1.2rem;
      font-family: 'AirbnbCereal_W_Lt';
    }
    overflow: hidden;
    img {
      grid-area: image;
      width: 620px;
      border-radius: 0 10px 0 0;
    }
  }
</style>
